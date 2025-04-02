import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, PenTool, CheckCircle, Clock } from "lucide-react";

export default function VisionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Brand Vision</h1>
        <p className="text-muted-foreground">Define your long-term vision and strategic objectives.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Vision Statement</CardTitle>
            <CardDescription>Your brand's aspirational future state</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/20 rounded-md p-6 relative">
              <blockquote className="text-xl italic text-center px-8">
                "To become the leading platform for brand development and management, helping every business create a powerful and consistent brand presence."
              </blockquote>
              <Button variant="ghost" className="absolute top-2 right-2">
                <PenTool className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Brand Purpose</CardTitle>
            <CardDescription>Why your brand exists beyond profit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We believe that every business, regardless of size, deserves access to professional brand management tools and expertise. Our purpose is to democratize brand excellence and level the playing field in the digital marketplace.
              </p>
              <Button variant="outline" size="sm">
                <PenTool className="mr-2 h-4 w-4" />
                Edit Purpose
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Core Values</CardTitle>
            <CardDescription>The fundamental beliefs that guide your brand</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Excellence: We pursue the highest standards in all we do",
                "Innovation: We embrace change and continuously evolve",
                "Integrity: We are honest, transparent, and ethical",
                "Empowerment: We enable others to succeed",
                "Customer-Focus: We prioritize customer needs in all decisions"
              ].map((value, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="sm" className="mt-4">
              <PenTool className="mr-2 h-4 w-4" />
              Edit Values
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Objectives</CardTitle>
          <CardDescription>Long-term goals that align with your vision</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                title: "Expand Market Reach",
                description: "Increase our customer base across new geographic and industry sectors",
                timeline: "2025-2027",
                progress: 35,
                milestones: [
                  { title: "Enter European market", completed: true },
                  { title: "Expand to 5 new industry verticals", completed: false },
                  { title: "Achieve 10,000 active customers", completed: false }
                ]
              },
              {
                title: "Product Innovation",
                description: "Develop and launch new features that address emerging market needs",
                timeline: "2025-2026",
                progress: 60,
                milestones: [
                  { title: "Implement AI-powered content generation", completed: true },
                  { title: "Launch advanced analytics dashboard", completed: true },
                  { title: "Develop integrated social media management", completed: false }
                ]
              },
              {
                title: "Customer Success",
                description: "Achieve industry-leading customer satisfaction and retention rates",
                timeline: "2025-2028",
                progress: 45,
                milestones: [
                  { title: "Implement enhanced onboarding process", completed: true },
                  { title: "Launch customer success program", completed: false },
                  { title: "Achieve 95% customer satisfaction rating", completed: false }
                ]
              }
            ].map((objective, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{objective.title}</h3>
                    <p className="text-muted-foreground">{objective.description}</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{objective.timeline}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Progress</span>
                    <span className="text-sm">{objective.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${objective.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Key Milestones</h4>
                  <ul className="space-y-1">
                    {objective.milestones.map((milestone, j) => (
                      <li key={j} className="flex items-center">
                        <CheckCircle 
                          className={`h-4 w-4 mr-2 ${milestone.completed ? 'text-primary' : 'text-muted'}`} 
                          fill={milestone.completed ? 'currentColor' : 'none'}
                        />
                        <span className={milestone.completed ? '' : 'text-muted-foreground'}>
                          {milestone.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm">
                    <PenTool className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center">
              <Button>
                <Lightbulb className="mr-2 h-4 w-4" />
                Add New Strategic Objective
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}