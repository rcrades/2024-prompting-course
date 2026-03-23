# Local Coding Agents: Beyond Just One Tool

> **Status**: Outline — full content coming soon

## The Big Idea

In this course, you used a coding agent to iterate on your projects. But there's a whole category of these tools, and they're evolving fast. Understanding the category — not just one product — keeps you flexible.

## What is a "Local Agent"?

A local agent is an AI tool that:
- Has access to the code on your computer
- Can read, edit, and create files
- Can run commands and tests
- Works with you in a back-and-forth conversation about your project

The key word is **local** — it's working with your actual files, not generating code in a vacuum like a chatbot does.

## The Main Players

### Cursor
- Visual editor with AI built in (what you used in this course)
- Great for: seeing your code and AI suggestions side by side
- How it works: looks like a regular code editor, but you can chat with it about your code

### Claude Code
- Runs in the terminal (command line)
- Great for: rapid iteration, working across many files at once
- How it works: you describe what you want, it reads your project and makes changes

### OpenAI Codex
- Also runs in the terminal
- Great for: similar to Claude Code, different AI model underneath
- How it works: same idea — describe the task, it works through your codebase

## How to Think About Choosing

- **If you like visual interfaces**: Start with Cursor
- **If you're comfortable in the terminal**: Try Claude Code or Codex
- **For most tasks**: Any of them will work — the quality of your prompt matters more than which tool you pick

## What Makes Your Prompts Better With Local Agents

Because these tools can see your whole project, you can give them much richer context:

> "Look at the RecipeCard component and add a 'favorite' button that saves to local storage. Follow the same styling pattern used in the existing delete button."

That prompt works because the agent can actually *look at* RecipeCard and the delete button. A regular chatbot would have to guess.

## Topics to Explore

- [ ] Setting up Claude Code
- [ ] Setting up Codex
- [ ] When to use a visual editor vs. a terminal agent
- [ ] Prompting patterns that work well with local agents
- [ ] Working with agents on larger projects
