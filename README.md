# 🧙‍♂️ spellshape-agent

**spellshape-agent** is the official JavaScript/TypeScript SDK for interacting with the [SpellShape](https://github.com/StepanKukharskiy/spellshape) AI 3D design endpoints from any Node.js or browser project.

It makes it easy to:
- Expand terse object prompts into rich 3D briefs
- Generate parametric 3D model schemas from text
- Chat about — and with — generated scene data
- Analyze images and extract visual information for 3D design

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

// Analyze an image and extract design information:
const imagePrompt = await agent.vision('https://example.com/chair-image.jpg');

console.log({ expanded, schema, response, imagePrompt });
```

***

## 📚 API

### `new SpellshapeAgent({ apiKey, apiBase? })`
- **apiKey**: *string (required)* — Your API key (`X-API-Key` header)
- **apiBase**: *string (optional)* — Custom API base URL (defaults to `https://agent.spellshape.com/api/agent/v1`)

### `agent.expand(prompt)`
Expands a short user prompt (e.g. "a chair") into a richly described 3D object brief.

- **prompt**: string  
- **Returns**: `Promise<string>` — Detailed modeling prompt

### `agent.generate(promptOrExpandedPrompt, opts)`
Generates a parametric 3D scene/model **schema** from a prompt or modifies an existing schema.

- **promptOrExpandedPrompt**: string — Can be either a raw prompt or an already expanded prompt
- **opts**: object (optional) — Additional generation options
- **Returns**: `Promise<object>` — JSON schema for use in 3D pipelines

### `agent.chat(prompt, schema?, chatHistory?, opts?)`
Chats with the agent about your current scene.

- **prompt**: string — Your question or message
- **schema**: object (optional) — The current 3D schema context  
- **chatHistory**: array (optional) — For multi-turn conversations  
- **opts**: object (optional) — Additional chat options
- **Returns**: `Promise<string>` — Answer or guidance

### `agent.vision(imageUrl)`
Analyzes an image and extracts visual information that can be used for 3D design prompts.

- **imageUrl**: string (required) — A publicly accessible URL to an image
- **Returns**: `Promise<string>` — Extracted design prompt based on the image analysis
- **Throws**: Error if imageUrl is not provided or not a valid string

***

## 🧩 Why Use `spellshape-agent`?

- **AI-native:** Speak and reason with your 3D design data
- **Vision-enabled:** Extract design insights from images
- **Cross-platform:** Use in Node, browser, design tools, servers, and plugins
- **Future-proof:** Powers `.spell` pipelines, LLM-native CAD, and metaverse automation

***

## 🛠 Integrations & Ecosystem

Use `spellshape-agent` to:
- Automate web or desktop 3D editors (Three.js, Unity, Blender plugins, etc)
- Prototype generative pipelines with live chat/design feedback loops
- Analyze reference images to inform parametric design decisions
- Rapidly bootstrap new tools atop the SpellShape schema

*See the [SpellShape meta repo](https://github.com/StepanKukharskiy/spellshape) for docs and ideas.*

***

## ⚠️ Limitations & Status

- Experimental and in flux - APIs and schemas may evolve
- Requires a valid API key (create one in our web app) (see [here](https://github.com/StepanKukharskiy/spellshape-webapp))
- Vision endpoint requires publicly accessible image URLs
- For feedback, issues, or PRs: [open an issue here](https://github.com/StepanKukharskiy/spellshape/issues)

***

## ✨ Vision

Imagine describing a scene in plain language, analyzing reference images, and seeing it all come alive as a parametric, editable 3D schema—one you can manipulate, render, and automate across platforms.

`spellshape-agent` helps you build that bridge.

***

**SpellShape is a living experiment. Shape your ideas with us.**

---