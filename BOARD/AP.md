# 创建热点

## 使用`create_ap`创建热点

```bash
# 格式：sudo create_ap [无线接口] [有线接口] [热点名称] [密码]
sudo create_ap wlan0 eth0 MyHotspot MyPassword
# wlan0：开发板的无线网卡接口（通过 iwconfig 确认）。
# eth0：已连接互联网的接口（如有线或已拨号的 PPP 接口）
# 有用参数:
--freq-band 5 # 使用5GHz频段减少干扰（需硬件支持）
--hidden # 隐藏SSID
```

## 开机自启动(Systemd服务)

```bash
sudo nvim /etc/systemd/system/create_ap.service
```

create_ap.service 内容(替换接口和参数):

```ini
[Unit]
Description=Create AP Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/create_ap wlan0 eth0 MyHotspot MyPassword
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

启动并开机自启:

```bash
sudo systemctl enable create_ap
sudo systemctl start create_ap
```

## 配置PPPoE拨号(可选)

手动配置PPPoE:

```bash
# 配置PPPoE连接（按提示输入账号密码）
sudo pppoeconf
# 启动拨号连接
sudo pon dsl-provider
# 检查连接状态
plog
```

自动启动PPPoE:
编辑 `/etc/network/interfaces`, 添加以下内容:

```ini
auto eth0
iface eth0 inet manual
  pre-up /sbin/ifconfig eth0 up
  post-down /sbin/ifconfig eth0 down

auto dsl-provider
iface dsl-provider inet ppp
  provider dsl-provider
```

## 其他问题

- 无线网卡不支持AP模式：

  ```bash
  sudo iw list | grep "Supported interface modes" -A 8 # 若输出包含 AP，则支持；否则需更换无线网卡。
  ```

- 无`create_ap`命令(以ubuntu/debian为例):

  ```bash
  # 更新系统
  sudo apt update && sudo apt upgrade -y
  # 安装PPPoE拨号工具
  sudo apt install pppoeconf rp-pppoe -y
  # 安装create_ap及其依赖
  sudo apt install hostapd dnsmasq iptables -y
  git clone https://github.com/oblique/create_ap
  cd create_ap
  sudo make install
  ```
