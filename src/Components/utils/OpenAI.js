async function callOpenAi(response) {
  const API_KEY = "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";

  const API_BODY = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are reviewing a candidate's response to an interview question. The question asked was 'Tell me about yourself. Why don't you walk me through your resume?' Your task is to evaluate the candidate's performance and provide feedback. Please fill out the following fields: Confidence (scale of 1-5), Fluency (scale of 1-5), Grammar (scale of 1-5), Performance (scale of 1-5), Sentiment (positive, negative, or neutral), Feedback. Additionally, provide detailed feedback on the candidate's response in a single paragraph. Ensure that the feedback focuses on the candidate's response and suggests improvements without mentioning confidence, fluency, or grammatical errors.",
      },
      {
        role: "user",
        content: response,
      },
    ],
    temperature: 0.5,
    max_tokens: 150,
    top_p: 1,
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + API_KEY,
    },
    body: JSON.stringify(API_BODY),
  });

  const data = await res.json();
  const empty = removeEmptyLines(data.choices[0].message.content);
  return parseResponse(empty);
}

function parseResponse(responseString) {
  const lines = responseString.split("\n");
  const responseObject = {};

  lines.forEach((line) => {
    const parts = line.split(": ");
    const key = parts[0].trim();
    const value = parts[1].trim();
    responseObject[key] = value;
  });

  return responseObject;
}

function removeEmptyLines(text) {
  return text.replace(/^\s*[\r\n]/gm, "");
}

export default callOpenAi;
