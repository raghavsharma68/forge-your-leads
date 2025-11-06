import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  CheckSquare, 
  Mail, 
  Megaphone, 
  BarChart3, 
  Link2,
  ArrowRight,
  Building2
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    title: "Contact & Lead Management",
    description: "Organize and track all your contacts and leads in one centralized system",
    icon: Users,
  },
  {
    title: "Sales Pipeline",
    description: "Visualize and manage your sales opportunities from start to close",
    icon: TrendingUp,
  },
  {
    title: "Task Management",
    description: "Never miss a follow-up with comprehensive task and activity tracking",
    icon: CheckSquare,
  },
  {
    title: "Email Integration",
    description: "Seamlessly connect with Gmail and Outlook for unified communications",
    icon: Mail,
  },
  {
    title: "Marketing Automation",
    description: "Create and automate marketing campaigns to nurture your leads",
    icon: Megaphone,
  },
  {
    title: "Analytics & Reports",
    description: "Gain insights with powerful reporting and customizable dashboards",
    icon: BarChart3,
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Lead Forge
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button variant="outline" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
              <Button variant="hero" onClick={() => navigate("/auth")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Sales with{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Lead Forge
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The all-in-one CRM platform that helps you manage contacts, close deals faster, 
                and grow your business with powerful automation and insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="hero" onClick={() => navigate("/auth")}>
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")}>
                  View Dashboard
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground">
                <div>
                  <p className="text-2xl font-bold text-foreground">10k+</p>
                  <p>Active Users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">$2M+</p>
                  <p>Revenue Managed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Lead Forge CRM Dashboard" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your sales process and boost productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-all duration-300 border-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Connect With Your Favorite Tools</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Seamlessly integrate with the tools you already use
            </p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Gmail</p>
                </div>
                <div className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Outlook</p>
                </div>
                <div className="text-center">
                  <Link2 className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p className="font-medium">WhatsApp</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Analytics</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Sales?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using Lead Forge to grow
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate("/auth")}>
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => navigate("/dashboard")}
            >
              View Features
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Lead Forge</span>
            </div>
            <p className="text-muted-foreground">
              © 2025 Lead Forge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
