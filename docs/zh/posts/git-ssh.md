---
title: 无密码验证使用Git
category: Git
---

### 无密码验证使用Git

通过使用`SSH`的连接方式来避免每次用密码验证。

<!-- more -->

## 1. 在本地生成`SSH`公钥和密钥

如果 **Linux** 的话打开`terminal`，如果**Windows**打开`Git bash`。

```
cd ~
ssh-keygen -t rsa -C "email@example.com"
```

## 2. 复制公钥到远程仓库

```
ssh-copy-id git_server_user@ip_address
```
用`SSH`登陆远程仓库来确认下，再登出。

```
ssh git_server_user@ip_address

exit
```
## 3. 指定本地仓库的远程URL使用SSH

```
git+ssh://git_server_user@ip_address/reponame.git
```