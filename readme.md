# Empathetic Code Reviewer

A web application that provides **empathetic, constructive, and code-aware reviews** for developers. Paste your code snippet, enter review comments, and receive gently rephrased suggestions with improved examples and explanations.

---

## Features

- **Markdown-formatted reviews** with syntax highlighting
- **Encouraging feedback** for each comment
- **Code improvement suggestions** with examples
- **Holistic summary** at the end of each review
- Built using **OpenAI GPT-4o-mini** for intelligent feedback
- **Frontend:** HTML, Tailwind CSS, Marked.js, Highlight.js
- **Backend:** Node.js, Express, OpenAI API


---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/empathetic-code-reviewer.git
cd empathetic-code-reviewer

2. Install dependencies:

npm install

3. Create a .env file and add your OpenAI API key:
For now just rename .env.sample to .env. 
Everything will run fine 

OPENAI_API_KEY=your_openai_api_key

4. Start the server:

npm run dev 

or 

node index.js

5. Open index.html in public folder in your browser

