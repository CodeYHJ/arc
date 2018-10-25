---
title: パスワード認証なしのGit設定方法
category: Git
---

### Git operation without authorization

PushやPullの際に、毎回パスワードで認証する代わりに、SSHを使ってGit操作の認証を行います.

<!-- more -->

## 1. SSHキーの生成（ロカール側）

**Linux**なら`terminal`を開き、**Windows**なら`Git bash`を開きます。
下記コマンドで`SSH Public/Private Key`を生成します。

```
cd ~
ssh-keygen -t rsa -C "email@example.com"
```

## 2. リモートリポジトリへ生成された`Public Key`のみをコピーします。

```
ssh-copy-id git_server_user@ip_address
```
`SSH`で一回確認して、ログアウトします。

```
ssh git_server_user@ip_address

exit
```
## 3.　ロカール側のリポジトリのURLにはSSH方式を指定します。

```
git+ssh://git_server_user@ip_address/reponame.git
```