import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign } from "lucide-react";

const pipelineStages = [
  {
    name: "Prospecting",
    color: "bg-blue-500",
    deals: [
      { id: 1, name: "Tech Corp Deal", value: "$50,000", company: "Tech Corp" },
      { id: 2, name: "Design Studio Project", value: "$30,000", company: "Design Studio" },
    ],
  },
  {
    name: "Qualification",
    color: "bg-purple-500",
    deals: [
      { id: 3, name: "Marketing Inc Campaign", value: "$75,000", company: "Marketing Inc" },
    ],
  },
  {
    name: "Proposal",
    color: "bg-orange-500",
    deals: [
      { id: 4, name: "Sales Pro Integration", value: "$100,000", company: "Sales Pro" },
      { id: 5, name: "Finance Ltd System", value: "$150,000", company: "Finance Ltd" },
    ],
  },
  {
    name: "Negotiation",
    color: "bg-yellow-500",
    deals: [
      { id: 6, name: "Enterprise Deal", value: "$200,000", company: "Enterprise Co" },
    ],
  },
  {
    name: "Closed Won",
    color: "bg-green-500",
    deals: [
      { id: 7, name: "Recent Win", value: "$90,000", company: "Success Corp" },
    ],
  },
];

const Pipeline = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Sales Pipeline</h1>
          <p className="text-muted-foreground">Track your opportunities through the sales process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {pipelineStages.map((stage) => (
            <div key={stage.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{stage.name}</h3>
                <Badge variant="secondary">{stage.deals.length}</Badge>
              </div>
              <div className="space-y-3">
                {stage.deals.map((deal) => (
                  <Card key={deal.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium">{deal.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <p className="text-xs text-muted-foreground mb-2">{deal.company}</p>
                      <div className="flex items-center gap-1 text-primary font-semibold">
                        <DollarSign className="h-4 w-4" />
                        <span>{deal.value}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Pipeline Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$695,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">7</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Average Deal Size</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$99,286</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Win Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-500">14.3%</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Pipeline;
