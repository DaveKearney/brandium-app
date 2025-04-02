import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Upload, Download, Briefcase, PenTool, Palette } from "lucide-react";


export default async function BrandPage() {

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Brand Management</h1>
        <p className="text-muted-foreground">
          Define and manage your brand identity, guidelines, and assets.
        </p>
      </div>

      <Tabs defaultValue="identity">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="identity">Brand Identity</TabsTrigger>
          <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          <TabsTrigger value="assets">Brand Assets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="identity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Positioning</CardTitle>
              <CardDescription>Define how your brand is positioned in the market</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Mission Statement</h3>
                <p className="text-muted-foreground">To empower businesses with powerful brand management tools and insights that drive growth and customer engagement.</p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="mt-2">
                    <PenTool className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Vision Statement</h3>
                <p className="text-muted-foreground">To become the leading platform for brand development and management, helping every business create a powerful and consistent brand presence.</p>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="mt-2">
                    <PenTool className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="guidelines" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Guidelines</CardTitle>
              <CardDescription>Your brand's visual and verbal guidelines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Color Palette</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-20 rounded-md bg-primary"></div>
                  <div className="h-20 rounded-md bg-secondary"></div>
                  <div className="h-20 rounded-md bg-accent"></div>
                  <div className="h-20 rounded-md bg-muted"></div>
                </div>
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Palette className="mr-2 h-4 w-4" />
                    Edit Colors
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Assets</CardTitle>
              <CardDescription>Upload and manage your brand assets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Button variant="outline" className="h-32">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Asset
                </Button>
                <Button variant="outline" className="h-32">
                  <Download className="mr-2 h-4 w-4" />
                  Download All Assets
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}