<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1d6ECaC-LaAasY6CyMc5ysTCriC7Hyh_y

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

### 方法一：通过 Vercel CLI

1. 安装 Vercel CLI（如果还没有安装）:
   ```bash
   npm i -g vercel
   ```

2. 在项目根目录运行:
   ```bash
   vercel
   ```

3. 按照提示完成部署配置

### 方法二：通过 Vercel Dashboard

1. 将项目推送到 GitHub/GitLab/Bitbucket

2. 访问 [Vercel Dashboard](https://vercel.com/dashboard)

3. 点击 "Add New Project"

4. 导入你的 Git 仓库

5. 配置环境变量：
   - 在项目设置中添加 `GEMINI_API_KEY` 环境变量
   - 或者添加 `VITE_GEMINI_API_KEY`（推荐，因为 Vite 会自动处理以 `VITE_` 开头的变量）

6. 点击 "Deploy"

### 环境变量配置

在 Vercel 项目设置中，添加以下环境变量：
- `GEMINI_API_KEY` 或 `VITE_GEMINI_API_KEY`：你的 Gemini API 密钥

### 构建配置

项目已配置好 `vercel.json`，Vercel 会自动：
- 使用 `npm run build` 构建项目
- 将 `dist` 目录作为输出目录
- 配置 SPA 路由重写规则
- 优化静态资源缓存
