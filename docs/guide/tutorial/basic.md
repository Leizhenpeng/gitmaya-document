# GitMaya 基础概念

## 1. 基础概念

### 1.1 协同办公平台（IM Application）

GitMaya 对于协同办公平台的统一定义，比如飞书、Discord 等

### 1.2 代码托管平台（Code Application）

GitMaya 对于代码托管平台的统一定义，比如 GitHub、GitLab 等

### 1.3 GitMaya 团队（Team）

GitMaya 的团队，主要用于关联 IM 应用的租户和 Code 应用的组织；以及管理团队成员等

### 1.4 GitMaya 用户（User / Bind User / Repo User / Team Member）

GitMaya 的用户，主要用于关联 IM 应用的用户和 Code 应用的用户；根据不同的情况会创建对应的关联对象，比如用于管理团队成员的 Team Member、用于关联 Repo 角色的 Repo User 等

### 1.5 代码仓库（Repo）

GitMaya 的代码仓库，跟 Code 应用中的代码仓库相对应；GitMaya 中一个代码仓库会对应一个群组；代码仓库对应的 Pull Request、Issue 等在 GitMaya 中也会创建对应的关联对象

### 1.6 群组（Chat Group）

GitMaya 的协同群，跟 IM 应用中的群组相对应；GitMaya 中一个群租会对应一个代码仓库；群组中会通过指令、消息卡片话题等形式来提供更方便的协同交互

## 2. 使用终端

### 2.1 GitMaya 管理面板

完成 GitMaya 相关配置的管理端，主要用于创建和管理 GitMaya 团队，创建和管理 GitMaya 团队成员绑定等

### 2.2 GitMaya GitHub App

完成 GitMaya 和 Github 关联的中间应用，主要用于完成 GitHub 对 GitMaya 相关的授权

### 2.3 GitMaya 飞书自建应用

完成 GitMaya 和飞书关联的中间应用，主要用于完成飞书对 GitMaya 相关的授权
