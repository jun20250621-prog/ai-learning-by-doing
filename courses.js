// 課程資料 - 在這裡新增/修改課程
// 格式：{ week: 週次, title: 標題, desc: 描述, tags: 標籤, time: 時間, video: YouTube連結, content: 教學內容, quiz: 測驗題目 }

const COURSES = [
    {
        week: 1,
        title: "Gemini API 基礎",
        desc: "呼叫 Google Gemini API，做天氣問答機器人",
        tags: ["Python", "Gemini"],
        time: "30 分鐘",
        video: "https://youtu.be/ztS4gurSt9U",
        content: `
<h3>📌 專案目標</h3><p>學會呼叫 Google Gemini API，建立第一個 AI 應用</p>
<h3>🔧 預備知識</h3><ul><li>Python 基礎語法</li><li>API 概念</li></ul>
<h3>1. 申請 Gemini API Key</h3>
<ul>
<li>前往 <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a></li>
<li>登入 Google 帳號</li>
<li>點擊「Create API Key」</li>
<li>複製並妥善保存（免費額度：60 requests/minute）</li>
</ul>
<h3>2. 安裝 Gemini SDK</h3><pre><code>pip install google-generativeai</code></pre>
<h3>3. 第一個 Gemini 程式</h3><pre><code>import google.generativeai as genai

# 設定 API Key
genai.configure(api_key="你的 API Key")

# 選擇模型
model = genai.GenerativeModel('gemini-1.5-flash')

# 發送請求
response = model.generate_content("用中文介紹你自己")

# 取得回覆
print(response.text)</code></pre>
<h3>4. 天氣問答機器人</h3><pre><code>import google.generativeai as genai

genai.configure(api_key="你的 API Key")
model = genai.GenerativeModel('gemini-1.5-flash')

def ask_weather(location):
    prompt = f"你是一個天氣助手，請用中文回答以下問題：{location} 的天氣如何？"
    response = model.generate_content(prompt)
    return response.text

# 測試
print(ask_weather("台北"))</code></pre>
<h3>✅ 自我測驗</h3>
<ul>
<li>✓ 成功取得 Gemini API Key</li>
<li>✓ 呼叫 Gemini API 並取得回覆</li>
<li>✓ 完成天氣問答機器人</li>
</ul>`,
        quiz: [
            { q: "如何安裝 Gemini Python SDK？", options: ["A) pip install google-generativeai", "B) pip install openai", "C) pip install gemini-api"], answer: 0 },
            { q: "Gemini API 的免費額度是多少？", options: ["A) 100 requests/分鐘", "B) 60 requests/分鐘", "C) 無限"], answer: 1 },
            { q: "以下哪個是正確的 Gemini 模型名稱？", options: ["A) gemini-1.5-flash", "B) gpt-3.5-turbo", "C) claude-3-sonnet"], answer: 0 }
        ]
    },
    {
        week: 2,
        title: "Prompt Engineering",
        desc: "設計提示詞模板，做文章摘要工具",
        tags: ["Prompt", "優化"],
        time: "40 分鐘",
        video: "https://youtu.be/wf6EwC-H4Sw",
        content: `
<h3>📌 專案目標</h3><p>學會設計有效的提示詞，打造文章摘要工具</p>
<h3>1. Prompt 基礎概念</h3>
<ul>
<li><strong>System Prompt</strong>：設定 AI 角色與行為</li>
<li><strong>User Prompt</strong>：具體的問題或任務</li>
<li><strong>Temperature</strong>：控制回覆的創造性（0-2）</li>
</ul>
<h3>2. 基本摘要 Prompt</h3><pre><code>import google.generativeai as genai
genai.configure(api_key="你的 API Key")
model = genai.GenerativeModel('gemini-1.5-flash')

prompt = """你是一個專業的文章摘要助手。
請用 3 句話摘要以下文章：

{article_text}"""

response = model.generate_content(prompt)
print(response.text)</code></pre>
<h3>3. Few-Shot Prompting</h3><pre><code>prompt = """文章：AI 正在改變世界
分類：科技

文章：今天天氣真好
分類：生活

文章：股票市場下跌
分類：？"""

response = model.generate_content(prompt)</code></pre>`,
        quiz: [
            { q: "System Prompt 的用途是什麼？", options: ["A) 設定 AI 的角色和行為", "B) 輸入用戶的問題", "C) 控制輸出的長度"], answer: 0 },
            { q: "Temperature 参数的作用是？", options: ["A) 控制輸出長度", "B) 控制輸出的創造性/隨機性", "C) 設定語言"], answer: 1 }
        ]
    },
    {
        week: 3,
        title: "Embedding + 向量",
        desc: "用 Gemini Embedding，做文件搜尋系統",
        tags: ["Embedding", "向量"],
        time: "45 分鐘",
        video: "https://youtu.be/BgrItDoq-_o",
        content: `
<h3>📌 專案目標</h3><p>學會使用 Gemini Embedding，將文字轉為向量，實現語意搜尋</p>
<h3>1. 什麼是 Embedding？</h3><ul><li>文字 → 數字向量（捕捉語意）</li><li>相似的文字會有相似的向量</li></ul>
<h3>2. 安裝套件</h3><pre><code>pip install google-generativeai numpy</code></pre>
<h3>3. Gemini Embedding</h3><pre><code>import google.generativeai as genai
import numpy as np

genai.configure(api_key="你的 API Key")

# 取得文字的向量
result = genai.embed_content(
    model="embedding-001",
    content="這是一段中文文字",
    task_type="retrieval_document"
)

embedding = result['embedding']
print(f"向量維度: {len(embedding)}")</code></pre>`,
        quiz: [
            { q: "Embedding 的主要用途是？", options: ["A) 生成圖片", "B) 語意搜尋/相似度比較", "C) 語音轉文字"], answer: 1 }
        ]
    },
    {
        week: 4,
        title: "RAG 實作",
        desc: "自己做簡易 RAG 聊天機器人",
        tags: ["RAG", "LangChain"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 專案目標</h3><p>實作 RAG（檢索增強生成），讓 AI 根據文件回答問題</p>
<h3>1. RAG 流程</h3><pre><code>使用者問題 → 檢索相關文件 → 生成回答</code></pre>
<h3>2. 安裝 LangChain Gemini</h3><pre><code>pip install langchain-google-genai langchain-community faiss-cpu</code></pre>
<h3>3. RAG 實作</h3><pre><code>from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA

# 初始化 Gemini
llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key="你的 Key")

# 建立向量資料庫
db = FAISS.from_documents(texts, embedding)
qa = RetrievalQA.from_chain_type(llm=llm, retriever=db.as_retriever())

# 問問題
answer = qa.run("這篇文章的主題是什麼？")</code></pre>`,
        quiz: [
            { q: "RAG 的全稱是？", options: ["A) Retrieval-Augmented Generation", "B) Random Attention Generator", "C) Real-time AI Gateway"], answer: 0 }
        ]
    },
    {
        week: 5,
        title: "Agent 基礎",
        desc: "做一個能上網查資料的 AI 助理",
        tags: ["Agent", "Tools"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 專案目標</h3><p>學會建立 AI Agent，賦予 AI 使用工具的能力</p>
<h3>1. 什麼是 Agent？</h3><ul><li>Agent = LLM + Tools + Memory</li><li>能自主規劃並執行任務</li></ul>
<h3>2. 安裝套件</h3><pre><code>pip install langchain-google-genai langchain-community duckduckgo-search</code></pre>
<h3>3. Agent 實作</h3><pre><code>from langchain.agents import AgentType, initialize_agent
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.tools import DuckDuckGoSearchRun

llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key="你的 Key")
search = DuckDuckGoSearchRun()

agent = initialize_agent(
    tools=[search],
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

result = agent.run("2024 年最新的 AI 發展趨勢是什麼？")
print(result)</code></pre>`,
        quiz: [
            { q: "Agent 的核心組成是？", options: ["A) 只有 LLM", "B) LLM + Tools + Memory", "C) API + Database"], answer: 1 }
        ]
    },
    {
        week: 6,
        title: "LINE Bot 整合",
        desc: "把 AI 封裝成 LINE Bot",
        tags: ["LINE", "Webhook"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 專案目標</h3><p>將 Gemini AI 服務封裝成 LINE 機器人</p>
<h3>1. LINE Bot 申請</h3>
<ul>
<li>前往 <a href="https://developers.line.biz/" target="_blank">LINE Developers</a></li>
<li>建立 Provider 與 Channel</li>
<li>取得 Channel Access Token 與 Secret</li>
</ul>
<h3>2. 安裝 LINE SDK</h3><pre><code>pip install line-bot-sdk flask google-generativeai</code></pre>
<h3>3. Flask + Gemini LINE Bot</h3><pre><code>from flask import Flask, request, abort
from linebot import LineBotApi, WebhookHandler
import google.generativeai as genai

app = Flask(__name__)
line_bot_api = LineBotApi('你的 LINE Token')
handler = WebhookHandler('你的 LINE Secret')
genai.configure(api_key="你的 Gemini Key")

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    user_message = event.message.text
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(user_message)
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=response.text)
    )</code></pre>`,
        quiz: [
            { q: "LINE Bot 需要什麼來接收訊息？", options: ["A) Webhook URL", "B) 資料庫", "C) AI 模型"], answer: 0 }
        ]
    },
    {
        week: 7,
        title: "Fine-tuning 入門",
        desc: "用 LoRA 微調小模型",
        tags: ["Fine-tuning", "LoRA"],
        time: "50 分鐘",
        video: "",
        content: `
<h3>📌 專案目標</h3><p>學會使用 LoRA 微調模型，打造專屬 AI</p>
<h3>1. 為什麼要 Fine-tuning？</h3><ul><li>預訓練模型：通用知識</li><li>微調：特定領域知識</li><li>LoRA：省資源的微調方法</li></ul>
<h3>2. Gemini Fine-tuning</h3>
<p>Gemini 目前支援透過 Google AI Studio 進行微調：</p>
<ul>
<li>上傳訓練資料（JSONL 格式）</li>
<li>選擇基礎模型</li>
<li>設定訓練參數</li>
<li>部署使用</li>
</ul>
<h3>3. 訓練資料格式</h3><pre><code>{"input": "問題", "output": "回答"}
{"input": "你好", "output": "你好，我是 AI 助手"}</code></pre>`,
        quiz: [
            { q: "LoRA 的優點是？", options: ["A) 需要大量 GPU 資源", "B) 省資源，只需微調少量參數", "C) 不能在消費級顯卡運行"], answer: 1 }
        ]
    },
    {
        week: 8,
        title: "部署上線",
        desc: "Docker 部署自己的 AI 服務",
        tags: ["Docker", "部署"],
        time: "45 分鐘",
        video: "",
        content: `
<h3>📌 專案目標</h3><p>將 AI 服務 Docker 化並部署上線</p>
<h3>1. 為什麼用 Docker？</h3><ul><li>環境一致性</li><li>輕量級虛擬化</li><li>易於部署與擴展</li></ul>
<h3>2. 專案結構</h3><pre><code>ai-service/
├── app/
│   └── main.py
├── Dockerfile
├── requirements.txt
└── .env</code></pre>
<h3>3. Dockerfile</h3><pre><code>FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]</code></pre>
<h3>4. 部署選項</h3>
<ul>
<li><strong>Render</strong> - 免費額度</li>
<li><strong>Railway</strong> - 付費</li>
<li><strong>DigitalOcean</strong> - $5/月</li>
</ul>`,
        quiz: [
            { q: "Docker 的主要優點是？", options: ["A) 環境一致性", "B) 程式執行速度更快", "C) 不需要作業系統"], answer: 0 }
        ]
    }
];

// 新增課程範例（複製並修改）：
/*
{
    week: 9,
    title: "新課程標題",
    desc: "課程描述",
    tags: ["標籤1", "標籤2"],
    time: "30 分鐘",
    video: "https://youtu.be/影片ID",
    content: "<h3>教學內容（HTML格式）</h3><p>...</p>",
    quiz: [
        { q: "題目", options: ["選項A", "選項B", "選項C"], answer: 0 }
    ]
}
*/
