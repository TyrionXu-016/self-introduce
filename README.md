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

