async function generateEmail() {
  const prompt = document.getElementById('userPrompt').value;
  const responseDiv = document.getElementById('response');

  const apiKey = 'YOUR_OPENAI_API_KEY'; // Husk at skifte denne ud!

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 500
      })
    });

    const data = await res.json();
    const generatedText = data.choices[0].message.content;

    responseDiv.innerText = generatedText;
  } catch (error) {
    responseDiv.innerText = 'Error generating email: ' + error.message;
  }
}
