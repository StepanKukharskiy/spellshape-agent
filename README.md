# 🧙‍♂️ spellshape-agent

**spellshape-agent** is the official JavaScript/TypeScript SDK for interacting with the [SpellShape](https://github.com/StepanKukharskiy/spellshape) AI 3D design endpoints from any Node.js or browser project.

It makes it easy to:
- Expand terse object prompts into rich 3D briefs
- Generate parametric 3D model schemas from text
- Chat about—and with—generated scene data

Built for use in creative coding, generative design, and AI-augmented workflows.

***

## 🚀 Installation

```bash
npm install spellshape-agent
```

***

## 🪄 Quick Start

```js
import SpellshapeAgent from 'spellshape-agent';

const agent = new SpellshapeAgent({ apiKey: 'YOUR_X_API_KEY' });

// Expand a brief text prompt into a detailed 3D modeling instruction:
const expanded = await agent.expand('a chair');

// Generate a full parametric schema from the expanded prompt:
const schema = await agent.generate(expanded);

// Chat with the agent about your schema:
const response = await agent.chat('How tall is the chair?', schema);

console.log({ expanded, schema, response });
```

***

## 📚 API

### `new SpellshapeAgent({ apiKey, apiBase? })`
- **apiKey**: *string (required)* — Your API key (`X-API-Key` header)
- **apiBase**: *string (optional)* — Custom API base URL (defaults to SpellShape cloud instance)

### `agent.expand(prompt)`
Expands a short user prompt (e.g. "a chair") into a richly described 3D object brief.

- **prompt**: string  
- **Returns**: `Promise<string>` — Detailed modeling prompt

### `agent.generate(prompt, opts)`
Generates a parametric 3D scene/model **schema** from a prompt or modifies an existing schema.

- **prompt**: string  
- **opts**: object (optional)  
- **Returns**: `Promise<object>` — JSON schema for use in 3D pipelines

### `agent.chat(question, schema?, chatHistory?, opts?)`
Chats with the agent about your current scene.

- **question**: string  
- **schema**: object (optional) — The current 3D schema context  
- **chatHistory**: array (optional) — For multi-turn conversations  
- **opts**: object (optional)  
- **Returns**: `Promise<string>` — Answer or guidance

***

## 🧩 Why Use `spellshape-agent`?

- **AI-native:** Speak and reason with your 3D design data
- **Cross-platform:** Use in Node, browser, design tools, servers, and plugins
- **Future-proof:** Powers `.spell` pipelines, LLM-native CAD, and metaverse automation

***

## 🛠 Integrations & Ecosystem

Use `spellshape-agent` to:
- Automate web or desktop 3D editors (Three.js, Unity, Blender plugins, etc)
- Prototype generative pipelines with live chat/design feedback loops
- Rapidly bootstrap new tools atop the SpellShape schema

*See the [SpellShape meta repo](https://github.com/StepanKukharskiy/spellshape) for docs and ideas.*

***

## ⚠️ Limitations & Status

- Experimental and in flux—APIs and schemas may evolve
- Requires a valid API key (create one in our web app) (see [here](https://github.com/StepanKukharskiy/spellshape-webapp))
- For feedback, issues, or PRs: [open an issue here](https://github.com/StepanKukharskiy/spellshape/issues)

***

## ✨ Vision

Imagine describing a scene in plain language and seeing it come alive as a parametric, editable 3D schema—one you can manipulate, render, and automate across platforms.

`spellshape-agent` helps you build that bridge.

***

**SpellShape is a living experiment. Shape your ideas with us.**

---