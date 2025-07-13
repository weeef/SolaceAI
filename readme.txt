# 🤖 SolaceAI — Therapy-Grade Mental Health Chatbot

SolaceAI is a conversational AI designed to offer empathetic, evidence-based mental wellness support. Built on ethically sourced clinical case studies and powered by open-source LLMs, SolaceAI simulates therapist-level dialogue for users seeking help with anxiety, stress, reflection, or emotional growth.

---

## 🌟 Features
- 🧠 Therapist-style conversation flow
- 🎯 Personalized onboarding (intent, preferences, tone)
- 🔒 Built-in crisis detection and escalation logic
- 📱 Responsive chat interface (text-only)
- 🔧 LLM-ready integration via REST API (`/chat`)
- 💬 Configurable therapy styles (CBT, mindfulness, etc.)

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/weeef/SolaceAI.git
cd solaceai

## 2. Install Dependencies
npm install react react-dom
npx webpack --config webpack.config.js
**To Interact**
Open index.html in your favorite web browser to interact with SolaceAI.

Development
- The frontend is built using React and Webpack.
- LLM integration is via a REST API (/chat) that can be accessed locally or through a cloud-based service.
- To run the frontend, ensure you have Node.js installed and follow the steps above.
