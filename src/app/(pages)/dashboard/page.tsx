"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart, 
          BarChart, 
          PieChart, 
          BellRing, 
          Layers, 
          Activity, 
          Lightbulb, 
          ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <BellRing className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Brand Health</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82%</div>
                <p className="text-xs text-muted-foreground">+4% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Content Engagement</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14.3k</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Market Position</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Top 15%</div>
                <p className="text-xs text-muted-foreground">+2% from last quarter</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">4 due soon</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="lg:col-span-5">
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>Your brand's performance across channels for the past 30 days</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center border-t">
                <div className="w-full h-full bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">Performance Chart</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your brand dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Layers className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Content published</p>
                    <p className="text-sm text-muted-foreground">New blog post "Brand Strategy 101" published</p>
                    <p className="text-xs text-muted-foreground">Today at 2:34 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Performance milestone</p>
                    <p className="text-sm text-muted-foreground">Social engagement reached 10k this month</p>
                    <p className="text-xs text-muted-foreground">Yesterday at 9:12 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Lightbulb className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">AI Insight</p>
                    <p className="text-sm text-muted-foreground">New content opportunity discovered</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" size="sm">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>Frequently used brand tools</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Button variant="outline" className="justify-between">
                  <span>Brand Guidelines</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-between">
                  <span>Content Calendar</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-between">
                  <span>Asset Library</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-between">
                  <span>Analytics Dashboard</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>AI-powered suggestions for your brand</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border rounded-lg p-3">
                  <div className="font-medium mb-1">Update your social strategy</div>
                  <p className="text-sm text-muted-foreground">Recent algorithm changes suggest adjusting your posting schedule</p>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="font-medium mb-1">Content opportunity</div>
                  <p className="text-sm text-muted-foreground">Industry trend detected: create content about sustainable practices</p>
                </div>
                <div className="border rounded-lg p-3">
                  <div className="font-medium mb-1">Competitor insight</div>
                  <p className="text-sm text-muted-foreground">New campaign launched by competitor in your market</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Priority Tasks</CardTitle>
                <CardDescription>Based on your brand goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center p-2 border-b">
                    <div className="flex items-center gap-2 flex-1">
                      <input type="checkbox" id="task1" className="rounded" />
                      <label htmlFor="task1" className="text-sm font-medium">Update Q2 content calendar</label>
                    </div>
                    <div className="text-xs text-muted-foreground">High</div>
                  </div>
                  <div className="flex items-center p-2 border-b">
                    <div className="flex items-center gap-2 flex-1">
                      <input type="checkbox" id="task2" className="rounded" />
                      <label htmlFor="task2" className="text-sm font-medium">Review new brand assets</label>
                    </div>
                    <div className="text-xs text-muted-foreground">Medium</div>
                  </div>
                  <div className="flex items-center p-2 border-b">
                    <div className="flex items-center gap-2 flex-1">
                      <input type="checkbox" id="task3" className="rounded" />
                      <label htmlFor="task3" className="text-sm font-medium">Schedule social media posts</label>
                    </div>
                    <div className="text-xs text-muted-foreground">High</div>
                  </div>
                  <div className="flex items-center p-2 border-b">
                    <div className="flex items-center gap-2 flex-1">
                      <input type="checkbox" id="task4" className="rounded" />
                      <label htmlFor="task4" className="text-sm font-medium">Analyze last campaign results</label>
                    </div>
                    <div className="text-xs text-muted-foreground">Medium</div>
                  </div>
                  <Button variant="outline" className="w-full mt-2" size="sm">
                    View All Tasks
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="h-[600px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <LineChart className="h-10 w-10 text-muted mx-auto" />
            <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
            <p className="text-muted-foreground">Detailed performance metrics and insights</p>
          </div>
        </TabsContent>
        
        <TabsContent value="insights" className="h-[600px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Lightbulb className="h-10 w-10 text-muted mx-auto" />
            <h3 className="mt-4 text-lg font-medium">Brand Insights</h3>
            <p className="text-muted-foreground">AI-powered recommendations and opportunity detection</p>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="h-[600px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Activity className="h-10 w-10 text-muted mx-auto" />
            <h3 className="mt-4 text-lg font-medium">Task Management</h3>
            <p className="text-muted-foreground">Organize and track your brand tasks and projects</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}