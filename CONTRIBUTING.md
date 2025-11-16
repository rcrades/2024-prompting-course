# Contributing to Prompting 101

Thank you for your interest in contributing to **Prompting 101: Mastering AI-Assisted Problem Solving**! This course thrives on community input and we welcome contributions from students, educators, and AI enthusiasts.

## 🌟 Ways to Contribute

### 1. Share Your Prompting Techniques
Have you discovered an effective prompt that helped you solve a tricky problem? Share it!
- Add examples to `201-helpful-prompts.md`
- Create a discussion post with your technique
- Submit a PR with new prompting patterns

### 2. Improve Course Materials
Help make the course clearer and more effective:
- Fix typos or unclear explanations
- Add missing sections or examples
- Update outdated links or resources
- Suggest better code examples
- Improve checklist items

### 3. Report Issues
Found something confusing or broken?
- Use GitHub Issues for bugs or problems
- Tag issues appropriately (bug, enhancement, question)
- Provide specific examples when possible
- Suggest potential solutions if you have ideas

### 4. Add Resources
Know of great learning resources?
- External tutorials (add to `004-course-resources.md`)
- Influencers to follow (add to `301-influencers-to-follow.md`)
- Visual design inspiration (add to `202-visual-design-inspo.md`)

### 5. Help Other Students
Be part of the learning community:
- Answer questions in GitHub Discussions
- Share your projects and experiences
- Provide constructive feedback on others' work
- Participate in Discord and Zoom sessions

## 📝 Contribution Guidelines

### File Naming Convention

**IMPORTANT**: This repository uses a strict numbering system:

- `000-099`: Core course materials
- `100-199`: Weekly checklists and assignments
- `200-299`: Reference materials and guides
- `300-399`: External resources and links

When creating new files:
1. Identify the appropriate range for your content
2. Find the next available number in that range
3. Use the format: `###-descriptive-name.md`
4. Keep filenames lowercase with hyphens

Example: `203-advanced-css-techniques.md`

### Content Standards

#### Markdown Files
- Use clear, descriptive headings (start with `#`)
- Include checkbox lists for actionable items: `- [ ]`
- Link to external resources when helpful
- Keep paragraphs concise and scannable
- Use code blocks with language specification

#### Code Examples
All code examples should:
- **Be beginner-friendly** - assume no prior knowledge
- **Include comments** - explain what each section does
- **Use section markers** - follow the course format:
  ```html
  <!-- html-section-1-header -->
  <header>
    <h1>My Website</h1>
  </header>
  <!-- html-section-1-end -->
  ```
- **Specify file locations** - tell students where code should go
- **Be tested** - ensure code actually works
- **Follow modern standards** - use current best practices

#### Prompting Examples
When adding prompting examples:
- Include the **context statement**: "I am a beginner learning..."
- Show the **complete prompt**, not just fragments
- Provide **example AI responses** when relevant
- Explain **why the prompt works**
- Demonstrate **iteration and refinement**

### Language and Tone

- **Beginner-friendly**: Avoid jargon, or define it clearly
- **Encouraging**: Learning can be challenging - be supportive
- **Specific**: Use concrete examples, not vague descriptions
- **Action-oriented**: Focus on what students should *do*
- **Inclusive**: Welcome all backgrounds and skill levels

## 🔄 Pull Request Process

### Before You Start

1. **Check existing issues and PRs** - avoid duplicate work
2. **Open an issue first** for major changes - discuss before coding
3. **Read the AGENT.md file** - understand the repository structure
4. **Review related files** - maintain consistency with existing content

### Submitting a PR

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then:
   git clone https://github.com/YOUR_USERNAME/2024-prompting-course.git
   cd 2024-prompting-course
   ```

2. **Create a descriptive branch**
   ```bash
   git checkout -b feature/add-css-grid-examples
   # or
   git checkout -b fix/week-2-broken-link
   ```

3. **Make your changes**
   - Follow the file naming convention
   - Test any code examples
   - Update relevant documentation
   - Maintain consistent formatting

4. **Write a clear commit message**
   ```bash
   git commit -m "Add CSS Grid examples to Week 2 checklist

   - Added 3 new CSS Grid prompting examples
   - Included visual diagrams for layout concepts
   - Updated 202-visual-design-inspo.md with Grid resources"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/add-css-grid-examples
   # Then create PR on GitHub
   ```

6. **Fill out the PR template**
   - Describe what you changed and why
   - Reference any related issues
   - Add screenshots if relevant
   - Checklist any testing done

### PR Review Process

- PRs are reviewed by course maintainers
- We may ask for changes or clarification
- Be patient - reviews may take a few days
- Be open to feedback - it makes the course better!

## 🎯 Priority Contribution Areas

We especially welcome contributions in these areas:

### High Priority
- [ ] More diverse code examples (different project types)
- [ ] Accessibility improvements in course materials
- [ ] Non-English language translations
- [ ] Video tutorial creation
- [ ] Interactive exercises for the frontend app

### Medium Priority
- [ ] Additional prompting patterns for specific scenarios
- [ ] Case studies of successful student projects
- [ ] Troubleshooting guides for common issues
- [ ] Better visual design examples and inspiration
- [ ] AI tool comparison guides (ChatGPT vs Claude vs Cursor)

### Ongoing
- [ ] Keeping external links up to date
- [ ] Fixing typos and grammar issues
- [ ] Improving clarity of explanations
- [ ] Updating for latest AI tool features

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** - what's wrong?
2. **Location** - which file(s) are affected?
3. **Expected behavior** - what should happen?
4. **Actual behavior** - what actually happens?
5. **Steps to reproduce** - how can we see the issue?
6. **Suggested fix** - if you have ideas

### Good Bug Report Example

```markdown
**Bug**: Broken link in Week 1 checklist

**Location**: `101-week-1-checklist.md` line 23

**Description**: The link to "GitHub guide" returns a 404 error

**Expected**: Should link to GitHub's official documentation

**Suggested Fix**: Update to https://docs.github.com/en/get-started
```

## 💡 Feature Requests

Have an idea for improving the course? Great! Please:

1. **Check existing feature requests** - avoid duplicates
2. **Describe the feature** - what should it do?
3. **Explain the benefit** - why is this useful?
4. **Consider scope** - does it fit the course goals?
5. **Suggest implementation** - how might it work?

## 📜 Code of Conduct

### Our Standards

- **Be respectful** - treat everyone with kindness
- **Be inclusive** - welcome all backgrounds and skill levels
- **Be constructive** - offer helpful feedback
- **Be patient** - we're all learning together
- **Be ethical** - promote responsible AI use

### Not Acceptable

- Harassment or discriminatory behavior
- Sharing others' private information
- Trolling, insults, or personal attacks
- Spam or off-topic content
- Plagiarism or academic dishonesty

## 🙏 Recognition

Contributors will be:
- Listed in a CONTRIBUTORS.md file (if we create one)
- Thanked in release notes for significant contributions
- Mentioned in Discord announcements
- Part of building an amazing learning resource!

## ❓ Questions?

Not sure if your contribution fits? Have questions about the process?

- **Discord**: Ask in the #contributors channel
- **GitHub Discussions**: Start a conversation
- **Issues**: Create a "question" issue
- **Email**: Contact the course instructor (check Discord)

## 🚀 Ready to Contribute?

1. Read through [AGENT.md](AGENT.md) to understand the repository
2. Check the [Issues page](https://github.com/rcrades/2024-prompting-course/issues) for good first contributions
3. Fork the repo and start coding!
4. Submit your PR and celebrate! 🎉

Thank you for helping make **Prompting 101** better for everyone!

---

*Last updated: 2025-11-16*
