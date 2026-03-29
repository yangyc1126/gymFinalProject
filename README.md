### 開啟後端

```sh
docker compose up -d
```

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
feat:新增登入頁面
fix:修正送出按鈕無法點擊的問題
```
