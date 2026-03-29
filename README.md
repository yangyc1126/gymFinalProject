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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### 使用 [ESLint](https://eslint.org/)

```sh
npm run lint:fix
```

### 使用 [Prettier](https://prettier.io/)

```sh
npm run format
```

## Commit 摘要規範

摘要以不超過 50 個字元為原則。其格式應為

```
{類型}: {簡述}
```

其中簡述以中文或英文撰寫皆可。

以下為允許的類型種類：

- feat: 新增功能
- fix: Bug fixes
- chore: 不屬於 fix 或 feat, 也沒有修改 src 或 test 內的檔案 (例如: 更新 dependencies)
- refactor: 重構程式碼 (不屬於 fix 或 feat)
- docs 更新文件 (例如: README 或其他 markdown 檔案)
- style: 不影響程式邏輯的變更，通常為程式風格相關的調整。
- test: 新增或修改測試
- perf: 改善效能
- ci: CI (continuous integration) 相關
- revert: reverts 回先前的 commit

### 範例

```
feat: 新增申請頁面
fix: 修正送出按鈕無法點擊的問題
```
