// 課程資料
const COURSES = [
    {
        id: 1,
        week: "Week 1",
        title: "LLM API 基礎",
        description: "呼叫 OpenAI API，做天氣問答機器人",
        duration: "30 分鐘",
        tags: ["Python", "API"],
        content: `
            <h3>📌 專案目標</h3>
            <p>學會呼叫 OpenAI API，建立第一個 AI 應用</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>Python 基礎語法</li>
                <li>API 概念（理解什麼是 HTTP 請求）</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. 申請 OpenAI API Key</h4>
            <ul>
                <li>前往 <a href="https://platform.openai.com/" target="_blank">OpenAI Platform</a></li>
                <li>註冊帳號並取得 API Key</li>
                <li>注意：新規帳號有免費額度</li>
            </ul>

            <h4>2. 安裝 OpenAI Python SDK</h4>
            <pre><code>pip install openai</code></pre>

            <h4>3. 第一個 AI 程式</h4>
            <pre><code>import openai

# 設定 API Key
openai.api_key = "你的 API Key"

# 呼叫 ChatGPT
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "你是一個天氣助手"},
        {"role": "user", "content": "今天台北天氣如何？"}
    ]
)

# 取得回覆
print(response.choices[0].message.content)</code></pre>

            <h4>4. 天氣問答機器人</h4>
            <pre><code>import openai

openai.api_key = "你的 API Key"

def ask_weather(location):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "你是一個天氣助手，請用中文回答"},
            {"role": "user", "content": f"{location} 的天氣如何？"}
        ]
    )
    return response.choices[0].message.content

# 測試
print(ask_weather("台北"))</code></pre>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 成功呼叫 OpenAI API</li>
                <li>✓ 能解讀回覆的 JSON 結構</li>
                <li>✓ 完成天氣問答機器人</li>
            </ul>
        `
    },
    {
        id: 2,
        week: "Week 2",
        title: "Prompt Engineering",
        description: "設計提示詞模板，做文章摘要工具",
        duration: "40 分鐘",
        tags: ["Prompt", "優化"],
        content: `
            <h3>📌 專案目標</h3>
            <p>學會設計有效的提示詞，打造文章摘要工具</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 1</li>
                <li>了解 JSON 結構</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. Prompt 基礎概念</h4>
            <ul>
                <li><strong>System Prompt</strong>：設定 AI 角色與行為</li>
                <li><strong>User Prompt</strong>：具體的問題或任務</li>
                <li><strong>Temperature</strong>：控制回覆的創造性（0-2）</li>
            </ul>

            <h4>2. 基本摘要 Prompt</h4>
            <pre><code>response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "你是一個專業的文章摘要助手"},
        {"role": "user", "content": "請用 3 句話摘要以下文章：\\n\\n" + article_text}
    ]
)</code></pre>

            <h4>3. 進階：Few-Shot Prompting</h4>
            <pre><code>response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "你是一個文章分類助手"},
        {"role": "user", "content": "文章：AI 正在改變世界\\n分類：科技"},
        {"role": "user", "content": "文章：今天天氣真好\\n分類：生活"},
        {"role": "user", "content": "文章：股票市場下跌\\n分類：？"}
    ]
)</code></pre>

            <h4>4. 文章摘要工具</h4>
            <pre><code>import openai

def summarize_article(text, max_words=100):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": f"你是一個專業摘要助手，請將文章濃縮成最多 {max_words} 字"},
            {"role": "user", "content": text}
        ],
        temperature=0.7
    )
    return response.choices[0].message.content

# 測試
article = """
人工智慧（AI）是近年來最受矚目的科技趨勢之一...
（文章內容）
"""
print(summarize_article(article))</code></pre>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 理解 System/User Prompt 差異</li>
                <li>✓ 能設計有效的摘要 Prompt</li>
                <li>✓ 完成文章摘要工具</li>
            </ul>
        `
    },
    {
        id: 3,
        week: "Week 3",
        title: "Embedding + 向量",
        description: "用 langchain-text-splitters，做文件搜尋系統",
        duration: "45 分鐘",
        tags: ["Embedding", "向量資料庫"],
        content: `
            <h3>📌 專案目標</h3>
            <p>學會使用 Embedding，將文字轉為向量，實現語意搜尋</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 1-2</li>
                <li>Python 列表與字串操作</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. 什麼是 Embedding？</h4>
            <ul>
                <li>文字 → 數字向量（捕捉語意）</li>
                <li>相似的文字會有相似的向量</li>
                <li>支援中英文</li>
            </ul>

            <h4>2. 安裝必要套件</h4>
            <pre><code>pip install langchain langchain-openai langchain-text-splitters</code></pre>

            <h4>3. 文字分割與 Embedding</h4>
            <pre><code>from langchain.text_splitter import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings

# 分割長文章
text_splitter = CharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)
chunks = text_splitter.split_text(long_article)

# 取得 Embedding
embeddings = OpenAIEmbeddings()
doc_embeddings = embeddings.embed_documents(chunks)

# 查詢的 Embedding
query_embedding = embeddings.embed_query("這篇文章的重點是什麼？")</code></pre>

            <h4>4. 語意搜尋實作</h4>
            <pre><code>import numpy as np
from langchain_openai import OpenAIEmbeddings

def semantic_search(query, documents, top_k=3):
    embeddings = OpenAIEmbeddings()
    
    # 取得文件和查詢的向量
    doc_embeddings = embeddings.embed_documents(documents)
    query_embedding = embeddings.embed_query(query)
    
    # 計算相似度（餘弦相似度）
    similarities = []
    for doc_emb in doc_embeddings:
        sim = np.dot(query_embedding, doc_emb) / (
            np.linalg.norm(query_embedding) * np.linalg.norm(doc_emb)
        )
        similarities.append(sim)
    
    # 排序取 top_k
    top_indices = np.argsort(similarities)[-top_k:][::-1]
    return [(documents[i], similarities[i]) for i in top_indices]

# 測試
docs = [
    "Python 是一種程式語言",
    "今天天氣很好",
    "AI 正在改變世界",
    "太陽從東邊升起"
]
results = semantic_search("人工智慧的發展", docs)
for doc, score in results:
    print(f"相似度: {score:.3f} - {doc}")</code></pre>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 理解 Embedding 概念</li>
                <li>✓ 會使用 langchain-text-splitters</li>
                <li>✓ 完成語意搜尋系統</li>
            </ul>
        `
    },
    {
        id: 4,
        week: "Week 4",
        title: "RAG 實作",
        description: "自己做簡易 RAG 聊天機器人",
        duration: "45 分鐘",
        tags: ["RAG", "LangChain"],
        content: `
            <h3>📌 專案目標</h3>
            <p>實作 RAG（檢索增強生成），讓 AI 根據文件回答問題</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 3</li>
                <li>了解向量相似度</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. RAG 流程</h4>
            <pre><code>┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   使用者問題  │ → │  檢索相關文件  │ → │  生成回答    │
└─────────────┘    └─────────────┘    └─────────────┘
                            ↑
                    ┌─────────────┐
                    │  文件向量庫  │
                    └─────────────┘</code></pre>

            <h4>2. 安裝 LangChain</h4>
            <pre><code>pip install langchain langchain-community faiss-cpu</code></pre>

            <h4>3. 簡易 RAG 實作</h4>
            <pre><code>from langchain.text_splitter import CharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_openai import ChatOpenAI
from langchain.chains import RetrievalQA

# 1. 準備文件
documents = [
    "Python 由 Guido van Rossum 創造，1991 年發布",
    "JavaScript 由 Brendan Eich 創造，1995 年發布",
    "Go 由 Google 開發，2009 年發布"
]

# 2. 建立向量資料庫
text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=0)
texts = text_splitter.create_documents(documents)
db = FAISS.from_documents(texts, OpenAIEmbeddings())

# 3. 建立 QA Chain
llm = ChatOpenAI(temperature=0)
qa = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=db.as_retriever()
)

# 4. 問問題
question = "Python 是誰創造的？"
answer = qa.run(question)
print(answer)</code></pre>

            <h4>4. 完整 RAG 聊天機器人</h4>
            <pre><code>from langchain_openai import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

# 建立記憶體
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# 建立對話式 RAG
qa = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(temperature=0.7),
    retriever=db.as_retriever(),
    memory=memory
)

# 對話
while True:
    query = input("你問：")
    if query == "exit":
        break
    result = qa({"question": query})
    print("AI：", result["answer"])</code></pre>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 理解 RAG 流程</li>
                <li>✓ 會使用 FAISS 向量資料庫</li>
                <li>✓ 完成 RAG 聊天機器人</li>
            </ul>
        `
    },
    {
        id: 5,
        week: "Week 5",
        title: "Agent 基礎",
        description: "做一個能上網查資料的 AI 助理",
        duration: "45 分鐘",
        tags: ["Agent", "Tools"],
        content: `
            <h3>📌 專案目標</h3>
            <p>學會建立 AI Agent，賦予 AI 使用工具的能力</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 1-4</li>
                <li>了解 Python 函數設計</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. 什麼是 Agent？</h4>
            <ul>
                <li>Agent = LLM + Tools + Memory</li>
                <li>能自主規劃並執行任務</li>
                <li>可使用搜尋、計算、檔案等工具</li>
            </ul>

            <h4>2. 安裝 LangChain Agent</h4>
            <pre><code>pip install langchain langchain-openai langchain-community duckduckgo-search</code></pre>

            <h4>3. 第一個 Agent</h4>
            <pre><code>from langchain.agents import AgentType, initialize_agent
from langchain_openai import ChatOpenAI
from langchain_community.tools import DuckDuckGoSearchRun

# 建立搜尋工具
search = DuckDuckGoSearchRun()

# 建立 LLM
llm = ChatOpenAI(temperature=0)

# 建立 Agent
agent = initialize_agent(
    tools=[search],
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

# 測試
result = agent.run("2024 年最新的 iPhone 型號是什麼？")
print(result)</code></pre>

            <h4>4. 自定義 Tool</h4>
            <pre><code>from langchain.tools import Tool
from langchain_community.utilities import WikipediaAPIWrapper

# 使用 Wikipedia API
wikipedia = WikipediaAPIWrapper()

wiki_tool = Tool(
    name="Wikipedia",
    func=wikipedia.run,
    description="當你需要查詢維基百科時使用"
)

# 組合多個工具
agent = initialize_agent(
    tools=[search, wiki_tool],
    llm=llm,
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION
)</code></pre>

            <h4>5. Agent 聊天機器人</h4>
            <pre><code>from langchain.prompts import PromptTemplate

prompt = PromptTemplate.from_template("""
你是一個 AI 助理，可以上網查資料。
chat_history: {chat_history}
question: {question}

請根據問題回答，如果需要最新資訊，請使用搜尋工具。
""")

agent = initialize_agent(
    tools=[search],
    llm=llm,
    agent=AgentType.CHAT_CONVERSATIONAL_REACT_DESCRIPTION,
    verbose=True
)

# 對話
agent.run("查一下台積電最近的股價")</code></pre>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 理解 Agent 概念</li>
                <li>✓ 會使用搜尋工具</li>
                <li>✓ 完成可上網的 AI 助理</li>
            </ul>
        `
    },
    {
        id: 6,
        week: "Week 6",
        title: "LINE Bot 整合",
        description: "把 AI 封裝成 LINE Bot",
        duration: "45 分鐘",
        tags: ["LINE", "Webhook"],
        content: `
            <h3>📌 專案目標</h3>
            <p>將 AI 服務封裝成 LINE 機器人</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 1-5</li>
                <li>有 LINE 帳號</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. LINE Bot 申請</h4>
            <ul>
                <li>前往 <a href="https://developers.line.biz/" target="_blank">LINE Developers</a></li>
                <li>建立 Provider 與 Channel</li>
                <li>取得 Channel Access Token 與 Secret</li>
                <li>設定 Webhook URL（需要 HTTPS）</li>
            </ul>

            <h4>2. 安裝 LINE SDK</h4>
            <pre><code>pip install line-bot-sdk flask</code></pre>

            <h4>3. 基本 Flask 伺服器</h4>
            <pre><code>from flask import Flask, request, abort
from linebot import LineBotApi, WebhookHandler
from linebot.models import MessageEvent, TextMessage, TextSendMessage

app = Flask(__name__)
line_bot_api = LineBotApi('你的 Channel Access Token')
handler = WebhookHandler('你的 Channel Secret')

@app.route("/callback", methods=['POST'])
def callback():
    signature = request.headers['X-Line-Signature']
    body = request.get_data(as_text=True)
    
    try:
        handler.handle(body, signature)
    except Exception as e:
        print(e)
        abort(400)
    
    return 'OK'

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    user_message = event.message.text
    reply_message = f"你說：{user_message}"
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=reply_message)
    )

if __name__ == "__main__":
    app.run(port=5000)</code></pre>

            <h4>4. 整合 OpenAI</h4>
            <pre><code>import openai

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    user_message = event.message.text
    
    # 呼叫 OpenAI
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_message}]
    )
    
    reply = response.choices[0].message.content
    
    line_bot_api.reply_message(
        event.reply_token,
        TextSendMessage(text=reply)
    )</code></pre>

            <h4>5. 部署到 Render/VPS</h4>
            <ul>
                <li>使用 ngrok 測試本地端</li>
                <li>部署到 Render.com（免費）</li>
                <li>設定 LINE Webhook</li>
            </ul>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 申請 LINE Bot 帳號</li>
                <li>✓ 建立 Flask 伺服器</li>
                <li>✓ 完成 LINE AI 機器人</li>
            </ul>
        `
    },
    {
        id: 7,
        week: "Week 7",
        title: "Fine-tuning 入門",
        description: "用 LoRA 微調小模型",
        duration: "50 分鐘",
        tags: ["Fine-tuning", "LoRA"],
        content: `
            <h3>📌 專案目標</h3>
            <p>學會使用 LoRA 微調模型，打造專屬 AI</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 1-6</li>
                <li>了解基礎機器學習概念</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. 為什麼要 Fine-tuning？</h4>
            <ul>
                <li>預訓練模型：通用知識</li>
                <li>微調：特定領域知識</li>
                <li>LoRA：省資源的微調方法</li>
            </ul>

            <h4>2. 安裝套件</h4>
            <pre><code>pip install transformers peft accelerate bitsandbytes</code></pre>

            <h4>3. 準備訓練資料</h4>
            <pre><code># training_data.jsonl
{"instruction": "解釋什麼是 Python", "input": "", "output": "Python 是一種..."}
{"instruction": "寫一個 Hello World", "input": "", "output": "print('Hello World')"}</code></pre>

            <h4>4. LoRA 微調程式</h4>
            <pre><code>from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import LoraConfig, get_peft_model, TaskType
import torch

# 載入基礎模型
model_name = "TinyLlama/TinyLlama-1.1B-Chat-v1.0"
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype=torch.float16,
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(model_name)

# 設定 LoRA
lora_config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type=TaskType.CAUSAL_LM
)

# 包裝模型
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# 輸出: trainable params: 2,048,000 || all params: 1,100,000,000 || trainable%: 0.19</code></pre>

            <h4>5. 訓練與推理</h4>
            <pre><code>from transformers import TrainingArguments, Trainer
from datasets import load_dataset

# 載入資料
dataset = load_dataset("json", data_files="training_data.jsonl")

# 訓練參數
training_args = TrainingArguments(
    output_dir="./output",
    num_train_epochs=3,
    per_device_train_batch_size=4,
    learning_rate=3e-4,
    logging_steps=10,
)

# 訓練
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
)
trainer.train()

# 儲存模型
model.save_pretrained("./my-lora-model")</code></pre>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 理解 Fine-tuning 概念</li>
                <li>✓ 會使用 LoRA 微調</li>
                <li>✓ 完成模型微調訓練</li>
            </ul>
        `
    },
    {
        id: 8,
        week: "Week 8",
        title: "部署上線",
        description: "Docker 部署自己的 AI 服務",
        duration: "45 分鐘",
        tags: ["Docker", "部署"],
        content: `
            <h3>📌 專案目標</h3>
            <p>將 AI 服務 Docker 化並部署上線</p>

            <h3>🔧 預備知識</h3>
            <ul>
                <li>完成 Week 1-7</li>
                <li>了解基本指令列操作</li>
            </ul>

            <h3>📝 課程內容</h3>
            <h4>1. 為什麼用 Docker？</h4>
            <ul>
                <li>環境一致性</li>
                <li>輕量級虛擬化</li>
                <li>易於部署與擴展</li>
            </ul>

            <h4>2. 建立專案結構</h4>
            <pre><code>ai-service/
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── utils.py
├── Dockerfile
├── requirements.txt
└── .env</code></pre>

            <h4>3. 撰寫 Dockerfile</h4>
            <pre><code>FROM python:3.11-slim

WORKDIR /app

# 安裝系統依賴
RUN apt-get update && apt-get install -y \\
    gcc && rm -rf /var/lib/apt/lists/*

# 安裝 Python 依賴
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 複製程式碼
COPY . .

# 暴露 Port
EXPOSE 8000

# 啟動命令
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]</code></pre>

            <h4>4. FastAPI 服務</h4>
            <pre><code># app/main.py
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AI Service API")

class Query(BaseModel):
    question: str

@app.post("/ask")
async def ask_ai(query: Query):
    import openai
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": query.question}]
    )
    return {"answer": response.choices[0].message.content}

@app.get("/health")
async def health():
    return {"status": "ok"}</code></pre>

            <h4>5. Docker Compose（開發）</h4>
            <pre><code># docker-compose.yml
version: '3.8'
services:
  ai-service:
    build: .
    ports:
      - "8000:8000"
    environment:
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    env_file:
      - .env</code></pre>

            <h4>6. 部署選項</h4>
            <table>
                <tr><th>平台</th><th>費用</th><th>難度</th></tr>
                <tr><td>Render</td><td>免費額度</td><td>簡單</td></tr>
                <tr><td>Railway</td><td>付費</td><td>簡單</td></tr>
                <tr><td>DigitalOcean</td><td>$5/月</td><td>中等</td></tr>
                <tr><td>自 VPS</td><td>依規格</td><td>困難</td></tr>
            </table>

            <h3>✅ 自我測驗</h3>
            <ul>
                <li>✓ 理解 Docker 概念</li>
                <li>✓ 會撰寫 Dockerfile</li>
                <li>✓ 完成 AI 服務部署</li>
            </ul>
        `
    }
];

// ===== App Logic =====
const STORAGE_KEY = 'ai-learning-progress';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    updateProgress();
});

// 取得進度
function getProgress() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

// 儲存進度
function saveProgress(completedIds) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
    updateProgress();
}

// 更新進度條
function updateProgress() {
    const completed = getProgress();
    const total = COURSES.length;
    const percent = Math.round((completed.length / total) * 100);
    
    document.getElementById('progress-text').textContent = `${completed.length} / ${total} 週完成`;
    document.getElementById('progress-fill').style.width = `${percent}%`;
}

// 渲染課程列表
function renderCourses() {
    const grid = document.getElementById('courses-grid');
    const completed = getProgress();
    
    grid.innerHTML = COURSES.map(course => {
        const isCompleted = completed.includes(course.id);
        return `
            <div class="course-card ${isCompleted ? 'completed' : ''}" onclick="showCourse(${course.id})">
                <div class="week-number">${course.week}</div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="course-tag">${course.tags.join(' · ')}</span>
                    <span>⏱ ${course.duration}</span>
                    ${isCompleted ? '<span class="check-icon">✓</span>' : ''}
                </div>
            </div>
        `;
    }).join('');
}

// 顯示課程內容
function showCourse(id) {
    const course = COURSES.find(c => c.id === id);
    if (!course) return;
    
    document.querySelector('.courses-section').style.display = 'none';
    document.getElementById('course-content').style.display = 'block';
    
    const completed = getProgress();
    const isCompleted = completed.includes(id);
    
    document.getElementById('course-detail').innerHTML = `
        <div class="course-detail">
            <h2>${course.week} - ${course.title}</h2>
            <div class="meta">
                <span>⏱ ${course.duration}</span>
                <span>🏷️ ${course.tags.join(' · ')}</span>
            </div>
            <div class="content">
                ${course.content}
            </div>
            <button class="complete-btn ${isCompleted ? 'completed' : ''}" 
                    onclick="toggleComplete(${id})">
                ${isCompleted ? '✓ 已完成' : '標記為完成'}
            </button>
        </div>
    `;
    
    window.scrollTo(0, 0);
}

// 返回列表
function showHome() {
    document.querySelector('.courses-section').style.display = 'block';
    document.getElementById('course-content').style.display = 'none';
}

// 切換完成狀態
function toggleComplete(id) {
    let completed = getProgress();
    
    if (completed.includes(id)) {
        completed = completed.filter(c => c !== id);
    } else {
        completed.push(id);
    }
    
    saveProgress(completed);
    showCourse(id); // 重新渲染
    renderCourses(); // 更新列表
}
