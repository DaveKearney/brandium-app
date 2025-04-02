import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight, PenTool, CheckCircle, Users, Search, BarChart } from "lucide-react";

export default function StrategyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Brand Strategy</h1>
        <p className="text-muted-foreground">Define and implement your brand's strategic approach to the market.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategy Overview</CardTitle>
          <CardDescription>Your brand's strategic positioning and approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-md p-4 space-y-2">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded mr-2">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium">Positioning</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Positioned as a premium, innovative solution for businesses seeking professional brand management capabilities with AI-powered insights.
              </p>
              <Button variant="ghost" size="sm" className="w-full">
                <PenTool className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
            
            <div className="border rounded-md p-4 space-y-2">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded mr-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium">Target Audience</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Small to medium businesses and growing startups with marketing teams seeking to establish or enhance their brand presence in competitive markets.
              </p>
              <Button variant="ghost" size="sm" className="w-full">
                <PenTool className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
            
            <div className="border rounded-md p-4 space-y-2">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded mr-2">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium">Differentiation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Unique combination of AI-powered insights, integrated tools across the entire brand management lifecycle, and an intuitive, user-friendly platform.
              </p>
              <Button variant="ghost" size="sm" className="w-full">
                <PenTool className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Target Market Analysis</CardTitle>
            <CardDescription>Understanding your core customer segments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Growth-Stage Startups",
                  description: "Tech startups with 10-50 employees entering growth phase",
                  needs: ["Brand consistency across channels", "Quick content creation", "Market positioning"]
                },
                {
                  name: "Small Marketing Agencies",
                  description: "Boutique agencies managing multiple client brands",
                  needs: ["Client reporting tools", "Asset management", "Multi-brand oversight"]
                },
                {
                  name: "Mid-Market Businesses",
                  description: "Established companies with 50-250 employees",
                  needs: ["Brand governance", "Team collaboration", "Advanced analytics"]
                }
              ].map((segment, i) => (
                <div key={i} className="border rounded-md p-4 relative">
                  <Button variant="ghost" size="sm" className="absolute top-2 right-2">
                    <PenTool className="h-4 w-4" />
                  </Button>
                  <h3 className="font-medium">{segment.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{segment.description}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Needs:</h4>
                    <ul className="space-y-1">
                      {segment.needs.map((need, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-primary" />
                          {need}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Add New Customer Segment
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Competitive Analysis</CardTitle>
            <CardDescription>Track your position against competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-8 w-8 text-muted mx-auto" />
                  <p className="mt-2 text-muted-foreground">Competitive positioning chart</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {[
                  { name: "CompetitorA", strengths: "Strong analytics, Established market presence", weaknesses: "Expensive, Complex interface" },
                  { name: "CompetitorB", strengths: "Low cost, Simple tools", weaknesses: "Limited features, No AI capabilities" },
                  { name: "CompetitorC", strengths: "Good content tools, Social media focus", weaknesses: "Limited brand strategy tools, Poor analytics" }
                ].map((competitor, i) => (
                  <div key={i} className="border rounded-md p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{competitor.name}</h3>
                      <Button variant="ghost" size="sm">
                        <PenTool className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium text-green-500 block">Strengths:</span>
                        <span className="text-muted-foreground">{competitor.strengths}</span>
                      </div>
                      <div>
                        <span className="font-medium text-red-500 block">Weaknesses:</span>
                        <span className="text-muted-foreground">{competitor.weaknesses}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Add Competitor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Strategic Action Plan</CardTitle>
          <CardDescription>Tangible steps to implement your brand strategy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                title: "Market Positioning Initiative",
                description: "Establish our brand as the thought leader in AI-powered brand management",
                actions: [
                  { text: "Publish white paper on AI in brand management", status: "completed" },
                  { text: "Launch webinar series for marketing professionals", status: "in-progress" },
                  { text: "Develop case studies with industry leaders", status: "planned" }
                ],
                owner: "Marketing Team",
                deadline: "Q2 2025"
              },
              {
                title: "Customer Segment Expansion",
                description: "Grow presence in mid-market business segment",
                actions: [
                  { text: "Develop targeted feature set for mid-market needs", status: "completed" },
                  { text: "Create specific marketing materials for segment", status: "in-progress" },
                  { text: "Establish partnership program with industry associations", status: "planned" }
                ],
                owner: "Product & Sales Teams",
                deadline: "Q3 2025"
              },
              {
                title: "Competitive Differentiation",
                description: "Strengthen unique value proposition in the marketplace",
                actions: [
                  { text: "Enhance AI capabilities with new predictive features", status: "in-progress" },
                  { text: "Streamline UI/UX for improved usability", status: "in-progress" },
                  { text: "Develop integration ecosystem with popular marketing tools", status: "planned" }
                ],
                owner: "Product Development",
                deadline: "Q4 2025"
              }
            ].map((initiative, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{initiative.title}</h3>
                    <p className="text-muted-foreground">{initiative.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <PenTool className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-2 mb-3">
                  {initiative.actions.map((action, j) => {
                    let statusColor = "bg-gray-200";
                    let statusText = "Planned";
                    
                    if (action.status === "completed") {
                      statusColor = "bg-green-100 text-green-700";
                      statusText = "Completed";
                    } else if (action.status === "in-progress") {
                      statusColor = "bg-blue-100 text-blue-700";
                      statusText = "In Progress";
                    }
                    
                    return (
                      <div key={j} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CheckCircle 
                            className={`h-4 w-4 mr-2 ${action.status === 'completed' ? 'text-green-500' : 'text-muted'}`}
                            fill={action.status === 'completed' ? 'currentColor' : 'none'}
                          />
                          <span className={action.status === 'completed' ? 'line-through text-muted-foreground' : ''}>
                            {action.text}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                          {statusText}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Owner: {initiative.owner}</span>
                  <span>Target: {initiative.deadline}</span>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center">
              <Button>
                <Target className="mr-2 h-4 w-4" />
                Add New Strategic Initiative
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}