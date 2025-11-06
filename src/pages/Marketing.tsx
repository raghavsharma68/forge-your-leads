import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Pause, Edit } from "lucide-react";

const mockCampaigns = [
  { id: 1, name: "Summer Product Launch", status: "Active", contacts: 1250, opens: 840, clicks: 320, type: "Email" },
  { id: 2, name: "Q4 Newsletter", status: "Scheduled", contacts: 2100, opens: 0, clicks: 0, type: "Email" },
  { id: 3, name: "Lead Nurture Series", status: "Active", contacts: 890, opens: 645, clicks: 234, type: "Drip" },
  { id: 4, name: "Webinar Promotion", status: "Paused", contacts: 1500, opens: 1050, clicks: 420, type: "Email" },
];

const Marketing = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Scheduled": return "bg-blue-500";
      case "Paused": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Marketing Automation</h1>
            <p className="text-muted-foreground">Create and manage automated marketing campaigns</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">4</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-500">2</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5,740</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Avg Open Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">64.5%</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCampaigns.map((campaign) => (
                <div 
                  key={campaign.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium">{campaign.name}</h4>
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                      <Badge variant="outline">{campaign.type}</Badge>
                    </div>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                      <span>{campaign.contacts} contacts</span>
                      <span>{campaign.opens} opens</span>
                      <span>{campaign.clicks} clicks</span>
                      {campaign.opens > 0 && (
                        <span className="text-primary font-medium">
                          {((campaign.opens / campaign.contacts) * 100).toFixed(1)}% open rate
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {campaign.status === "Active" && (
                      <Button variant="outline" size="sm">
                        <Pause className="h-4 w-4" />
                      </Button>
                    )}
                    {campaign.status === "Paused" && (
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Email Campaigns</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Drip Campaigns</span>
                  <Badge variant="secondary">1</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>SMS Campaigns</span>
                  <Badge variant="secondary">0</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emails Sent Today</span>
                  <span className="font-semibold">245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emails Opened</span>
                  <span className="font-semibold">158</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Links Clicked</span>
                  <span className="font-semibold">67</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Marketing;
