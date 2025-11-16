# AGENT.md

> **Comprehensive guidance for AI agents working with this repository**
> Last Updated: 2025-11-16

## 🎯 Repository Purpose

This is **"Prompting 101: Mastering AI-Assisted Problem Solving"** - a 4-week intensive course designed to teach web development fundamentals through AI-assisted learning techniques. The primary focus is on effective prompting strategies for technical problem-solving.

## 📋 Quick Reference

### Repository Type
- **Primary Content**: Educational course materials (Markdown)
- **Technology**: Static markdown files + Next.js frontend demo
- **Target Audience**: Beginners in web development and AI prompting
- **Delivery Method**: Self-paced with weekly cohort check-ins

### Key Locations
- **Course Materials**: Root directory (numbered .md files)
- **Frontend Demo**: `/frontend/` (Next.js application)
- **Guidance Files**: `CLAUDE.md`, `AGENT.md` (this file)
- **Reference Materials**: Files in the 200-299 range

## 📁 File Organization System

The repository follows a **strict numbering convention** for organization:

| Range | Purpose | Examples |
|-------|---------|----------|
| `000-099` | Core course materials | 001-course-overview.md, 002-learning-objectives.md |
| `100-199` | Weekly checklists & assignments | 100-week-0-checklist.md, 101-week-1-checklist.md |
| `200-299` | Reference materials & resources | 201-helpful-prompts.md, 202-visual-design-inspo.md |
| `300-399` | External resources & links | 301-influencers-to-follow.md |

**Important**: When creating new files, follow this numbering convention strictly. If you find numbering conflicts, flag them for correction.

## 🏗️ Course Structure

### 4-Week Learning Path

```
Week 0: Foundation
├─ AI Tools Setup (ChatGPT, Claude, Cursor)
├─ Basic Prompting Principles
└─ Project: "About Me" Webpage

Week 1: Fundamentals
├─ Web Technologies (HTML, CSS, JavaScript)
├─ GitHub Web Interface
├─ Cursor AI Integration
└─ Project: Personal Website

Week 2: Intermediate
├─ Responsive Design
├─ Advanced Prompting Techniques
└─ Project: Interactive Web App

Week 3: Graduation
├─ Python Backend Basics
├─ JSON Data Handling
└─ Final Project: House Issues Logging App
```

### Technology Stack

**Primary AI Tools**:
- ChatGPT (OpenAI)
- Claude (Anthropic)
- Cursor (AI-powered IDE)

**Development Technologies**:
- HTML, CSS, JavaScript (Weeks 0-2)
- Python (Week 3)
- GitHub (web interface)

**Communication Platforms**:
- Discord (peer support)
- Zoom (weekly cohort calls)

**Important Philosophy**: No traditional package managers during the course - pure web-first development to minimize setup friction for beginners.

## 🎓 Teaching Methodology

### The Prompting Framework

The course teaches students to use this structured template:

```
"I am trying to learn prompting and web development, but I am a beginner.
Can you help me with [specific task]?

If providing code, please use format 'languagename-section-sectionnumber-sectiontheme'
with comments and file specifications."
```

### Code Organization Requirements

When generating code examples for students:

1. **Section-based organization** with clear markers
2. **Structured comments** including:
   - File beginning/end markers
   - Section beginning/end markers
   - Purpose explanations
3. **File specifications** (which file, which directory)
4. **Language-specific formatting** following the template above

Example:
```html
<!-- html-section-1-header -->
<header>
  <h1>My Website</h1>
</header>
<!-- html-section-1-end -->
```

### Assessment Approach

- Weekly GitHub submissions showcasing prompting process
- Peer review during Zoom sessions
- AI-assisted self-assessment
- Final project presentation

## 🔧 When Working With This Repository

### DO:
- ✅ Maintain the numbered file naming convention
- ✅ Use beginner-friendly language and examples
- ✅ Include prompting templates in all code examples
- ✅ Preserve the structured commenting system
- ✅ Keep external resource links current
- ✅ Update weekly checklists with checkbox format `- [ ]`
- ✅ Consider the beginner audience in all explanations

### DON'T:
- ❌ Add complex build processes or package managers to core materials
- ❌ Assume prior programming knowledge
- ❌ Skip the prompting framework in examples
- ❌ Break the numbering convention
- ❌ Add dependencies that complicate the learning path
- ❌ Remove or simplify the structured commenting requirements

## 🎯 Common Agent Tasks

### 1. Adding New Course Content

When adding new weekly materials:
```markdown
1. Check existing numbering in the target range
2. Create file with next available number
3. Follow checklist format for weekly materials (100-199)
4. Include prompting examples relevant to the topic
5. Add checkbox tracking for student progress
```

### 2. Creating Code Examples

Always include:
- Beginner context statement
- Section markers (languagename-section-number-theme)
- File and directory specifications
- Comments explaining each section
- Prompting template showing how a student would ask for this code

### 3. Updating Reference Materials

For files in 200-299 range:
- Keep prompting templates current
- Ensure compatibility with ChatGPT, Claude, and Cursor
- Include practical, copy-paste-ready examples
- Update for latest AI tool capabilities

### 4. Reviewing Student Work

When analyzing student submissions:
- Focus on their prompting process, not just code quality
- Check if they followed the structured commenting system
- Evaluate their prompt evolution and refinement
- Provide feedback in beginner-friendly language

## 🚀 The Frontend Application

A **Next.js frontend** application exists in `/frontend/` that provides:
- Visual course overview
- Week-by-week navigation
- Modern UI built with shadcn/ui
- TypeScript for type safety

This is a **supplementary tool** - the core course materials remain the markdown files.

### Frontend Tech Stack:
- Next.js 15+ (App Router)
- React 19+
- TypeScript
- Tailwind CSS
- shadcn/ui components

### Working with Frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🔄 Version Control & Git

- Repository uses standard Git workflow
- Students primarily use GitHub web interface (simplified)
- Branches follow convention: `claude/write-a-[session-id]`
- Main branch for stable releases
- Feature branches for new content development

## 🌟 Success Metrics

A successful course completion involves:
1. Student can craft effective prompts independently
2. Student understands basic web development concepts
3. Student has built 3-4 working projects
4. Student can use AI tools to debug and iterate
5. Student understands ethical AI use in development

## 🆘 Troubleshooting

### Common Issues:

**Issue**: Student overwhelmed by AI tool choices
**Solution**: Recommend starting with ChatGPT, then adding Claude/Cursor

**Issue**: Student not following comment structure
**Solution**: Point to 201-helpful-prompts.md, provide specific examples

**Issue**: Student stuck on setup
**Solution**: Emphasize web-first approach, minimize local installation

**Issue**: Student getting poor AI responses
**Solution**: Review prompting template, ensure they're providing context

## 📝 Content Standards

### Markdown Files Should:
- Use clear, descriptive headings
- Include checkbox lists for actionable items
- Link to external resources when helpful
- Provide both conceptual and practical information
- Use consistent formatting (heading levels, list styles)

### Code Examples Should:
- Be complete and copy-paste ready
- Include all necessary comments and markers
- Specify file names and locations
- Work with modern browsers (for web code)
- Be tested before inclusion

## 🔮 Future Enhancements

Potential improvements to consider:
- Interactive exercises within the frontend
- Video content integration
- AI chatbot for course Q&A
- Automated assessment tools
- Community showcase gallery
- Translation to multiple languages
- Mobile app for course access

## 📚 Key Files to Understand

| File | Purpose |
|------|---------|
| `001-course-overview.md` | High-level course introduction |
| `201-helpful-prompts.md` | Core prompting templates and examples |
| `100-week-0-checklist.md` | Entry point for students |
| `CLAUDE.md` | Instructions for Claude Code specifically |
| `AGENT.md` | This file - comprehensive agent guidance |

## 🤝 Contributing

This course is designed for iterative improvement:
- Student feedback drives updates
- AI tool capabilities evolve - keep materials current
- Web technologies change - update examples accordingly
- Community contributions welcome via PRs

## ⚖️ Ethical Considerations

When working with this repository, remember:
- Emphasize ethical AI use in all materials
- Teach students to critically evaluate AI outputs
- Promote understanding over blind copying
- Encourage attribution and transparency
- Foster responsible AI-assisted development practices

## 📞 Support Resources

- **Discord**: Community peer support
- **Zoom**: Weekly cohort calls
- **GitHub Issues**: Technical problems and suggestions
- **Course Instructor**: Ryan (referenced in materials)

---

## Quick Start for Agents

```bash
# 1. Understand the context
cat CLAUDE.md AGENT.md

# 2. Review course structure
ls -la *.md

# 3. Check current week materials
cat 100-week-0-checklist.md

# 4. Review prompting templates
cat 201-helpful-prompts.md

# 5. If working with frontend
cd frontend && npm install && npm run dev
```

---

**Remember**: This is a **beginner-focused, prompting-first** educational repository. Every change should support students learning to effectively communicate with AI tools while building foundational web development skills.
