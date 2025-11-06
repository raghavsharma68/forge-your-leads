import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  CheckSquare, 
  Mail, 
  Megaphone, 
  BarChart3, 
  Link2 
} from "lucide-react";
import Navbar from "@/components/Navbar";

const features = [
  {
    title: "Contact & Lead Management",
    description: "Manage all your contacts and leads in one centralized location",
    icon: Users,
    route: "/contacts",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Sales Pipeline",
    description: "Track opportunities through your sales pipeline",
    icon: TrendingUp,
    route: "/pipeline",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Task & Activity Tracking",
    description: "Never miss a follow-up with comprehensive task management",
    icon: CheckSquare,
    route: "/tasks",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Email Integration",
    description: "Seamlessly integrate with Gmail and Outlook",
    icon: Mail,
    route: "/email",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Marketing Automation",
    description: "Automate your marketing campaigns and workflows",
    icon: Megaphone,
    route: "/marketing",
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "Reporting & Dashboards",
    description: "Get insights with powerful analytics and reports",
    icon: BarChart3,
    route: "/reports",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools and services",
    icon: Link2,
    route: "/integrations",
    color: "from-teal-500 to-teal-600",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-xl text-muted-foreground">Choose a feature to get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(feature.route)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Open →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
