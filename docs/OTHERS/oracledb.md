# oracle 数据库

> 使用podman安装oracle数据库

1. 安装podman:

```bash
sudo pacman -S podman # archlinux
sudo brew install podman # mac
# 等等
```

2. 安装oracle数据库:

```bash
# 登陆Oracle账号
podman login container-registry.oracle.com
# 创建所需目录
mkdir -p $HOME/oracle/data && chmod -R 777 $HOME/oracle && chmod -R 777 $HOME/oracle/data
# 运行实例
podman run -d \
  --name oracle-db \
  -p 1521:1521 \
  -e ORACLE_PWD=SecurePass123 \
  -v "$HOME"/oracle/data:/opt/oracle/oradata \
  container-registry.oracle.com/database/free:latest
```

> ORACLE_PWD 后面是密码

3. 使用navicat连接数据库 注意点

   - 服务名称使用`FREE`
   - 用户名:SYSTEM
   - 密码是上面那个
