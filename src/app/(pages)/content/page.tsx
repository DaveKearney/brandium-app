import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, Calendar, FileText, Image, MessageSquare, PenTool, Plus, FileCheck, Clock } from "lucide-react";

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">Create, manage, and optimize your brand content across channels.</p>
        </div>
        <div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Content
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Content</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 need review</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Next on April 15</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Suggestions</CardTitle>
            <Layers className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Based on your strategy</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Content</CardTitle>
          <CardDescription>Recently created or updated content items</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "2025 Brand Guidelines Update",
                description: "Updated brand voice and visual guidelines for Q2 campaigns",
                type: "Document",
                status: "Draft",
                modified: "2h ago"
              },
              {
                title: "Product Launch Announcement",
                description: "Press release for the new feature launch",
                type: "Article",
                status: "Published",
                modified: "1d ago"
              },
              {
                title: "Q1 Market Report Infographic",
                description: "Visual representation of Q1 market analysis",
                type: "Image",
                status: "Published",
                modified: "2d ago"
              },
              {
                title: "Customer Success Story: XYZ Corp",
                description: "Case study highlighting success with our platform",
                type: "Article",
                status: "Review",
                modified: "3d ago"
              },
              {
                title: "Social Media Campaign Plan",
                description: "Strategy and content plan for Q2 social campaigns",
                type: "Document",
                status: "Draft",
                modified: "5d ago"
              }
            ].map((content, i) => {
              let icon;
              let statusColor;
              
              // Set icon based on content type
              switch(content.type) {
                case 'Document':
                  icon = <FileText className="h-5 w-5 text-blue-500" />;
                  break;
                case 'Image':
                  icon = <Image className="h-5 w-5 text-green-500" />;
                  break;
                case 'Article':
                  icon = <MessageSquare className="h-5 w-5 text-purple-500" />;
                  break;
                default:
                  icon = <FileText className="h-5 w-5 text-blue-500" />;
              }
              
              // Set status color
              switch(content.status) {
                case 'Published':
                  statusColor = "bg-green-100 text-green-700";
                  break;
                case 'Draft':
                  statusColor = "bg-gray-100 text-gray-700";
                  break;
                case 'Review':
                  statusColor = "bg-yellow-100 text-yellow-700";
                  break;
                default:
                  statusColor = "bg-gray-100 text-gray-700";
              }
              
              return (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="mt-0.5">
                        {icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{content.title}</h3>
                        <p className="text-sm text-muted-foreground">{content.description}</p>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                            {content.status}
                          </span>
                          <span className="text-xs flex items-center text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {content.modified}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <PenTool className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Content Calendar</CardTitle>
            <CardDescription>Upcoming scheduled content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Product Feature Spotlight", date: "Apr 15, 2025", platform: "Blog & Social", status: "Ready" },
                { title: "Monthly Newsletter", date: "Apr 30, 2025", platform: "Email", status: "In Progress" },
                { title: "Customer Webinar", date: "May 5, 2025", platform: "Website & Email", status: "Planning" },
                { title: "Industry Report", date: "May 15, 2025", platform: "Blog & PR", status: "Not Started" },
              ].map((item, i) => {
                const today = new Date();
                const itemDate = new Date(item.date);
                const daysUntil = Math.ceil((itemDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                
                let statusColor;
                switch(item.status) {
                  case 'Ready':
                    statusColor = "bg-green-100 text-green-700";
                    break;
                  case 'In Progress':
                    statusColor = "bg-blue-100 text-blue-700";
                    break;
                  case 'Planning':
                    statusColor = "bg-yellow-100 text-yellow-700";
                    break;
                  default:
                    statusColor = "bg-gray-100 text-gray-700";
                }
                
                return (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.date}
                        <span className="mx-2">•</span>
                        {item.platform}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColor}`}>
                        {item.status}
                      </span>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {daysUntil > 0 ? `In ${daysUntil} days` : "Today"}
                      </span>
                    </div>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                View Full Calendar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>See how your content is performing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[240px] border rounded-md p-4 flex items-center justify-center">
              <div className="text-center">
                <Layers className="h-8 w-8 text-muted mx-auto" />
                <p className="mt-2 text-muted-foreground">Content performance chart</p>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-medium">Top Performing Content</h3>
              <div className="space-y-2">
                {[
                  { title: "10 Brand Strategy Tips", views: 4287, engagement: "High" },
                  { title: "Brand Case Study: Success Story", views: 3125, engagement: "Medium" },
                  { title: "How to Create a Brand Voice", views: 2847, engagement: "High" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 border-b">
                    <div className="text-sm">{item.title}</div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm">{item.views} views</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.engagement === 'High' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {item.engagement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full text-sm mt-2">
                View All Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}