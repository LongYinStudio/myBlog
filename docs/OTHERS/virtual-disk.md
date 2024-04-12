# 虚拟机压缩磁盘空间

> 包括但不限于(vmware、virtualbox)

一般压缩 VM 磁盘文件的方法：

- 在虚拟机里：

1. 删除没用的文件。
2. dd if=/dev/zero of=file 的方法，用内容为二进制 0 的文件（一个或多个文件）填充所有磁盘空间。
3. 删除这个填充空间的文件。

- 关闭虚拟机，在虚拟机之外操作：

1. 使用虚拟机的工具复制/压缩磁盘镜像。

原因：

- 虚拟机在操作磁盘镜像的时候，类似于只操作扇区，不考虑其上的文件系统的类型和内容；
- 磁盘镜像的存储类似于稀疏矩阵的存储，只有数据全 0 的时候空间才能被释放。
- 全 0 空间的释放需要外部工具操作，目前好像没有动态释放的。