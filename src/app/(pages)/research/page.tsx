import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, BarChart, PieChart, LineChart, PenTool, Plus, Download } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Market Research</h1>
          <p className="text-muted-foreground">Analyze market trends and consumer insights to inform your brand strategy.</p>
        </div>
        <div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Research Project
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Research Projects</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 active, 5 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Survey Responses</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,482</div>
            <p className="text-xs text-muted-foreground">+24% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Size</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8.4B</div>
            <p className="text-xs text-muted-foreground">+12.5% YoY growth</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Audience</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Key segments identified</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Market Trends</CardTitle>
            <CardDescription>Key trends affecting your brand's market position</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] border rounded-md p-4 flex items-center justify-center mb-4">
              <div className="text-center">
                <LineChart className="h-8 w-8 text-muted mx-auto" />
                <p className="mt-2 text-muted-foreground">Market trends visualization</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Digital Transformation", growth: "High", impact: "High", relevance: "Direct" },
                { name: "Sustainability Focus", growth: "Medium", impact: "Medium", relevance: "Indirect" },
                { name: "AI Integration", growth: "Very High", impact: "High", relevance: "Direct" },
                { name: "Remote Workforce", growth: "Medium", impact: "Medium", relevance: "Indirect" },
              ].map((trend, i) => (
                <div key={i} className="flex justify-between items-center p-3 border rounded-md">
                  <div>
                    <div className="font-medium">{trend.name}</div>
                    <div className="text-sm text-muted-foreground">Relevance: {trend.relevance}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm">Growth: <span className="font-medium">{trend.growth}</span></div>
                    <div className="text-sm">Impact: <span className="font-medium">{trend.impact}</span></div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                View Full Trend Analysis
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Audience Insights</CardTitle>
            <CardDescription>Understanding your target market segments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] border rounded-md p-4 flex items-center justify-center mb-4">
              <div className="text-center">
                <PieChart className="h-8 w-8 text-muted mx-auto" />
                <p className="mt-2 text-muted-foreground">Audience segments visualization</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { segment: "Small Business Owners", percentage: 35, characteristics: "Growth-focused, budget-conscious" },
                { segment: "Marketing Directors", percentage: 28, characteristics: "Results-driven, tech-savvy" },
                { segment: "Brand Managers", percentage: 22, characteristics: "Detail-oriented, quality-focused" },
                { segment: "Startup Founders", percentage: 15, characteristics: "Innovative, agile decision-makers" },
              ].map((audience, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{audience.segment}</span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {audience.percentage}%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{audience.characteristics}</p>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${audience.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                View Detailed Audience Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Research Projects</CardTitle>
          <CardDescription>Completed and ongoing market research initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Competitor Analysis 2025",
                description: "Comprehensive analysis of key competitors, their strengths, weaknesses, and market positioning",
                status: "Completed",
                date: "Mar 15, 2025",
                insights: ["4 primary competitors identified", "Gap in mid-market service offerings", "Opportunity in AI-powered solutions"]
              },
              {
                title: "Customer Satisfaction Survey",
                description: "Quarterly survey to measure customer satisfaction, needs, and pain points",
                status: "Ongoing",
                date: "Apr 10, 2025",
                insights: ["368 responses to date", "87% satisfaction rate", "Feature requests trending toward analytics"]
              },
              {
                title: "Market Size & Growth Analysis",
                description: "Assessment of total addressable market, growth trends, and future projections",
                status: "Completed",
                date: "Feb 28, 2025",
                insights: ["$8.4B current market size", "12.5% YoY growth projected", "Emerging markets showing 28% growth"]
              },
              {
                title: "Brand Perception Study",
                description: "Research on brand awareness, perception, and positioning compared to competitors",
                status: "In Progress",
                date: "May 5, 2025 (est.)",
                insights: ["Focus groups in progress", "Initial sentiment analysis positive", "Awareness metrics being measured"]
              },
            ].map((project, i) => {
              const statusColor = 
                project.status === "Completed" ? "bg-green-100 text-green-700" : 
                project.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                "bg-amber-100 text-amber-700";
              
              return (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                        {project.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Key Insights:</h4>
                    <ul className="space-y-1">
                      {project.insights.map((insight, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <PenTool className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  </div>
                </div>
              );
            })}
            
            <div className="flex justify-center">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create New Research Project
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}