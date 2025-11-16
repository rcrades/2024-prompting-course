# CLAUDE.md

> **Guidance for Claude Code when working with this repository**
> Last Updated: 2025-11-16

This file provides specific instructions for **Claude Code** (claude.ai/code) when working with the **Prompting 101** course repository.

## 🎯 Quick Context

This is **"Prompting 101: Mastering AI-Assisted Problem Solving"** - a 4-week intensive course teaching web development fundamentals through AI-assisted learning techniques. The course emphasizes effective prompting strategies for technical problem-solving.

**For comprehensive repository information**, see [AGENT.md](AGENT.md).

## 📋 File Organization System

The repository uses a **strict numbering convention**:

- **000-099**: Core course materials (overview, objectives, weekly plans, resources)
- **100-199**: Weekly checklists and assignments
- **200-299**: Reference materials and helpful resources
- **300-399**: Additional resources (influencers, external links)

**IMPORTANT**: When creating new files, find the next available number in the appropriate range. Week 3 checklist is `103-week-3-checklist.md` (not 102).

## 🎓 Course Structure

### Target Audience
- Complete beginners in web development
- Individuals interested in AI-assisted coding
- Students learning effective prompting techniques
- Self-learners wanting structured AI collaboration skills

### Technology Stack
- **Primary AI Tools**: ChatGPT, Claude (you!), Cursor
- **Development**: HTML, CSS, JavaScript, Python (Week 3)
- **Platform**: GitHub (web interface), Discord, Zoom
- **Approach**: No traditional package managers - pure web-first development
- **Frontend Demo**: Next.js app in `/frontend/` (optional, supplementary)

### Weekly Progression
- **Week 0**: Foundation (AI tools setup, basic prompting, "About Me" webpage)
- **Week 1**: Fundamentals (web technologies, GitHub, Cursor AI, personal website)
- **Week 2**: Intermediate (responsive design, advanced prompting, interactive app)
- **Week 3**: Graduation (Python backend, JSON data, House Issues Logging App)

## 🎯 Key Course Methodologies

### The Prompting Framework

The course teaches students to use this structured template when working with AI:

```
"I am trying to learn prompting and web development, but I am a beginner.
Can you help me with [specific task]?

If providing code, please use format 'languagename-section-sectionnumber-sectiontheme'
with comments and file specifications."
```

**When helping students**: Model this framework in your responses. Show them *how* to ask, not just *what* to ask.

### Code Organization System

All code examples must include:
- **Section-based organization** with clear markers
- **Structured commenting** (beginning/end markers)
- **File and directory specifications**
- **Language-specific formatting**

Example:
```html
<!-- html-section-1-header -->
<header>
  <h1>Welcome to My Site</h1>
  <!-- This creates the main header for the page -->
</header>
<!-- html-section-1-end -->
```

### Assessment Methods
- Weekly GitHub submissions focusing on prompting processes
- Peer review sessions during Zoom calls
- AI-assisted self-assessment using ChatGPT or Claude
- Final project presentation showcasing AI-assisted development

## 🔧 Working With This Repository

### When Editing Course Content

**DO:**
- ✅ Maintain the numbered file naming convention
- ✅ Use beginner-friendly language (assume zero programming knowledge)
- ✅ Include the prompting framework in all code examples
- ✅ Add section markers to all code blocks
- ✅ Specify which file and directory code belongs in
- ✅ Update weekly checklists with checkbox format `- [ ]`
- ✅ Keep external resource links current and accessible
- ✅ Model good prompting practices in your responses

**DON'T:**
- ❌ Add complex build processes to core materials
- ❌ Assume prior programming knowledge
- ❌ Skip the structured commenting system
- ❌ Break the numbering convention
- ❌ Add dependencies that complicate learning
- ❌ Provide code without explaining *how to ask for it*

### When Helping Students

Remember: **This course teaches prompting, not just coding.**

**Focus on:**
1. **How to ask** - Demonstrate effective prompting techniques
2. **Why it works** - Explain the reasoning behind solutions
3. **Iteration** - Show how to refine prompts and improve results
4. **Understanding** - Ensure comprehension, not just copy-paste

**Example Response Pattern:**
```
"Great question! Here's how I'd approach this with AI assistance:

First, you'd want to ask: [show the prompt]

This prompt works well because [explain why]

Here's what the AI might provide: [show code with comments and sections]

To improve this further, you could ask: [show refinement prompt]
"
```

## 📚 Reference Files

| File | Purpose | When to Use |
|------|---------|-------------|
| `README.md` | Repository introduction | First-time visitors |
| `AGENT.md` | Comprehensive agent guide | Deep repository understanding |
| `CLAUDE.md` | This file - Claude Code specific | Working with this repo |
| `CONTRIBUTING.md` | Contribution guidelines | Making changes |
| `201-helpful-prompts.md` | Prompting templates | Creating examples |

## 💻 The Frontend Application

A Next.js application exists in `/frontend/` providing:
- Visual course overview dashboard
- Week-by-week navigation
- Modern UI with shadcn/ui components
- TypeScript for type safety

This is **supplementary** - the core course is the markdown files.

**When working with frontend:**
```bash
cd frontend
npm install
npm run dev
```

Tech stack: Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui

## 🎨 Creating Code Examples

### Template for HTML Examples
```html
<!-- filename: index.html -->
<!-- purpose: Main webpage structure -->

<!DOCTYPE html>
<html lang="en">
<!-- html-section-1-head -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
  <link rel="stylesheet" href="styles.css">
</head>
<!-- html-section-1-end -->

<!-- html-section-2-body -->
<body>
  <h1>Hello World</h1>
  <p>This is my first webpage created with AI assistance!</p>
</body>
<!-- html-section-2-end -->
</html>
<!-- end of file: index.html -->
```

### Template for CSS Examples
```css
/* filename: styles.css */
/* purpose: Styling for main webpage */

/* css-section-1-typography */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #0066cc;
  font-size: 2.5rem;
}
/* css-section-1-end */

/* css-section-2-layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
/* css-section-2-end */

/* end of file: styles.css */
```

### Template for JavaScript Examples
```javascript
// filename: script.js
// purpose: Interactive functionality for webpage

// javascript-section-1-dom-manipulation
function updateGreeting(name) {
  // Find the greeting element
  const greetingElement = document.getElementById('greeting');

  // Update the text content
  greetingElement.textContent = `Hello, ${name}!`;
}
// javascript-section-1-end

// javascript-section-2-event-listeners
document.addEventListener('DOMContentLoaded', function() {
  // This runs when the page is fully loaded
  const button = document.getElementById('greetButton');

  button.addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    updateGreeting(nameInput);
  });
});
// javascript-section-2-end

// end of file: script.js
```

## 🚨 Common Scenarios

### Scenario 1: Student Asks for Help with Code

**Instead of just providing code:**
1. Show them how to prompt for this solution
2. Provide the code with full commenting and sections
3. Explain how to refine the prompt if results aren't right
4. Suggest follow-up questions they might ask

### Scenario 2: Student's Code Isn't Working

**Debug teaching approach:**
1. Show them how to ask AI for debugging help
2. Demonstrate how to describe the error clearly
3. Guide them to the solution with prompting
4. Don't just fix it - teach them to fish

### Scenario 3: Student Wants to Add a Feature

**Feature development with AI:**
1. Help them break down the feature into steps
2. Show how to prompt for each step
3. Demonstrate iteration and refinement
4. Encourage experimentation

## 📖 Best Practices for Claude Code

### Language and Tone
- **Beginner-friendly**: Define technical terms
- **Encouraging**: Celebrate progress and effort
- **Patient**: Expect questions, welcome them
- **Specific**: Use concrete examples
- **Educational**: Teach the process, not just the answer

### Code Quality Standards
- All code must be **tested** and working
- Use **modern best practices** (HTML5, ES6+, Python 3.x)
- Include **accessibility** considerations
- Provide **mobile-responsive** examples when relevant
- Follow **security best practices** (no XSS, injection vulnerabilities)

### Documentation Standards
- Clear, concise headings
- Checkbox lists for actionable items
- Working external links
- Current information (check dates on resources)
- Proper markdown formatting

## 🔄 Version Control

- Repository uses Git for version control
- Students primarily use GitHub web interface
- Feature branches follow: `claude/write-a-[session-id]`
- Main branch for stable releases
- Always commit with clear, descriptive messages

## ⚠️ Important Reminders

1. **This is a prompting course first** - always model good prompting
2. **Students are beginners** - assume zero prior knowledge
3. **Structure matters** - follow the commenting and section system
4. **Process over product** - teach *how* to get answers, not just provide them
5. **Iteration is key** - show how to refine and improve prompts

## 🎯 Success Metrics

A student succeeds when they can:
- ✅ Craft effective prompts independently
- ✅ Debug their own code by prompting AI
- ✅ Iterate on solutions through prompt refinement
- ✅ Understand basic web development concepts
- ✅ Build simple applications with AI assistance
- ✅ Use AI ethically and responsibly

## 📞 Additional Resources

- **Full repository guide**: [AGENT.md](AGENT.md)
- **Contribution guide**: [CONTRIBUTING.md](CONTRIBUTING.md)
- **Course introduction**: [README.md](README.md)
- **Prompting templates**: `201-helpful-prompts.md`
- **Course overview**: `001-course-overview.md`

---

**Remember**: Your role is to **empower students to work with AI**, not just to provide solutions. Model excellent prompting, encourage experimentation, and celebrate the learning process! 🚀