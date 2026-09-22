# AI Learning by Doing - 規格書

## 1. 專案概述

- **名稱**: AI Learning by Doing
- **定位**: 後端工程師的 LLM 應用入門網站
- **目標用戶**: 後端工程師、AI 完全小白、每週學習時間 < 1 小時
- **核心理念**: 每週一個小專案，30-45 分鐘可完成

## 2. 技術堆疊

| 層面 | 技術 |
|------|------|
| 前端 | HTML + CSS + Vanilla JS（單頁應用） |
| 部署 | GitHub Pages |
| 費用 | 免費 |

## 3. 功能清單

### 3.1 首頁
- 課程總覽（8 週專案列表）
- 學習進度顯示（LocalStorage）
- 快速開始按鈕

### 3.2 課程頁
- 教學文章（Markdown 渲染）
- 程式碼區塊（Syntax Highlighting）
- 每週專案目標說明
- 預估完成時間

### 3.3 進度追蹤
- LocalStorage 儲存進度
- 勾選完成章節
- 顯示完成百分比

## 4. 內容大綱

| 週次 | 主題 | 專案 |
|------|------|------|
| Week 1 | LLM API 基礎 | 天氣問答機器人 |
| Week 2 | Prompt Engineering | 文章摘要工具 |
| Week 3 | Embedding + 向量 | 文件搜尋系統 |
| Week 4 | RAG 實作 | 簡易 RAG 聊天機器人 |
| Week 5 | Agent 基礎 | 上網查資料的 AI 助理 |
| Week 6 | LINE Bot 整合 | LINE AI 機器人 |
| Week 7 | Fine-tuning 入門 | LoRA 微調 |
| Week 8 | 部署上線 | Docker 部署 |

## 5. UI/UX 設計

### 5.1 配色
- 主色: `#1a1a2e` (深藍黑)
- 次色: `#16213e` (深藍)
- 強調色: `#00d4ff` (電光藍)
- 文字: `#eaeaea` (淺灰白)
- 成功: `#00c853` (綠)
- 警告: `#ff9800` (橙)

### 5.2 字體
- 標題: Noto Sans TC, sans-serif
- 內文: Noto Sans TC, sans-serif
- 程式碼: JetBrains Mono, monospace

### 5.3 響應式
- 桌面: > 1024px
- 平板: 768px - 1024px
- 手機: < 768px

## 6. 驗收標準

- [ ] 首頁顯示 8 週課程列表
- [ ] 點擊課程可查看內容
- [ ] 程式碼區塊有 Syntax Highlighting
- [ ] 進度可儲存至 LocalStorage
- [ ] 行動裝置可正常瀏覽
- [ ] 部署至 GitHub Pages 成功
