# Production Agents: AI Built Into Real Apps

> **Status**: Outline — full content coming soon

## The Big Idea

Personal agents work for you. Production agents work for your *users*. This is where AI goes from a personal tool to something built into the apps people use every day — and it's where the professional opportunity is enormous.

Remember those Next.js apps you built with v0? You can add AI agents directly into them. A customer support chat that actually resolves issues. A writing assistant that helps users draft content. A search feature that understands what people *mean*, not just what they type.

## Why This Matters

Companies are hiring for this right now. The ability to design, prompt, and build AI agents into products is one of the most in-demand skills in tech. And you already have the foundation — prompting, React, Next.js, and Vercel deployment.

## The Tools

### AI SDK (by Vercel)
- A toolkit for adding AI features to your Next.js apps
- Handles the hard parts: streaming responses, managing conversations, connecting to AI models
- You focus on *what* the AI should do — the SDK handles *how*

### ChatSDK (by Vercel)
- A ready-made chat interface you can drop into your app
- Built on top of AI SDK
- Gives you a polished AI chat experience without building it from scratch

### How They Fit Together

```
Your Next.js App (built with v0)
    └── AI SDK (connects your app to AI models)
        └── ChatSDK (optional: gives you a chat UI)
            └── Your prompts (define how the agent behaves)
```

Your prompting skills sit at the core of this stack. The SDK and tools handle the infrastructure — you handle the *intelligence*.

## What You'd Build

Some examples of production agents:
- A customer support bot that knows your product and can actually help
- An AI writing assistant embedded in a content management system
- A code review agent that checks pull requests for your team
- A search assistant that understands natural language queries
- An onboarding agent that walks new users through your app

## The Prompting Connection

Production agents use "system prompts" — detailed instructions that define the agent's personality, knowledge, boundaries, and behavior. This is prompting at its most important:

- **Persona**: "You are a helpful customer support agent for [company]. You are friendly but concise."
- **Knowledge boundaries**: "Only answer questions about our products. If asked about competitors, politely redirect."
- **Behavior rules**: "Never make up information. If you don't know, say so and offer to connect them with a human."
- **Output format**: "Keep responses under 3 sentences unless the user asks for more detail."

## Topics to Explore

- [ ] Adding AI SDK to a Next.js project
- [ ] Writing effective system prompts for production agents
- [ ] The difference between a chatbot and a useful agent
- [ ] Handling edge cases (what happens when the AI doesn't know?)
- [ ] Testing and improving agent behavior
- [ ] Responsible AI: making sure your agent doesn't cause harm
