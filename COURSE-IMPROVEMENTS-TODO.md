# 📋 Course Improvements TODO List

> **Last Updated**: 2025-11-16
> **Status**: Active Development
> **Purpose**: Comprehensive tracking of all course enhancement tasks

## 🎯 Current Sprint (Immediate Priority)

### 1. README.md Restructuring
- [ ] Move "For AI Agents" section down (currently line 175-181)
- [ ] Move "Course Timeline" section down (currently line 183-189)
- [ ] Both sections should appear after "Community & Support" but before "License"
- [ ] Ensure flow makes sense for students reading top-to-bottom

### 2. Tools & Technologies Overhaul

#### Update Tool Descriptions Across All Files
- [ ] **ChatGPT by OpenAI** → Add description: "Your first chatbot experience"
- [ ] **Claude by Anthropic** → Add description: "Gives you context for what another chatbot looks like compared to ChatGPT"
- [ ] **v0 by Vercel** → NEW TOOL TO ADD: "AI-powered React app builder for prompting to create full applications"
- [ ] **GitHub** → Update description: "Where you push your v0 code for version control and collaboration"
- [ ] **Cursor** → Update description: "AI-powered IDE where you iterate and build upon code from v0 that was pushed to GitHub"

#### Files Requiring Tool Updates
- [ ] README.md (lines 109-122 - Tech Stack section)
- [ ] 100-week-0-checklist.md (lines 5-9 - Getting Started section)
- [ ] 001-course-overview.md (if tools mentioned)
- [ ] 004-course-resources.md (if it exists)
- [ ] CLAUDE.md (update tool guidance)

### 3. Weekly Project Improvements

#### Week 0: "About Me" Page
**Current**: Basic HTML/CSS "About Me" webpage
**Issues**: Too simple, doesn't showcase v0
**Proposed Changes**:
- [ ] Keep it simple BUT add option to use v0 for enhanced version
- [ ] Introduce v0 as optional "advanced path"
- [ ] Show how to export from v0 and understand the code
- [ ] OR: Consider shifting to Week 1 and making Week 0 purely setup + exploration

#### Week 1: Personal Website
**Current**: "About Me/My Pet" website with HTML/CSS/JS
**Issues**: "My Pet" theme feels arbitrary and uninspiring
**Proposed Replacement Options**:
- [ ] **Option A**: Personal Portfolio Starter - showcase your learning journey
- [ ] **Option B**: Interactive Resume/CV - practical and career-focused
- [ ] **Option C**: "My Passion Project Landing Page" - student chooses their interest
- [ ] **Option D**: Personal Blog Homepage - introduces content creation
- [ ] **Recommended**: Build foundation in v0, then enhance in Cursor

#### Week 2: Interactive Web App
**Current**: Generic "Interactive Web Application"
**Issues**: Too vague, not compelling
**Proposed Replacement Options**:
- [ ] **Option A**: Task Tracker / Daily Habit Logger - useful + teaches state
- [ ] **Option B**: Personal Finance Calculator - practical math + UI
- [ ] **Option C**: Recipe Organizer - CRUD operations with fun content
- [ ] **Option D**: Movie/Book Wishlist - API integration potential
- [ ] **Option E**: Study Flashcard App - meta (helps them study!)
- [ ] **Recommended**: Focus on something students actually want to use

#### Week 3: Capstone Project
**Current**: House Issues Logging App
**Issues**: Niche use case, not exciting for most students
**Proposed Replacement Options**:
- [ ] **Option A**: Full-Stack Project Hub - showcase all 3 previous projects
- [ ] **Option B**: Personal API + Dashboard - teach backend concepts
- [ ] **Option C**: AI Chat Interface - build their own chatbot UI
- [ ] **Option D**: Social Link Aggregator (like Linktree clone)
- [ ] **Option E**: Student chooses from curated list of 5 options
- [ ] **Recommended**: Tie together v0 → GitHub → Cursor workflow

## 🔨 Content Creation Needs

### v0 Integration (HIGH PRIORITY)

#### New Content Required
- [ ] Create **104-v0-quick-start-guide.md** (or renumber existing files)
- [ ] Write comprehensive v0 tutorial section
- [ ] Create example v0 prompts for common use cases
- [ ] Document v0 → GitHub workflow
- [ ] Document v0 → Cursor workflow
- [ ] Add troubleshooting guide for v0 exports

#### Integration Points
- [ ] Add v0 to Week 0 checklist (exploration)
- [ ] Add v0 to Week 1 checklist (first real project)
- [ ] Add v0 to Week 2 checklist (more complex app)
- [ ] Consider v0 showcase in Week 3 capstone

#### Example Prompts to Include
- [ ] "Build me a personal portfolio website with React"
- [ ] "Create a task tracker with local storage"
- [ ] "Make a responsive landing page for my blog"
- [ ] "Build a calculator app with modern UI"

### Enhanced Prompting Guides

#### 201-helpful-prompts.md Expansion
- [ ] Add v0-specific prompting section
- [ ] Add "prompting for React apps" section
- [ ] Add "debugging v0 exports in Cursor" section
- [ ] Add "iterating on v0 code" examples
- [ ] Add "combining AI tools" workflow examples

#### New Prompting Resources
- [ ] Create **202-v0-prompting-guide.md**
- [ ] Create **203-cursor-ai-best-practices.md**
- [ ] Create **204-ai-tool-combinations.md**
- [ ] Create **205-debugging-with-ai.md**

## 📁 File Numbering & Organization

### Potential Renumbering Needed

**Current Structure**:
- 100: Week 0
- 101: Week 1
- 102: Week 2
- 103: Week 3

**If Adding v0 Module**:
- [ ] Determine where v0 guide fits (104 or integrate into existing?)
- [ ] Check if any 100-series files need shifting
- [ ] Update all cross-references if renumbering occurs
- [ ] Update frontend app if it references file numbers

**200-series Additions**:
- [ ] Confirm next available number in 200-series (currently 201 exists)
- [ ] Plan for 202-205 new files listed above
- [ ] Ensure no conflicts with existing structure

## 🎨 Course Flow & Pedagogy Improvements

### Week 0 Redesign
- [ ] Make it purely exploratory (no pressure to build)
- [ ] Focus on "AI tool tourism" - try everything
- [ ] Add "which tool for which task" decision guide
- [ ] Create comparison chart: ChatGPT vs Claude vs v0 vs Cursor
- [ ] Set expectations for what each tool is good at

### Week 1 Redesign
- [ ] Start with v0 for quick wins and motivation
- [ ] Introduce GitHub web interface (upload v0 export)
- [ ] Show how to read and understand v0 code
- [ ] Introduce Cursor for making small tweaks
- [ ] Build confidence before diving deep

### Week 2 Redesign
- [ ] Heavier Cursor usage for iteration
- [ ] Teach "fix what AI gives you" mindset
- [ ] Introduce component thinking
- [ ] Add responsive design with AI help
- [ ] Focus on prompting for specific features

### Week 3 Redesign
- [ ] Showcase full workflow: v0 → GitHub → Cursor
- [ ] Add simple backend (Python or Node.js)
- [ ] Teach data persistence (JSON or simple DB)
- [ ] Focus on portfolio-worthy final project
- [ ] Prepare for presentation/demo

## 🚀 Enhanced Learning Outcomes

### Skills Matrix to Add
- [ ] Create visual "skill progression" chart
- [ ] Map each week to specific competencies
- [ ] Show tool mastery progression
- [ ] Add "confidence checkpoints"

### Assessment Improvements
- [ ] Add self-assessment rubrics for each week
- [ ] Create peer review templates
- [ ] Design showcase/demo day template
- [ ] Add "AI prompting portfolio" concept

## 🔧 Technical Infrastructure

### Frontend App Updates
- [ ] Update course data with new project names
- [ ] Add v0 to tools/technologies display
- [ ] Update week descriptions
- [ ] Add progress tracking features
- [ ] Consider adding embedded v0 examples

### Documentation
- [ ] Update AGENT.md with v0 guidance
- [ ] Update CLAUDE.md with v0 examples
- [ ] Update CONTRIBUTING.md if structure changes
- [ ] Create TEACHING-GUIDE.md for instructors

## 📚 Additional Resources

### External Resources to Add
- [ ] v0.dev official documentation link
- [ ] v0 example gallery
- [ ] Cursor AI documentation
- [ ] GitHub web interface tutorials
- [ ] React basics (for understanding v0 output)

### Community Resources
- [ ] Create student project showcase template
- [ ] Design Discord channel structure for each tool
- [ ] Add FAQ section for common v0 issues
- [ ] Create troubleshooting flowcharts

## 🎯 Advanced Features (Future Consideration)

### Potential Week 4+ Extensions
- [ ] Advanced v0: Building with Tailwind
- [ ] API Integration Module
- [ ] Deployment Week (Vercel/Netlify)
- [ ] Collaboration Project (group work)
- [ ] Open Source Contribution Prep

### Tool Deep Dives (Optional Modules)
- [ ] Advanced ChatGPT Techniques
- [ ] Claude Projects Feature
- [ ] Cursor Composer Mode
- [ ] GitHub Actions Basics
- [ ] v0 Pro Features

## 🐛 Known Issues to Fix

### Content Issues
- [ ] Inconsistent tone in some weekly checklists
- [ ] Missing transitions between weeks
- [ ] Some prompts in 201 are outdated
- [ ] Need more beginner-friendly explanations

### Technical Issues
- [ ] Frontend app may need dependency updates
- [ ] Some markdown formatting inconsistencies
- [ ] Cross-references may break if renumbering
- [ ] Missing alt text on some future images

## ✅ Completion Criteria

### Definition of Done for This TODO List

**Each item is considered complete when**:
- [ ] Changes are implemented and tested
- [ ] Documentation is updated
- [ ] Cross-references are verified
- [ ] User feedback is incorporated
- [ ] Changes are committed to git

**This TODO list is complete when**:
- [ ] All immediate priority items done
- [ ] v0 fully integrated into course
- [ ] Projects are compelling and relevant
- [ ] Tool descriptions are clear and accurate
- [ ] Course flow is logical and motivating

## 📊 Progress Tracking

**Last Updated**: 2025-11-16
**Items Completed**: 0 / TBD
**Current Focus**: Immediate Priority items
**Next Review Date**: TBD

---

## 🗒️ Notes & Decisions

### Decision Log
- **2025-11-16**: Created comprehensive TODO list
- **TBD**: Decide on final Week 2 project
- **TBD**: Decide on final Week 3 capstone options
- **TBD**: Finalize v0 integration approach

### Open Questions
- Should v0 be required or optional?
- Do we need a full renumbering of files?
- Should Week 3 offer multiple capstone options?
- How deep should React concepts go?
- Should we add TypeScript mentions?

### Parking Lot (Ideas for Later)
- Video tutorial series
- Live coding sessions
- Student success stories section
- Alumni network/community
- Certificate of completion design
- Instructor training materials

---

**Remember**: This is a living document. Update regularly as work progresses and new needs are identified!
