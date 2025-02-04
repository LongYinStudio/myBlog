# 记录archlinux解决kde睡死

> 现象：睡眠导致黑屏只有鼠标，切换tty1重启sddm可以进入系统
> 可以每个方法都试一试

执行`systemctl status sddm`，查看到是`pam_kwallet5`导致的

## 方法一

将`/etc/pam.d/sddm`里两个`pam_kwallet5`注释掉，这样虽然可以解决问题，但是每次开机除了sddm要输密码，pam_kwallet5还要再输一次，麻烦

```bash
#%PAM-1.0

auth        include     system-login
-auth       optional    pam_gnome_keyring.so
-auth       optional    pam_kwallet5.so

account     include     system-login

password    include     system-login
-password   optional    pam_gnome_keyring.so    use_authtok

session     optional    pam_keyinit.so          force revoke
session     include     system-login
-session    optional    pam_gnome_keyring.so    auto_start
-session    optional    pam_kwallet5.so         auto_start
```

## 方法二

清除旧数据，`rm -rf ~/.local/share/kwalletd/*` <font color='red'>注意：这会清楚wifi密码等等，需要删除wifi重新输密码连接</font>

没有安装`kwalletmanager`，最好装上

## 方法三

使用`gnome-keyring`来代替

禁用kwallet:
```bash
kwriteconfig5 --file kwalletrc --group Wallet --key Enabled false
```

## 方法四

将`/etc/sddm.conf.d/kde_settings.conf`中关于主题的配置注释掉
```bash
[Theme]
# Current=breeze
```

