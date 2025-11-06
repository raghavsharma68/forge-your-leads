import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, DollarSign, FileText, CreditCard, Database } from "lucide-react";

const integrations = [
  {
    name: "Gmail",
    description: "Sync emails and contacts with Gmail",
    icon: Mail,
    category: "Email",
    status: "connected",
    color: "from-red-500 to-red-600",
  },
  {
    name: "Outlook",
    description: "Connect with Microsoft Outlook",
    icon: Mail,
    category: "Email",
    status: "available",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "WhatsApp Business",
    description: "Send messages via WhatsApp",
    icon: MessageSquare,
    category: "Communication",
    status: "available",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Twilio SMS",
    description: "Send SMS messages to leads",
    icon: MessageSquare,
    category: "Communication",
    status: "available",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Stripe",
    description: "Process payments and subscriptions",
    icon: CreditCard,
    category: "Payment",
    status: "connected",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    name: "PayPal",
    description: "Accept PayPal payments",
    icon: DollarSign,
    category: "Payment",
    status: "available",
    color: "from-blue-400 to-blue-500",
  },
  {
    name: "QuickBooks",
    description: "Sync with QuickBooks accounting",
    icon: FileText,
    category: "Accounting",
    status: "available",
    color: "from-green-400 to-green-500",
  },
  {
    name: "Xero",
    description: "Connect with Xero accounting",
    icon: FileText,
    category: "Accounting",
    status: "available",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "SAP ERP",
    description: "Integrate with SAP systems",
    icon: Database,
    category: "ERP",
    status: "available",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Oracle ERP",
    description: "Connect with Oracle systems",
    icon: Database,
    category: "ERP",
    status: "available",
    color: "from-red-600 to-red-700",
  },
];

const Integrations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Integrations</h1>
          <p className="text-muted-foreground">Connect Lead Forge with your favorite tools and services</p>
        </div>

        <div className="mb-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold">10</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold text-green-500">2</p>
              <p className="text-sm text-muted-foreground">Connected</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Email</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Payment</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">ERP</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <Card key={integration.name} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge 
                      variant={integration.status === "connected" ? "default" : "secondary"}
                      className={integration.status === "connected" ? "bg-green-500" : ""}
                    >
                      {integration.status === "connected" ? "Connected" : "Available"}
                    </Badge>
                  </div>
                  <CardTitle>{integration.name}</CardTitle>
                  <CardDescription>{integration.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{integration.category}</Badge>
                    <Button 
                      variant={integration.status === "connected" ? "outline" : "default"}
                      size="sm"
                    >
                      {integration.status === "connected" ? "Configure" : "Connect"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Need a Custom Integration?</CardTitle>
            <CardDescription>
              Can't find the integration you're looking for? Let us know and we'll work on adding it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Request Integration</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Integrations;
