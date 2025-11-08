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
  Building2,
  Zap,
  Target,
  Database,
  Sparkles
} from "lucide-react";
import heroImage from "@/assets/crm-dashboard-hero.jpg";
import leadScrapingImg from "@/assets/lead-scraping-infographic.jpg";
import salesAutomationImg from "@/assets/sales-automation-infographic.jpg";

const features = [
  {
    title: "Automated Lead Scraping",
    description: "Extract quality leads from multiple sources automatically and build your prospect database effortlessly",
    icon: Database,
    benefit: "Save 10+ hours weekly on manual research"
  },
  {
    title: "Smart CRM Management",
    description: "Centralized system to organize contacts, track interactions, and manage your entire sales pipeline",
    icon: Users,
    benefit: "Increase conversion rates by 40%"
  },
  {
    title: "Sales Force Automation",
    description: "Automate repetitive tasks, follow-ups, and workflows to focus on closing deals",
    icon: Zap,
    benefit: "Close deals 3x faster"
  },
  {
    title: "Intelligent Lead Scoring",
    description: "AI-powered lead qualification to prioritize high-value prospects and maximize ROI",
    icon: Target,
    benefit: "Identify best prospects instantly"
  },
  {
    title: "Multi-Channel Outreach",
    description: "Connect via email, WhatsApp, and SMS with integrated communication tools",
    icon: Mail,
    benefit: "Reach leads on their preferred channels"
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance, conversion rates, and revenue with comprehensive dashboards",
    icon: BarChart3,
    benefit: "Make data-driven decisions"
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
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <p className="text-sm font-semibold text-primary flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Built for Wadhwani Entrepreneurship Program
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Automate Lead Generation & Close More Deals with{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Lead Forge
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The intelligent lead scraping and CRM platform that helps entrepreneurs discover prospects, 
                automate outreach, and grow revenue faster. Purpose-built for ambitious businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="hero" onClick={() => navigate("/demo")}>
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/pricing")}>
                  View Pricing
                </Button>
                <Button size="lg" variant="secondary" onClick={() => navigate("/contact")}>
                  Contact Us
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-foreground">5000+</p>
                  <p className="text-sm text-muted-foreground">Leads Generated Daily</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">3x</p>
                  <p className="text-sm text-muted-foreground">Faster Deal Closure</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">40%</p>
                  <p className="text-sm text-muted-foreground">Higher Conversion</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Lead Forge CRM Dashboard showing lead management and analytics" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Lead Forge?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built specifically for entrepreneurs in the Wadhwani Entrepreneurship program, 
                Lead Forge combines powerful lead scraping with intelligent CRM to accelerate your growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-4">Automated Lead Scraping</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Stop wasting hours on manual research. Our intelligent scraping engine discovers 
                  quality leads from multiple sources automatically, building your prospect database 
                  while you focus on closing deals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Extract leads from LinkedIn, directories, and industry databases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Verify contact information automatically with 95% accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Enrich profiles with company data, social media, and more</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src={leadScrapingImg} 
                  alt="Automated lead scraping workflow showing data flowing into CRM system" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src={salesAutomationImg} 
                  alt="Sales force automation process from lead capture to conversion" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Intelligent Sales Force Automation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Transform your sales process with AI-powered automation. From lead scoring to 
                  follow-up sequences, our platform handles the repetitive work so your team can 
                  focus on building relationships and closing deals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Automated email sequences and multi-channel outreach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Smart lead scoring to prioritize high-value prospects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span>Real-time analytics and performance tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features & Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to generate leads, manage relationships, and grow revenue
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                      <p className="text-xs font-semibold text-primary">{feature.benefit}</p>
                    </div>
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to 10x Your Lead Generation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs already using Lead Forge to discover quality leads 
            and close deals faster
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => navigate("/demo")}>
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => navigate("/pricing")}
            >
              View Pricing
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => navigate("/contact")}
            >
              Contact Sales
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
