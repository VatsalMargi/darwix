import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/review", async (req, res) => {
  const { code_snippet, review_comments } = req.body;

  const prompt = `
You are an expert and empathetic senior software engineer.
Given the following Python code and direct review comments, rewrite each comment in this Markdown format:

For each comment:
### Analysis of Comment: "<original comment>"
* **Positive Rephrasing:** <gentle, encouraging version>
* **The 'Why':** <explanation>
* **Suggested Improvement:**
\`\`\`python
<improved code example>
\`\`\`
Provide helpful doc links if possible.
At the end, add a "Holistic Summary" paragraph with encouragement.

Code:
\`\`\`python
${code_snippet}
\`\`\`

Review Comments:
${review_comments.map(c => `- ${c}`).join("\n")}
`;

  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: prompt
    });
    res.json({ markdown: response.output_text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
