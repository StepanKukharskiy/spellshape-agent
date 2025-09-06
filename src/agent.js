// src/agent.js

class SpellshapeAgent {
  constructor({ apiKey, apiBase = 'https://agent.spellshape.com/api/agent/v1' }) {
    if (!apiKey) throw new Error('apiKey is required');
    this.apiKey = apiKey;
    this.apiBase = apiBase.replace(/\/$/, ''); // remove trailing slash
  }

  async _fetch(endpoint, body) {
    const res = await fetch(`${this.apiBase}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      let errorData;
      try {
        errorData = await res.json();
      } catch (_) { }

      throw new Error(
        `API error: ${res.status} ${res.statusText}. ${errorData?.error ?? ''}`
      );
    }

    return res.json();
  }

  async expand(prompt) {
    const data = await this._fetch('expand', { prompt });
    return data.prompt;
  }

  async generate(promptOrExpandedPrompt, opts = {}) {
    const postBody = {
      prompt: promptOrExpandedPrompt,
      ...opts
    };
    const data = await this._fetch('generate', postBody);
    return data;
  }

  async chat(prompt, schema = {}, chatHistory = [], opts = {}) {
    const postBody = {
      prompt,
      schema,
      chatHistory,
      questionOnly: true, // Based on your endpoint code
      ...opts
    };
    const data = await this._fetch('chat', postBody);
    return data.response;
  }

  async vision(imageUrl) {
    if (!imageUrl || typeof imageUrl !== 'string') {
      throw new Error('vision(imageUrl) requires a publicly reachable URL string');
    }
    try {
      const data = await this._fetch('vision', { imageUrl });
      return data.prompt;
    } catch (err) {
      console.error('Vision API error:', err);
      throw err; // Re-throw so caller can handle appropriately
    }
  }

}

export default SpellshapeAgent;
