import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Calendar, MessageSquare, Heart, LineChart, BarChart, PenTool, Plus, Clock, Upload } from "lucide-react";

export default function SocialPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Social Media Management</h1>
          <p className="text-muted-foreground">Manage and optimize your social media presence across platforms.</p>
        </div>
        <div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,521</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7%</div>
            <p className="text-xs text-muted-foreground">+0.8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Posts This Month</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">5 scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Click-through Rate</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>Engagement across your social media platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] border rounded-md p-4 flex items-center justify-center mb-4">
              <div className="text-center">
                <LineChart className="h-8 w-8 text-muted mx-auto" />
                <p className="mt-2 text-muted-foreground">Platform performance chart</p>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { platform: "Instagram", followers: "12.4K", growth: "+2.3%", engagement: "4.8%" },
                { platform: "Twitter", followers: "8.7K", growth: "+1.5%", engagement: "3.2%" },
                { platform: "LinkedIn", followers: "3.2K", growth: "+5.7%", engagement: "6.1%" },
                { platform: "Facebook", followers: "6.8K", growth: "+0.8%", engagement: "2.5%" },
              ].map((platform, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-sm font-medium">{platform.platform}</div>
                  <div className="text-2xl font-bold">{platform.followers}</div>
                  <div className="text-xs text-green-500">{platform.growth}</div>
                  <div className="text-xs text-muted-foreground">{platform.engagement} eng.</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Posts</CardTitle>
            <CardDescription>Scheduled content for the next week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Product Feature Spotlight", platform: "Instagram", date: "Today, 3:00 PM", status: "Ready" },
                { title: "Industry News Update", platform: "Twitter", date: "Tomorrow, 9:00 AM", status: "Ready" },
                { title: "Customer Success Story", platform: "LinkedIn", date: "Apr 15, 2:00 PM", status: "Draft" },
                { title: "Weekly Tips & Tricks", platform: "Facebook", date: "Apr 16, 10:00 AM", status: "Draft" },
              ].map((post, i) => {
                const statusColor = post.status === "Ready" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700";
                
                return (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                    <div>
                      <div className="font-medium">{post.title}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{post.platform}</span>
                        <span className="mx-2">•</span>
                        <Clock className="mr-1 h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColor} mr-2`}>
                        {post.status}
                      </span>
                      <Button variant="ghost" size="sm">
                        <PenTool className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                View Content Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest posts and engagement across platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "New Product Announcement",
                content: "We're excited to announce our latest feature: AI-powered content recommendations! Check it out today.",
                platform: "LinkedIn",
                posted: "2 days ago",
                engagement: { likes: 124, comments: 32, shares: 18 }
              },
              {
                title: "Behind the Scenes",
                content: "Take a look at our team working on the next big update! #BrandiumTeam #Innovation",
                platform: "Instagram",
                posted: "3 days ago",
                engagement: { likes: 287, comments: 45, shares: 12 }
              },
              {
                title: "Industry Insights",
                content: "Our latest market research shows that 78% of brands are increasing their content marketing budgets in 2025. What's your plan?",
                platform: "Twitter",
                posted: "5 days ago",
                engagement: { likes: 93, comments: 26, shares: 31 }
              },
            ].map((post, i) => {
              let platformColor;
              
              switch(post.platform) {
                case 'LinkedIn':
                  platformColor = "text-blue-600";
                  break;
                case 'Instagram':
                  platformColor = "text-pink-600";
                  break;
                case 'Twitter':
                  platformColor = "text-blue-400";
                  break;
                case 'Facebook':
                  platformColor = "text-blue-800";
                  break;
                default:
                  platformColor = "text-muted-foreground";
              }
              
              return (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{post.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className={`text-sm font-medium ${platformColor}`}>{post.platform}</span>
                        <span className="mx-2 text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.posted}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{post.content}</p>
                  
                  <div className="flex space-x-4 text-sm">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1 text-red-500" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{post.engagement.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <Share2 className="h-4 w-4 mr-1 text-green-500" />
                      <span>{post.engagement.shares}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="flex justify-center">
              <Button>
                <Upload className="mr-2 h-4 w-4" />
                Create New Post
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}