import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Inbox, Send, Archive, Star, Clock } from "lucide-react";

const mockEmails = [
  { id: 1, from: "john@example.com", subject: "Meeting Follow-up", preview: "Thanks for the great meeting...", time: "10:30 AM", unread: true, starred: false },
  { id: 2, from: "sarah@example.com", subject: "Project Proposal", preview: "I've attached the proposal...", time: "Yesterday", unread: true, starred: true },
  { id: 3, from: "mike@example.com", subject: "Re: Contract Review", preview: "The contract looks good...", time: "2 days ago", unread: false, starred: false },
  { id: 4, from: "emily@example.com", subject: "New Lead Inquiry", preview: "We're interested in your services...", time: "3 days ago", unread: false, starred: true },
];

const Email = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Email Integration</h1>
          <p className="text-muted-foreground">Manage your emails directly from Lead Forge</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <Button variant="default" className="w-full justify-start">
              <Mail className="h-4 w-4 mr-2" />
              Compose
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Inbox className="h-4 w-4 mr-2" />
              Inbox
              <Badge className="ml-auto" variant="secondary">4</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Star className="h-4 w-4 mr-2" />
              Starred
              <Badge className="ml-auto" variant="secondary">2</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Send className="h-4 w-4 mr-2" />
              Sent
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Archive className="h-4 w-4 mr-2" />
              Archive
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Scheduled
            </Button>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Inbox</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Gmail</Button>
                    <Button variant="outline" size="sm">Outlook</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockEmails.map((email) => (
                    <div 
                      key={email.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                        email.unread ? "bg-muted/30" : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {email.starred && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mt-1" />}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <div className="flex items-center gap-2">
                              <p className={`font-medium ${email.unread ? "font-semibold" : ""}`}>
                                {email.from}
                              </p>
                              {email.unread && (
                                <Badge variant="secondary" className="text-xs">New</Badge>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">{email.time}</span>
                          </div>
                          <p className={`text-sm mb-1 ${email.unread ? "font-medium" : ""}`}>
                            {email.subject}
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            {email.preview}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Connected Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Gmail</span>
                      <Badge className="bg-green-500">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Outlook</span>
                      <Badge variant="secondary">Not Connected</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Email Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sent Today</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Open Rate</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Response Rate</span>
                    <span className="font-semibold">45%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Email;
