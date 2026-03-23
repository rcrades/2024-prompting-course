# Week 3: Graduation - Your Capstone App

Congratulations on reaching the final week of Prompting 101! This week, you'll put everything together and build a complete app that you can share with anyone via a link. **You get to choose your own project** from a curated list, or propose your own idea!

> **Where you are:** You can create with AI and iterate on what it gives you. This week you understand what's under the hood and ship something real. After this, there's more to explore in the [Beyond Week 3 Roadmap](005-beyond-week-3-roadmap.md).

## The Big Idea This Week

Every time you've used v0, it's been generating something called **React** code. You've been working with it the whole time — you just didn't need to know that yet.

This week, we pull back the curtain a little:

- **React** lets you build your app out of reusable pieces (called "components"). Think of them like LEGO blocks — a navigation bar, a card, a button, a form. Each piece works on its own, and you snap them together to make something bigger.
- **Next.js** is the framework that takes all those pieces and turns them into a real, working app — one you can actually share with the world.

**Why does this matter for prompting?** Once you understand that your app is made of components, your prompts get way more powerful. Instead of asking for "a whole page," you can ask for "a card component that shows a recipe with an image, title, and cook time." Specific prompts = better results.

## Final Project Overview

Your capstone project will demonstrate:
- Mastery of the v0 → GitHub → Cursor workflow
- Ability to build a multi-page app with real functionality
- Working with data that sticks around (so your app remembers things)
- Professional-grade prompting and iteration skills
- A portfolio-worthy final product you can share via a link

## Choose Your Adventure: Project Options

### Option 1: Personal Project Hub
**Description**: A dashboard that showcases all your course projects in one place

**Features**:
- Landing page with links to all your projects
- Project cards with screenshots and descriptions
- About section highlighting your AI-assisted development journey
- Contact form that saves messages
- Clean, professional design you'd be proud to share

**Great for**: Portfolio showcasing, linking in job applications

### Option 2: Recipe Manager
**Description**: An app to save, organize, and search your favorite recipes

**Features**:
- Add, edit, and delete recipes with ingredients and instructions
- Category filtering (breakfast, lunch, dinner, dessert)
- Search functionality
- Recipes are saved so they're still there when you come back
- Image upload for recipe photos (optional)

**Great for**: Practical everyday use, building something you'll actually use

### Option 3: Expense Tracker
**Description**: Track personal expenses and see where your money goes

**Features**:
- Add expenses with category, amount, and date
- View expense history
- Filter by date range or category
- Simple charts showing your spending
- Data persists between visits

**Great for**: Useful life skill, teaches data visualization

### Option 4: Study Flashcard App
**Description**: Create and study flashcard sets on any topic

**Features**:
- Create flashcard decks on different topics
- Flip card animation to reveal answers
- Track which cards you've mastered
- Progress saves between sessions
- Spaced repetition (advanced — great stretch goal)

**Great for**: A learning tool about learning, demonstrates interactive features

### Option 5: Link Aggregator (Linktree Clone)
**Description**: Your own personal link-in-bio page

**Features**:
- Custom branded landing page
- Multiple links with titles and icons
- Click tracking for each link
- Admin panel to add, edit, and remove links
- Shareable URL you can put in your social bios

**Great for**: Personal branding, immediately useful for social media

### Option 6: Propose Your Own!
**Have a different idea?**
- Must use the v0 → GitHub → Cursor workflow
- Must save data so it persists (not lost on refresh)
- Should be something you'd actually want to use
- Share your proposal in Discord for feedback before starting!

## Project Development Checklist

### Phase 1: Planning & Design (Day 1)
- [ ] Choose your project from the options above
- [ ] Write out all the features you want to include
- [ ] Sketch a rough layout (pen and paper is fine!)
- [ ] Think about what data your app needs to remember
- [ ] Share your plan in Discord for feedback

### Phase 2: Build Your UI with v0 (Days 1-2)
- [ ] Craft a detailed prompt for v0 describing your app
- [ ] Build the initial UI — focus on getting the layout and look right
- [ ] Iterate on the design until you're happy with it
- [ ] Test clicking around — does the flow make sense?
- [ ] Export the v0 code to GitHub

**Prompting tip**: Now that you know about components, try asking v0 for specific pieces:
> "Create a recipe card component that shows an image, title, cook time, and a delete button"

Then separately:
> "Create a form component for adding a new recipe with fields for title, ingredients, instructions, and cook time"

This approach gives you much more control than asking for everything at once!

### Phase 3: Enhance in Cursor (Days 2-3)
- [ ] Open your project in Cursor AI
- [ ] Use Cursor to understand the code v0 generated — ask it to explain!
- [ ] Add functionality that v0 didn't include:
  - [ ] Make buttons actually do things (add, edit, delete)
  - [ ] Save data so it persists (local storage or a simple database)
  - [ ] Add any missing features from your plan
- [ ] Test everything — does data stay when you refresh?

**Prompting tip for Cursor**: When something isn't working, describe what you *expected* to happen vs. what *actually* happened:
> "When I click the 'Add Recipe' button, nothing happens. I expected it to save the recipe and show it in the list below. Here's the code for the button..."

### Phase 4: Connect the Pieces (Days 3-4)
- [ ] Make sure all parts of your app work together
- [ ] Test the full flow: add something → see it appear → edit it → delete it
- [ ] Check that your data actually saves and comes back after a refresh
- [ ] Add helpful messages for users (loading, success, errors)
- [ ] Make sure it looks good on a phone too (responsive design)

### Phase 5: Polish & Deploy (Days 4-5)
- [ ] Fix any remaining bugs with Cursor's help
- [ ] Improve the look and feel — small details matter!
- [ ] Add at least 2 "nice-to-have" features from your wish list
- [ ] Deploy your app to Vercel so anyone can visit it with a link
- [ ] Test your deployed app — share the link with a friend!

**Deploying to Vercel**: This is the magic moment. Vercel takes your Next.js project and puts it on the internet. You'll go from "code on my computer" to "a real app anyone can visit" in just a few clicks. Ask Cursor or Claude to walk you through connecting your GitHub repo to Vercel.

### Phase 6: Documentation & Presentation (Days 5-6)
- [ ] Write a README for your project:
  - [ ] Project title and description
  - [ ] Screenshots of your app in action
  - [ ] List of features
  - [ ] The tools you used (v0, React/Next.js, Cursor, etc.)
  - [ ] Your prompting journey — what worked, what didn't
- [ ] Create a short presentation (5-7 slides) covering:
  - [ ] What you built and why you chose it
  - [ ] Demo of key features
  - [ ] Challenges you overcame
  - [ ] How you used AI tools throughout
  - [ ] What you learned about prompting
  - [ ] What you'd build next

### Phase 7: Share & Celebrate! (Day 6)
- [ ] Share your deployed app link in Discord
- [ ] Give feedback on at least 2 other students' projects
- [ ] Present during the final Zoom call
- [ ] Add the project to your portfolio or resume
- [ ] Celebrate — you built a real app!

## Understanding Your App: A Quick Guide

### What are Components?

When you look at the code v0 generated, you'll see files with names like `RecipeCard.tsx` or `AddButton.tsx`. Each of these is a **component** — a self-contained piece of your app.

Think of it like building a house:
- The **Header** component is the roof
- The **Sidebar** component is a wall
- A **Card** component is a window
- You arrange them together to make the full house

When you ask v0 or Cursor for changes, you can now point to a specific component: "Change the Header component to include a search bar." That's much more effective than "add search somewhere on the page."

### What is Next.js Doing for You?

You don't need to understand the details, but here's the gist: Next.js handles all the behind-the-scenes work that makes your app function as a real website. When you create a new page, organize your components, or deploy to Vercel — Next.js is what makes all of that "just work."

The important thing is: **v0 generates Next.js apps**, and **Vercel deploys Next.js apps**. That's why this workflow is so smooth.

### What About Saving Data?

Your app needs to remember things (recipes, expenses, flashcards, etc.). There are a few ways to handle this:

- **Local Storage**: The simplest option. Data is saved in the browser. Great for getting started, but only works on one device.
- **A simple database**: Services like Convex or Supabase give you a real database with very little setup. Your data lives in the cloud and works from any device.

Start with local storage to get things working, then upgrade to a database if you want your app to work across devices. Ask Cursor to help you with either approach!

## Reflection & Growth

### Technical Skills Assessment
- [ ] Rate your comfort with v0 (1-10):
- [ ] Rate your comfort with Cursor AI (1-10):
- [ ] Rate your comfort with GitHub (1-10):
- [ ] Rate your prompting skills (1-10):
- [ ] What was the hardest part of this project?
- [ ] What are you most proud of?

### AI-Assisted Development Insights
- [ ] Document the 3 most helpful prompts you used
- [ ] What did you learn about working with AI tools?
- [ ] How has your prompting style evolved since Week 0?
- [ ] What would you do differently next time?

### Future Directions
- [ ] What features would you add with more time?
- [ ] What other projects do you want to build?
- [ ] How will you continue learning?
- [ ] What's your next challenge?

## Congratulations!

You've completed Prompting 101! You now have:
- 4 projects in your portfolio
- Mastery of v0, GitHub, Cursor, ChatGPT, and Claude
- An understanding of React, Next.js, and how modern apps are built
- Professional-grade AI prompting skills
- A real, deployed application that anyone can visit
- The ability to build real applications from scratch

**You came here to learn prompting — and now you can build apps.** That's the power of knowing how to communicate with AI effectively. Keep building!
