# 在飞书中操作 Issue

GitMaya 支持在飞书群聊中直接操作 Issue，包括创建 Issue、查看 Issue、回复 Issue 等操作。

在飞书群聊中，**每个 Issue 为一个单独的话题**，可以在话题中查看 Issue 的详细信息，包括 Issue 的标题、描述、负责人、标签、评论等。

## 创建 Issue

目前 GitMaya 有三种创建 Issue 方式，创建好的 Issue 会同步在对应的 GitHub 代码仓库中被创建，同时应用机器人会自动在群聊中发送一个消息卡片（卡片同时也是一个话题），有关此 Issue 的所有后续操作均在消息卡片和该话题中进行。

- **通过直接输入指令来直接创建 Issue**

  直接在群聊的输入框中输入指令创建 Issue，格式如下：

  ```bash
  /issue [Issue 标题](必须) @负责人(可选) label标签(可选)
  ```

  例如输入：

  ```bash
  /issue Test issue @user1 label1,label2
  ```

  会创建标题为 `Test issue`，负责人为 `user1`，标签为 `label1` 和 `label2` 的 Issue。

- **通过回复消息来创建 Issue**

  对群聊中的消息进行回复，在回复的输入框中输入指令创建 Issue，该方式会以被回复的消息作为 Issue 的名称（title），格式如下：

  ```bash
  /issue @负责人(可选) label标签(可选)
  ```

- **通过展开输入框输入指令来创建 Issue**

  前两种方式创建的 Issue 均不支持带描述的，如果需要创建带描述的 Issue，请通过展开输入框来创建，格式如下：

  ```bash
  title: [Issue 标题](必须)
  body:
  # body 正文第一行固定以下格式
  /issue @负责人(可选) label标签(可选)
  # body 正文第二行开始就是 Issue 描述，无特定格式
  ...
  ```

  例如输入：

  ```bash
  title: Test issue
  body:
  /issue @user1 label1,label2
  This is a test issue.
  ```

  会创建标题为 `Test issue`，负责人为 `user1`，标签为 `label1` 和 `label2`，描述为 `This is a test issue.` 的 Issue。

## 回复 Issue

在 Issue 的话题中，发送消息即等同于评论回复 Issue，回复的消息会同步至 GitHub 代码仓库的 Issue Comment 中，同时 GitHub 代码仓库的 Issue Comment 的新回复也会被同步至 Issue 话题中。

## 更改 Issue 状态

在 Issue 的话题中，可以通过两种方式来关闭/重新打开 Issue，关闭后 Issue 会被标记为已关闭，同时 GitHub 代码仓库中的 Issue 也会被关闭。

- 在 Issue 话题中发送 `/close` 或 `/reopen` 指令来关闭或重新打开 Issue
- 直接在消息卡片中点击关闭 Issue 或重新打开按钮来关闭或重新打开

## 分配 Issue 负责人

在 Issue 话题中，可以通过两种方式来分配 Issue 的负责人，分配后 Issue 的负责人会被更改为指定的用户。

- 在 Issue 话题中发送 `/assign @负责人` 指令来分配 Issue 的负责人
- 直接在消息卡片中点击分配负责人按钮来分配 Issue 的负责人

## 更改 Issue 标签

在 Issue 话题中，可以通过两种方式来更改 Issue 的标签，更改后 Issue 的标签会被更改为指定的标签。

- 在 Issue 话题中发送 `/label label1,label2` 指令来更改 Issue 的标签
- 直接在消息卡片中点击更改标签按钮来更改 Issue 的标签

## 修改 Issue 标题

在 Issue 话题中，回复 `/rename 新 Issue 标题`来修改 Issue 的标题，修改后 Issue 的标题会被更改为指定的标题。

## 编辑 Issue 描述

在 Issue 话题中，回复 `/edit + 另起一行 + 新 Issue 描述`来编辑 Issue 的描述，编辑后 Issue 的描述会被更改为指定的描述。

## 查看 Issue 详情

在 Issue 话题中，回复 `/view`，机器人会返回相关 Issue 的 GitHub 链接。
