import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const courseWeeks = [
  {
    week: 0,
    title: "Foundation",
    description: "AI tool setup and basic prompting techniques",
    topics: ["ChatGPT Setup", "GitHub Basics", "HTML/CSS/JS Intro", "About Me Webpage"],
    status: "Setup"
  },
  {
    week: 1,
    title: "Fundamentals", 
    description: "Deep dive into web technologies and GitHub",
    topics: ["Web Technologies", "GitHub Management", "Cursor AI", "Personal Website"],
    status: "Building"
  },
  {
    week: 2,
    title: "Intermediate Skills",
    description: "Advanced concepts and responsive design",
    topics: ["Advanced HTML/CSS", "Responsive Design", "Complex Prompting", "Interactive App"],
    status: "Advanced"
  },
  {
    week: 3,
    title: "Graduation",
    description: "Full-stack development with Python",
    topics: ["Python Integration", "JSON Data", "Backend Development", "Final Project"],
    status: "Project"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Prompting 101: Mastering AI-Assisted Problem Solving
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 4-week intensive course teaching web development fundamentals through AI-assisted learning techniques, 
            with emphasis on effective prompting strategies for technical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {courseWeeks.map((week) => (
            <Card key={week.week} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Week {week.week}: {week.title}</CardTitle>
                  <Badge variant="secondary">{week.status}</Badge>
                </div>
                <CardDescription>{week.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Topics:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {week.topics.map((topic, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🤖 AI Tools</CardTitle>
              <CardDescription>Primary platforms for learning</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• ChatGPT (OpenAI)</li>
                <li>• Claude (Anthropic)</li>
                <li>• Cursor (AI Editor)</li>
                <li>• GitHub Integration</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🛠️ Tech Stack</CardTitle>
              <CardDescription>Technologies you&apos;ll master</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• HTML, CSS, JavaScript</li>
                <li>• Python (Week 3)</li>
                <li>• JSON Data Handling</li>
                <li>• Responsive Design</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎯 Learning Goals</CardTitle>
              <CardDescription>What you&apos;ll achieve</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Effective Prompting</li>
                <li>• AI-Assisted Coding</li>
                <li>• Version Control</li>
                <li>• Full-Stack Projects</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>🚀 Ready to Start?</CardTitle>
              <CardDescription>
                This course emphasizes practical application of AI tools rather than traditional programming methodologies, 
                making it unique in the educational landscape.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Designed to be completed in 4 weeks with intensive focus, or stretched over a longer period for better retention.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
