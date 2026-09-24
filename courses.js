// 課程資料 - 在這裡新增/修改課程
// 格式：{ day: 天數, title: 標題, desc: 描述, tags: 標籤, time: 時間, video: YouTube連結, content: 教學內容, quiz: 測驗題目 }

const COURSES = [
    {
        day: 1,
        title: "ChatGPT AI 基礎",
        desc: "AI 基礎、Prompt、日常工作應用",
        tags: ["AI", "ChatGPT"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 AI 基礎概念，掌握 ChatGPT 的基本使用方法</p>
<h3>1. 什麼是 AI？</h3><p>AI（人工智慧）是能夠模擬人類思考和學習的電腦程式。近年來大型語言模型（LLM）的突破，讓 AI 能夠理解和使用語言。</p>
<h3>2. ChatGPT 註冊與使用</h3>
<ul>
<li>前往 <a href="https://chat.openai.com" target="_blank">ChatGPT</a></li>
<li>註冊帳號（可使用 Google 或 Apple 帳號）</li>
<li>開始對話</li>
</ul>
<h3>3. 基本 Prompt 技巧</h3>
<ul>
<li><strong>明確具體</strong>：告訴 AI 你想要什麼</li>
<li><strong>提供上下文</strong>：說明背景讓 AI 更好地理解</li>
<li><strong>指定格式</strong>：如「用表格呈現」、「列出三點」</li>
</ul>
<h3>4. 日常應用範例</h3>
<pre><code># 翻譯
把以下翻譯成英文：天氣很好

# 寫信
寫一封求職信，應徵軟體工程師

# 摘要
把以下文章濃縮成三個重點：[文章內容]</code></pre>`,
        quiz: [
            { q: "ChatGPT 是由哪家公司開發的？", options: ["A) Google", "B) Microsoft", "C) OpenAI", "D) Meta"], answer: 2 },
            { q: "Prompt 的意思是？", options: ["A) 提示", "B) 問題", "C) 指令", "D) 以上皆是"], answer: 3 }
        ]
    },
    {
        day: 2,
        title: "Claude 長文件分析",
        desc: "長文件、分析、寫作",
        tags: ["AI", "Claude"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>學會使用 Claude 處理長文件和分析任務</p>
<h3>1. Claude 介紹</h3><p>Anthropic 開發的 AI 助手，擅長長文分析、寫作和思考。</p>
<h3>2. 註冊 Claude</h3>
<ul>
<li>前往 <a href="https://claude.ai" target="_blank">claude.ai</a></li>
<li>使用 Google 或 Email 註冊</li>
</ul>
<h3>3. 擅長領域</h3>
<ul>
<li><strong>長文分析</strong>：分析論文、報告</li>
<li><strong>寫作輔助</strong>：文章撰寫、潤稿</li>
<li><strong>思考幫手</strong>：複雜問題分析</li>
</ul>`,
        quiz: [
            { q: "Claude 是由哪家公司開發的？", options: ["A) OpenAI", "B) Anthropic", "C) Google", "D) Meta"], answer: 1 }
        ]
    },
    {
        day: 3,
        title: "Gemini Google 生態",
        desc: "Google 生態、圖片、文件、多模態",
        tags: ["AI", "Gemini"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>掌握 Google Gemini 的各種應用</p>
<h3>1. Gemini 介紹</h3><p>Google 的 AI 助手，與 Google 生態深度整合。</p>
<h3>2. 註冊 Gemini</h3>
<ul>
<li>前往 <a href="https://gemini.google.com" target="_blank">gemini.google.com</a></li>
<li>使用 Google 帳號登入</li>
<li>免費 API Key：<a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a></li>
</ul>
<h3>3. 特色功能</h3>
<ul>
<li><strong>多模態</strong>：可以理解圖片、聲音</li>
<li><strong>Google 整合</strong>：Gmail、Drive、Docs</li>
<li><strong>免費額度</strong>：60 requests/分鐘</li>
</ul>`,
        quiz: [
            { q: "Gemini 的免費額度是多少？", options: ["A) 30 requests/分鐘", "B) 60 requests/分鐘", "C) 100 requests/分鐘"], answer: 1 }
        ]
    },
    {
        day: 4,
        title: "Perplexity AI 搜尋",
        desc: "AI 搜尋、資料查證、研究",
        tags: ["AI", "搜尋"],
        time: "30 分鐘",
        video: "https://youtu.be/qE3o03JKsVw",
        content: `
<h3>📌 學習目標</h3><p>學會使用 Perplexity 進行 AI 驅動的搜尋，自動引用來源並驗證資訊</p>

<h3>1. 什麼是 Perplexity？</h3>
<p>Perplexity 是一款 AI 搜尋引擎，結合了傳統搜尋和大型語言模型。它不只是給你連結，而是直接給出答案，並標註來源讓你可以驗證。</p>

<h3>2. 註冊與基本使用</h3>
<ul>
<li>前往 <a href="https://www.perplexity.ai" target="_blank">perplexity.ai</a></li>
<li>使用 Google、Apple 或 Email 註冊</li>
<li>在搜尋框輸入問題，AI 會自動搜尋並整理答案</li>
</ul>

<h3>3. 核心功能</h3>
<ul>
<li><strong>Sources（來源）</strong>：顯示 AI 參考的網頁來源</li>
<li><strong>Related（相關）</strong>：推薦相關問題</li>
<li><strong>Copilot（助手）</strong>：付費功能，可追問深入問題</li>
<li><strong>Focus（聚焦）</strong>：選擇搜尋範圍（學術、YouTube、Reddit 等）</li>
</ul>

<h3>4. 與 ChatGPT 的差異</h3>
<table style="width:100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background:#1a1a2e;"><th style="padding:8px; border:1px solid #333;">功能</th><th style="padding:8px; border:1px solid #333;">Perplexity</th><th style="padding:8px; border:1px solid #333;">ChatGPT</th></tr>
<tr><td style="padding:8px; border:1px solid #333;">資訊來源</td><td style="padding:8px; border:1px solid #333;">即時網路</td><td style="padding:8px; border:1px solid #333;">訓練資料</td></tr>
<tr><td style="padding:8px; border:1px solid #333;">引用來源</td><td style="padding:8px; border:1px solid #333;">✅ 自動引用</td><td style="padding:8px; border:1px solid #333;">❌ 不引用</td></tr>
<tr><td style="padding:8px; border:1px solid #333;">即時性</td><td style="padding:8px; border:1px solid #333;">✅ 最新資訊</td><td style="padding:8px; border:1px solid #333;">⚠️ 有截止日</td></tr>
</table>

<h3>5. 應用場景</h3>
<ul>
<li><strong>學術研究</strong>：快速了解新主題、查找論文</li>
<li><strong>事實查證</strong>：驗證新聞、謠言是否正確</li>
<li><strong>產品比較</strong>：比較不同產品的優缺點</li>
<li><strong>技術問題</strong>：搜尋程式碼、技術文件</li>
</ul>

<h3>6. 付費方案</h3>
<ul>
<li><strong>免費版</strong>：每天 5 次 Copilot 搜尋</li>
<li><strong>Pro ($20/月)</strong> 無限 Copilot、影印搜尋</li>
<li><strong>Pro+ ($200/月)</strong> 包含 API 使用量</li>
</ul>

<h3>7. 範例 Prompt</h3>
<pre><code># 研究主題
什麼是 RAG？請說明原理並推薦學習資源

# 事實查證
2024 年台灣總統是誰？

# 產品比較
iPhone 15 vs Samsung S24 哪個更值得購買？

# 技術問題
Python 如何讀取 Excel 檔案？</code></pre>`,
        quiz: [
            { q: "Perplexity 和 Google 搜尋的主要差異是？", options: ["A) Perplexity 只顯示圖片", "B) Perplexity 會直接給出答案並引用來源", "C) Google 沒有廣告", "D) 兩者沒有差異"], answer: 1 },
            { q: "Perplexity 的 Copilot 功能是什麼？", options: ["A) 免費功能", "B) 可追問深入問題的付費功能", "C) 翻譯功能", "D) 儲存功能"], answer: 1 },
            { q: "Perplexity 的优势是什么？", options: ["A) 只搜尋圖片", "B) 自動引用來源並驗證資訊", "C) 只能搜尋舊聞", "D) 必須付費才能使用"], answer: 1 }
        ]
    },
    {
        day: 5,
        title: "DeepSeek 中文問答",
        desc: "中文問答、推理、程式設計",
        tags: ["AI", "DeepSeek"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>掌握 DeepSeek 的強大中文問答和推理能力</p>
<h3>1. DeepSeek 介紹</h3><p>中國開發的開源 AI 模型，中文能力強大。</p>
<h3>2. 使用方式</h3>
<ul>
<li>網頁：<a href="https://www.deepseek.com" target="_blank">deepseek.com</a></li>
<li>API：申請 API Key 整合到自己的應用</li>
</ul>
<h3>3. 特色</h3>
<ul>
<li>開源免費</li>
<li>強大推理能力</li>
<li>優秀的中文理解</li>
</ul>`,
        quiz: []
    },
    {
        day: 6,
        title: "Copilot Windows AI",
        desc: "Word、Excel、PowerPoint、Windows AI",
        tags: ["AI", "Microsoft"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>學會使用 Microsoft Copilot 提高辦公效率</p>
<h3>1. Copilot 介紹</h3><p>Microsoft 的 AI 助手，內建於 Windows、Office。</p>
<h3>2. 應用場景</h3>
<ul>
<li><strong>Word</strong>：自動撰寫、潤稿</li>
<li><strong>Excel</strong>：分析資料、建立圖表</li>
<li><strong>PowerPoint</strong>：自動生成簡報</li>
<li><strong>Windows</strong>：系統助手</li>
</ul>
<h3>3. 啟用方式</h3><p>Windows 11 內建 Copilot 鍵，或透過 Microsoft 365 訂閱。</p>`,
        quiz: []
    },
    {
        day: 7,
        title: "Grok 即時資訊",
        desc: "即時資訊、社群資訊、問答",
        tags: ["AI", "Grok"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 xAI 的 Grok 和即時資訊取得</p>
<h3>1. Grok 介紹</h3><p>馬斯克 xAI 開發的 AI，有獨特的幽默風格。</p>
<h3>2. 使用方式</h3>
<ul>
<li>X (Twitter) 上的 Grok</li>
<li><a href="https://grok.com" target="_blank">grok.com</a></li>
</ul>
<h3>3. 特色</h3>
<ul>
<li>即時資訊取得</li>
<li>獨特人格特點</li>
<li>有觀點的回答風格</li>
</ul>`,
        quiz: []
    },
    {
        day: 8,
        title: "Lovable 快速建站",
        desc: "不寫程式快速製作網站／App",
        tags: ["AI", "開發"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>學會使用 Lovable 無程式碼建立網站和 App</p>
<h3>1. Lovable 介紹</h3><p>AI 驅動的無程式碼開發平台，用自然語言建立網站。</p>
<h3>2. 使用方式</h3>
<ul>
<li>前往 <a href="https://lovable.dev" target="_blank">lovable.dev</a></li>
<li>用英文描述你想要的功能</li>
<li>AI 會自動生成網站</li>
</ul>
<h3>3. 範例</h3>
<pre><code>Create a todo app with dark mode
Build a weather dashboard
Make a blog with markdown support</code></pre>`,
        quiz: []
    },
    {
        day: 9,
        title: "Manus AI Agent",
        desc: "AI Agent、自動完成複雜任務",
        tags: ["AI", "Agent"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 AI Agent 的概念和應用</p>
<h3>1. 什麼是 AI Agent？</h3><p>AI Agent = AI + 工具 + 記憶，能自主規劃和執行任務。</p>
<h3>2. Manus 介紹</h3><p>自動執行多步驟任務的 AI Agent。</p>
<h3>3. Agent 運作方式</h3>
<ul>
<li>理解任務目標</li>
<li>規劃執行步驟</li>
<li>使用工具（搜尋、寫程式等）</li>
<li>完成任務</li>
</ul>`,
        quiz: []
    },
    {
        day: 10,
        title: "NanoBanana 圖像生成",
        desc: "圖像生成、圖片修改",
        tags: ["AI", "圖像"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>學會使用 AI 圖像生成工具</p>
<h3>1. 圖像生成 AI</h3><p>文字描述生成圖片的 AI 工具。</p>
<h3>2. 常用工具</h3>
<ul>
<li><strong>NanoBanana</strong>：中文界面</li>
<li><strong>Midjourney</strong>：高品質圖片</li>
<li><strong>DALL-E</strong>：OpenAI 圖片生成</li>
</ul>
<h3>3. Prompt 技巧</h3>
<pre><code>主體 + 風格 + 細節 + 光線

範例：
一隻可愛的橘貓，寫實風格，陽光灑在毛髮上，戶外花園</code></pre>`,
        quiz: []
    },
    {
        day: 11,
        title: "Leonardo AI  AI 繪圖",
        desc: "AI 繪圖、圖片風格、素材",
        tags: ["AI", "繪圖"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>掌握 Leonardo AI 的繪圖功能</p>
<h3>1. Leonardo AI 介紹</h3><p>強大的 AI 繪圖平台，適合生成素材和藝術作品。</p>
<h3>2. 使用方式</h3>
<ul>
<li>前往 <a href="https://leonardo.ai" target="_blank">leonardo.ai</a></li>
<li>註冊後每天免費 tokens</li>
<li>輸入 Prompt 生成圖片</li>
</ul>
<h3>3. 功能特色</h3>
<ul>
<li>多種風格模型</li>
<li>圖片編輯功能</li>
<li>素材生成</li>
</ul>`,
        quiz: []
    },
    {
        day: 12,
        title: "Meta AI  社群應用",
        desc: "AI 助理、圖片與社群應用",
        tags: ["AI", "Meta"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 Meta AI 在社群平台的應用</p>
<h3>1. Meta AI 介紹</h3><p>Facebook/Instagram 內建的 AI 助手。</p>
<h3>2. 應用場景</h3>
<ul>
<li>IG/FB 搜尋功能</li>
<li>聊天機器人</li>
<li>AI 圖片生成</li>
</ul>
<h3>3. AI Studio</h3><p>可建立自己的 AI 角色用於粉絲專頁。</p>`,
        quiz: []
    },
    {
        day: 13,
        title: "Assembly AI  語音轉文字",
        desc: "語音轉文字、音訊分析",
        tags: ["AI", "語音"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>學會使用語音轉文字 AI</p>
<h3>1. Assembly AI 介紹</h3><p>專業的語音轉文字 API 服務。</p>
<h3>2. 應用場景</h3>
<ul>
<li>會議錄音轉文字</li>
<li>影片字幕生成</li>
<li>語音分析</li>
</ul>
<h3>3. 類似工具</h3>
<ul>
<li>Whisper (OpenAI)</li>
<li>Google Cloud Speech</li>
<li>Azure Speech</li>
</ul>`,
        quiz: []
    },
    {
        day: 14,
        title: "Canva AI  設計簡報",
        desc: "AI 簡報、海報、社群圖片",
        tags: ["AI", "設計"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>使用 Canva AI 快速設計</p>
<h3>1. Canva AI 功能</h3>
<ul>
<li><strong>Magic Design</strong>：AI 生成設計</li>
<li><strong>文字生成圖片</strong>：文字轉圖片</li>
<li><strong>自動排版</strong>：智慧排版</li>
</ul>
<h3>2. 使用方式</h3>
<ul>
<li>前往 <a href="https://www.canva.com" target="_blank">canva.com</a></li>
<li>使用 AI 功能生成設計</li>
</ul>
<h3>3. 應用場景</h3>
<ul>
<li>社群貼文</li>
<li>簡報海報</li>
<li>名片DM</li>
</ul>`,
        quiz: []
    },
    {
        day: 15,
        title: "Veo 3  AI 影片生成",
        desc: "AI 影片生成",
        tags: ["AI", "影片"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 Google 的 AI 影片生成工具</p>
<h3>1. Veo 3 介紹</h3><p>Google 最新的 AI 影片生成模型。</p>
<h3>2. 使用方式</h3>
<ul>
<li>透過 Google AI Studio</li>
<li>輸入文字描述生成影片</li>
</ul>
<h3>3. 特色</h3>
<ul>
<li>高品質影片輸出</li>
<li>理解複雜場景</li>
<li>生成音效</li>
</ul>`,
        quiz: []
    },
    {
        day: 16,
        title: "Sora 2  AI 影片",
        desc: "AI 影片、故事與場景生成",
        tags: ["AI", "影片"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 OpenAI 的 Sora 影片生成</p>
<h3>1. Sora 介紹</h3><p>OpenAI 的 AI 影片生成模型，能創造逼真的影片場景。</p>
<h3>2. 使用方式</h3>
<ul>
<li>訂閱 ChatGPT Plus/Pro</li>
<li>在 Sora 網站生成影片</li>
</ul>
<h3>3. 特色</h3>
<ul>
<li>文字轉影片</li>
<li>圖片轉影片</li>
<li>影片延伸</li>
</ul>`,
        quiz: []
    },
    {
        day: 17,
        title: "Kimi 長文件研究",
        desc: "長文件、研究、中文工作",
        tags: ["AI", "Kimi"],
        time: "30 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>掌握 Kimi 的長文處理能力</p>
<h3>1. Kimi 介紹</h3><p>月之暗面開發的中文 AI，擅長長上下文理解。</p>
<h3>2. 使用方式</h3>
<ul>
<li>網頁：<a href="https://kimi.moonshot.cn" target="_blank">kimi.moonshot.cn</a></li>
<li>手機 App</li>
</ul>
<h3>3. 特色</h3>
<ul>
<li>超長上下文</li>
<li>強大中文能力</li>
<li>檔案分析</li>
</ul>`,
        quiz: []
    },
    {
        day: 18,
        title: "Kling AI  影片生成",
        desc: "影片、人物與動態生成",
        tags: ["AI", "影片"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>了解 Kling AI 的影片生成能力</p>
<h3>1. Kling AI 介紹</h3><p>快手開發的 AI 影片生成工具。</p>
<h3>2. 特色</h3>
<ul>
<li>文字轉影片</li>
<li>圖片轉影片</li>
<li>人物動態生成</li>
</ul>
<h3>3. 使用方式</h3><p>申請試用或訂閱服務。</p>`,
        quiz: []
    },
    {
        day: 19,
        title: "Prompt Engineering",
        desc: "建立自己的 Prompt 模板",
        tags: ["技巧", "Prompt"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>掌握 Prompt Engineering 技巧，建立自己的 Prompt 模板</p>
<h3>1. Prompt 核心要素</h3>
<ul>
<li><strong>角色</strong>：你要 AI 扮演什麼角色</li>
<li><strong>任務</strong>：明確說明要做什麼</li>
<li><strong>格式</strong>：指定輸出格式</li>
<li><strong>範例</strong>：提供範例（Few-shot）</li>
</ul>
<h3>2. 進階技巧</h3>
<ul>
<li><strong>Chain of Thought</strong>：讓 AI 逐步思考</li>
<li><strong>ReAct</strong>：推理 + 行動</li>
<li><strong>Template</strong>：建立可重複使用的模板</li>
</ul>
<h3>3. 建立自己的模板</h3>
<pre><code>你是一個 [角色]。
請根據以下資訊 [任務]：
[背景資訊]

請用 [格式] 輸出結果。</code></pre>`,
        quiz: [
            { q: "Prompt Engineering 是什麼？", options: ["A) 寫程式", "B) 設計提示詞的藝術", "C) 硬體工程", "D) 資料庫"], answer: 1 }
        ]
    },
    {
        day: 20,
        title: "AI 文件處理",
        desc: "PDF、Word、Excel、資料整理",
        tags: ["AI", "辦公"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>使用 AI 處理各種文件格式</p>
<h3>1. PDF 處理</h3>
<ul>
<li><strong>Kimi</strong>：PDF 摘要、問答</li>
<li><strong>Adobe AI</strong>：PDF 編輯</li>
</ul>
<h3>2. Word/Excel</h3>
<ul>
<li><strong>Copilot</strong>：Office AI 助手</li>
<li><strong>ChatGPT</strong>：公式生成、文件潤稿</li>
</ul>
<h3>3. 自動化</h3><p>使用 Python + AI 自動化處理大量文件。</p>`,
        quiz: []
    },
    {
        day: 21,
        title: "AI + Excel 資料分析",
        desc: "資料分析、公式、報表、自動化",
        tags: ["AI", "Excel"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>使用 AI 提升 Excel/Google Sheets 效率</p>
<h3>1. AI 輔助公式</h3>
<ul>
<li>讓 AI 生成複雜公式</li>
<li>解釋現有公式</li>
<li>除錯修正</li>
</ul>
<h3>2. 資料分析</h3>
<ul>
<li>自動生成樞紐分析</li>
<li>建立圖表建議</li>
<li>趨勢分析</li>
</ul>
<h3>3. 自動化</h3>
<ul>
<li>Google Apps Script + AI</li>
<li>Python + Pandas + AI</li>
</ul>`,
        quiz: []
    },
    {
        day: 22,
        title: "AI 程式設計",
        desc: "Python、程式除錯、產生程式",
        tags: ["AI", "程式"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>使用 AI 輔助程式開發</p>
<h3>1. AI 寫程式</h3>
<ul>
<li><strong>GitHub Copilot</strong>：IDE 內建 AI 程式助手</li>
<li><strong>ChatGPT/Claude</strong>：生成程式碼、除錯</li>
</ul>
<h3>2. 應用場景</h3>
<ul>
<li>生成範例程式</li>
<li>解釋複雜程式</li>
<li>找到並修復 Bug</li>
<li>重構程式碼</li>
</ul>
<h3>3. 學習建議</h3><p>先學會看 AI 生成的程式，再自己修改。</p>`,
        quiz: []
    },
    {
        day: 23,
        title: "AI Agent 自動化",
        desc: "讓 AI 自動執行多步驟工作",
        tags: ["AI", "Agent"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>建立自己的 AI Agent 自動化工作</p>
<h3>1. Agent 介紹</h3><p>AI Agent 能自主規劃並執行多步驟任務。</p>
<h3>2. 建構 Agent</h3>
<ul>
<li>定義任務目標</li>
<li>選擇可用工具</li>
<li>設定決策邏輯</li>
</ul>
<h3>3. 工具平台</h3>
<ul>
<li><strong>LangChain</strong>：Python Agent 框架</li>
<li><strong>Manus</strong>：自動化平台</li>
<li><strong>Zapier</strong>：無程式自動化</li>
</ul>`,
        quiz: []
    },
    {
        day: 24,
        title: "AI 工作流程",
        desc: "AI＋搜尋＋文件＋資料的串接",
        tags: ["AI", "工作流"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>串接多個 AI 工具建立自動化工作流</p>
<h3>1. 工作流概念</h3>
<pre><code>搜尋 → AI 分析 → 文件生成 → 寄送郵件</code></pre>
<h3>2. 串接工具</h3>
<ul>
<li><strong>Zapier</strong>：無程式串接</li>
<li><strong>Make (Integromat)</strong>：視覺化流程</li>
<li><strong>Python</strong>：自訂串接</li>
</ul>
<h3>3. 範例</h3>
<ul>
<li>收到郵件 → AI 摘要 → 存到 Notion</li>
<li>新資料 → AI 分析 → 自動回報</li>
</ul>`,
        quiz: []
    },
    {
        day: 25,
        title: "AI 圖像應用",
        desc: "圖片生成、修改、去背、簡報素材",
        tags: ["AI", "圖像"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>掌握 AI 圖像的各種應用</p>
<h3>1. 圖片生成</h3>
<ul>
<li>Midjourney、Leonardo、DALL-E</li>
<li>文字生成圖片</li>
</ul>
<h3>2. 圖片編輯</h3>
<ul>
<li><strong>去除背景</strong>：remove.bg</li>
<li><strong>風格轉換</strong>：各種 AI 工具</li>
<li><strong>擴圖</strong>：AI 延伸畫面</li>
</ul>
<h3>3. 簡報素材</h3><p>用 AI 快速生成簡報所需的圖片和插圖。</p>`,
        quiz: []
    },
    {
        day: 26,
        title: "AI 影音製作",
        desc: "文字→影片、圖片→影片、字幕",
        tags: ["AI", "影音"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>使用 AI 製作影片和影音內容</p>
<h3>1. 文字轉影片</h3>
<ul>
<li><strong>Runway</strong>：文字/圖片轉影片</li>
<li><strong>Sora</strong>：高質量影片生成</li>
<li><strong>Veo</strong>：Google 影片生成</li>
</ul>
<h3>2. 圖片轉影片</h3><p>讓靜態圖片產生動態效果。</p>
<h3>3. 字幕與配音</h3>
<ul>
<li><strong>HeyGen</strong>：AI 數位人</li>
<li><strong>ElevenLabs</strong>：AI 配音</li>
</ul>`,
        quiz: []
    },
    {
        day: 27,
        title: "AI 工作助理",
        desc: "建立自己的「AI 工作助理」",
        tags: ["AI", "應用"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>整合各種 AI 工具建立個人工作助理</p>
<h3>1. 定義需求</h3>
<ul>
<li>日常任務有哪些？</li>
<li>哪些重複性高？</li>
<li>哪些需要 AI 協助？</li>
</ul>
<h3>2. 工具組合</h3>
<ul>
<li>搜尋：Perplexity</li>
<li>文件：Kimi/Claude</li>
<li>圖片：Midjourney</li>
<li>自動化：Zapier</li>
</ul>
<h3>3. 建立 SOP</h3>
<ul>
<li>早上：AI 摘要昨日新聞</li>
<li>工作中：AI 輔助寫作/程式</li>
<li>下班前：AI 整理今日筆記</li>
</ul>`,
        quiz: []
    },
    {
        day: 28,
        title: "AI 綜合實戰",
        desc: "完成一個自己的 AI 專案",
        tags: ["AI", "實戰"],
        time: "60 分鐘",
        video: "",
        content: `
<h3>📌 學習目標</h3><p>綜合運用所學，完成一個 AI 專案</p>
<h3>1. 專案選擇</h3>
<p>從以下選擇一個或自訂：</p>
<ul>
<li>AI 部落格助手</li>
<li>AI 客服聊天機器人</li>
<li>AI 資料分析儀表板</li>
<li>AI 簡報生成器</li>
<li>個人 AI 知識庫</li>
</ul>
<h3>2. 實作步驟</h3>
<ol>
<li>定義問題和目標</li>
<li>選擇適合的 AI 工具</li>
<li>建立原型</li>
<li>測試和優化</li>
<li>部署和使用</li>
</ol>
<h3>3. 資源</h3>
<ul>
<li>GitHub：程式碼託管</li>
<li>Vercel/Netlify：免費部署</li>
<li>Notion：筆記和知識庫</li>
</ul>
<h3>🎉 恭喜完成 28 天 AI 學習！</h3>`,
        quiz: [
            { q: "要完成一個 AI 專案，第一步要做什麼？", options: ["A) 寫程式", "B) 定義問題和目標", "C) 部署上線", "D) 買伺服器"], answer: 1 }
        ]
    }
];
