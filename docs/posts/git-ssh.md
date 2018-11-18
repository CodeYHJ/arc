---
title: Git operation without authorization
category: Git
---

### Git operation without authorization

Using SSH connection to avoid the password authorization.

<!-- more -->

## 1. Generate the SSH keys

Open `terminal` if using **Linux** or open `Git bash` if using **Windows**.

```
cd ~
ssh-keygen -t rsa -C "email@example.com"
```
## 2. Copy the SSH key to the remote repository

```
ssh-copy-id git_server_user@ip_address
```
Confirm the key using `SSH`, and logout.

```
ssh git_server_user@ip_address

exit
```
## 3. Indicate the URL of remote repository to using SSH

```
git+ssh://git_server_user@ip_address/reponame.git
```