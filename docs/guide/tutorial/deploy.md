# 📃 部署流程

建议使用在线版本：[🖥 立即尝试 GitMaya]("https://gitmaya.com")

如果你想手动部署 GitMaya ，需要共计 3 个步骤。

### 步骤 1. 安装 GitHub 应用

您首先需要创建一个 GitHub 应用，详细信息请参考 [从零开始部署 GitHub 应用][Deploy GitHub App From Scratch]。

### 步骤 2. 部署 GitMaya

您可以选择使用 [自托管](#🛳-自托管) 或 [本地部署](#⌨️-本地部署) 来部署 GitMaya 的前端和后端。

#### 🛳 自托管

GitMaya 提供支持无服务器和 [Docker 镜像][docker-release-link] 的自托管版本。这使您能够在几分钟内部署自己的聊天机器人，无需任何先前的知识。

#### `A` 使用 Docker-Compose 部署

[![][docker-release-shield]][docker-release-link]
[![][docker-size-shield]][docker-size-link]
[![][docker-pulls-shield]][docker-pulls-link]

我们提供了一个 Docker 镜像，用于在您自己的私人设备上部署 GitMaya 服务。使用以下命令启动 GitMaya 服务：

###### 1. 下载 `docker-compose.yml` 和 `.env` 文件

首先，下载 `docker-compose.yml` 和 `.env` 文件；它们包含 GitMaya 服务的配置，包括 MySQL、Celery 和 Redis。

```fish
$ wget [https://raw.githubusercontent.com/ConnectAI-E/GitMaya/main/deploy/docker-compose.yml](https://raw.githubusercontent.com/ConnectAI-E/GitMaya/main/deploy/docker-compose.yml)
$ wget [https://raw.githubusercontent.com/ConnectAI-E/GitMaya/main/deploy/.env.example](https://raw.githubusercontent.com/ConnectAI-E/GitMaya/main/deploy/.env.example) -O .env
```

###### 2. 配置环境变量

接下来，您需要配置 `.env` 文件。您应该用您在 [步骤 1](#步骤-1-安装-github-应用) 中创建的 GitHub App 信息替换这些变量。

```fish
$ vim .env
```

**将 `GITHUB_APP_NAME`、`GITHUB_APP_ID`、`GITHUB_APP_PRIVATE_KEY`、`GITHUB_CLIENT_ID`、`GITHUB_CLIENT_SECRET`、`GITHUB_WEBHOOK_SECRET` 替换到 .env 文件中**

```fish
SECRET_KEY="<REPLACE>"
FLASK_PERMANENT_SESSION_LIFETIME=86400*30
FLASK_SQLALCHEMY_DATABASE_URI="mysql+pymysql://root:gitmaya2023@mysql:3306/gitmaya?charset=utf8mb4&binary_prefix=true"

GITHUB_APP_NAME=your-deploy-name
GITHUB_APP_ID=114514
GITHUB_APP_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
<replace you private key>
-----END RSA PRIVATE KEY-----"

GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret

GITHUB_WEBHOOK_SECRET=secret
DOMAIN=127.0.0.1
```

> **NOTE**: **文件支持多行字符串，因此.pem 文件可以直接粘贴到 `.env` 文件中**

###### 3. 运行镜像

第一次运行时，它将初始化数据库，因此日志中可能包含一些错误消息。

```fish
$ docker-compose up -d
```

#### ⌨️ 本地部署

将仓库克隆到本地进行开发

#### 1. 克隆仓库

将仓库克隆到您的本地机器或服务器：

```fish
$ git clone [https://github.com/ConnectAI-E/GitMaya.git](https://github.com/ConnectAI-E/GitMaya.git)
$ cd GitMaya
```

#### 2. 安装依赖

##### 使用 pip

如果您使用 `pip`

```fish
$ pip install -r requirements.txt
```

##### 使用 pdm（推荐）

如果您使用 `pdm`

```fish
$ pdm install
```

激活虚拟环境：

```fish
$ eval $(pdm venv activate)
```

#### 3. 配置文件

在开始之前，请确保您具备以下配置文件：

- `.env`: **配置飞书、GitHub 和各种中间件变量。我们提供了一个 [.env.example](https://github.com/ConnectAI-E/GitMaya/blob/main/deploy/.env.example) 作为参考**

通过替换相关变量配置数据库

```fish
# 数据库设置
FLASK_SQLALCHEMY_DATABASE_URI="mysql+pymysql://root:gitmaya2023@mysql:3306/gitmaya?charset=utf8mb4&binary_prefix=true"
```

配置 Celery，使用 Redis 作为 Broker

```fish
# Celery 设置
CELERY_BROKER_URL=redis://redis:6379/1
CELERY_RESULT_BACKEND=redis://redis:6379/2
```

配置 GitHub App，详细信息请参考: [从零开始部署 GitHub App][Deploy GitHub App From Scratch]

```fish
# GitHub 设置
GITHUB_APP_NAME=test
GITHUB_APP_ID=1024
GITHUB_CLIENT_ID=test
GITHUB_CLIENT_SECRET=test
GITHUB_WEBHOOK_SECRET=secret
GITHUB_APP_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
<replace you private key>
-----END RSA PRIVATE KEY-----"
```

配置服务器地址

```fish
DOMAIN=127.0.0.1
```

（可选）配置 Flask

```fish
# Flask 设置
SECRET_KEY="test"
FLASK_PERMANENT_SESSION_LIFETIME=86400
```

#### 4. 运行服务器

启动 Redis：

```fish
$ docker run -d -p 6379:6379 redis:alpine
```

启动 Celery，使用 Redis 作为 Broker：

```fish
$ cd server
$ celery -A tasks.celery worker -l INFO -c 2
```

启动 MySQL：

```fish
$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=gitmaya2023 -e MYSQL_DATABASE=gitmaya -e TZ=Asia/Shanghai -p 3306:3306 -v /path/to/your/mysql/data:/var/lib/mysql -v /path/to/your/mysql/conf.d:/etc/mysql/conf.d -d mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
```

创建数据库和表 （仅需要一次）：

```fish
$ flask --app server/server:app create
```

使用 `gunicorn` 运行 GitMaya 服务器：

```fish
$ gunicorn --worker-class=gevent --workers 1 --bind 0.0.0.0:8888 -t 600 --keep-alive 60 --log-level=info server:app
```

### 步骤 3. 部署飞书 App 机器人

部署飞书（Lark）机器人应用的步骤已经集成到 GitMaya 的入门流程中。完成入门流程将自动完成与飞书相关的配置。更多详细信息，请参考 [从零开始部署飞书 App 机器人][Deploy Feishu App Bot From Scratch]。

## 📕 参考

- [从零开始部署飞书 App 机器人][Deploy Feishu App Bot From Scratch]
- [从零开始部署 GitHub App][Deploy GitHub App From Scratch]
- [飞书 App 官方文档][Feishu App Official Doc]
- [GitHub App 官方文档][GitHub App Official Doc]

[Deploy GitHub App From Scratch]: https://connect-ai.feishu.cn/wiki/OnVNwqZlhi5yM4keBWAcUF3ynFf?from=from_copylink
[Deploy GitHub App From Scratch]: https://connect-ai.feishu.cn/wiki/Qwq0wmamFiFTaXk1hfocwfpNnqf?from=from_copylink
[Deploy Feishu App Bot From Scratch]: https://connect-ai.feishu.cn/wiki/NQXywcS3Siqw60kYX8IcknDfn1e?from=from_copylink
[Feishu App Official Doc]: https://open.feishu.cn/document/home/develop-a-bot-in-5-minutes/step-1-create-app-and-enable-robot-capabilities
[GitHub App Official Doc]: https://docs.github.com/en/developers/apps/creating-a-github-app
