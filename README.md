# 徐阳 · Tyrion

复旦大学计算与智能创新学院 **2025级非全日制人工智能硕士研究生**，软件架构师，拥有六年以上软件研发与系统架构经验。

[个人主页](https://tyrion.space/zh) · [完整简历](https://tyrion.space/zh/resume) · [English Resume](https://tyrion.space/en/resume)

## 关于我

本科毕业于大连民族大学计算机科学与技术专业。工程实践覆盖后端服务、微服务架构及音视频处理与内容分发；目前正在开展面向机器人应用的 AgentOS 实践，探索多模态感知、任务规划与执行反馈。

## 音视频系统经验

- **转码处理**：音视频转码流程的开发与集成，从源媒体处理到可播放内容产出。
- **媒体分片**：媒体分片与播放资源组织，衔接转码产物、分片资源和播放链路。
- **CDN 分发**：CDN 接入与内容分发，结合源站、分发节点和客户端表现排查访问及播放问题。
- **链路集成**：围绕媒体处理与交付环节开展系统设计、开发集成和问题排查。

## 软件工程与项目实践

- 后端研发与微服务架构，涉及 Go、PHP、Java、Node.js、MySQL、Redis 和容器化交付。
- 曾在深信服、沛顿科技等企业开展研发工作；具有交易与支付链路、业务感知和企业内部系统经验。
- **AgentOS**：项目已有任务运行时、技能执行、安全网关及仿真机器人接入基础，当前研究方向仍在探索中。

## 教育与机器人竞赛

- **复旦大学**：计算与智能创新学院，2025级非全日制人工智能硕士，在读。
- **大连民族大学**：计算机科学与技术本科，2016—2020年。
- **2018年国际水中机器人大赛**：四个项目分别获得一等奖、一等奖、二等奖、三等奖。
- **2018年中国机器人大赛**：四个项目分别获得一等奖、二等奖、二等奖、二等奖。

## 联系

学校邮箱：25263050055@m.fudan.edu.cn

---

## 网站开发说明

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker 部署

本项目已经提供 Docker 与 Docker Compose 支持，便于在服务器或云环境中部署。

### 构建镜像

在项目根目录执行：

```bash
docker build -t self-intro .
```

构建完成后，可以通过以下命令运行容器：

```bash
docker run --name self-intro -p 3000:3000 self-intro
```

然后访问 [http://localhost:3000](http://localhost:3000) 即可查看页面。

### 使用 Docker Compose（推荐，一键部署）

在任何一台安装了 Docker 的机器上，你只需要：

```bash
git clone git@github.com:TyrionXu-016/self-introduce.git
cd self-introduce
docker compose up -d --build
```

默认会在本机 `3000` 端口暴露服务，可根据需要在 `docker-compose.yml` 中调整端口映射和环境变量。

