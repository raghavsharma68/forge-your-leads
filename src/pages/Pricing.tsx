import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Building2, Zap, Rocket, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "₹4,999",
      period: "/month",
      description: "Perfect for entrepreneurs and small teams getting started",
      features: [
        "500 leads scraping per month",
        "Basic CRM with up to 1,000 contacts",
        "Email integration (1 account)",
        "Basic sales pipeline",
        "Email support",
        "2 team members",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      icon: Rocket,
      price: "₹12,999",
      period: "/month",
      description: "Ideal for growing businesses scaling their sales operations",
      features: [
        "2,500 leads scraping per month",
        "Advanced CRM with unlimited contacts",
        "Email integration (unlimited accounts)",
        "Advanced sales pipeline with automation",
        "Marketing automation",
        "WhatsApp & SMS integration",
        "Priority email & chat support",
        "10 team members",
        "Custom reports & analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited lead scraping",
        "Enterprise CRM with custom fields",
        "All integrations included",
        "Advanced automation workflows",
        "Dedicated account manager",
        "24/7 phone & email support",
        "Unlimited team members",
        "Custom integrations & API access",
        "Advanced security & compliance",
        "SLA guarantee",
        "Custom training sessions",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
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
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Special Offer Banner */}
          <Card className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="py-6 text-center">
              <p className="text-lg font-semibold mb-2">
                🎓 Wadhwani Entrepreneurship Program Special Offer
              </p>
              <p className="text-muted-foreground">
                Get 30% off on all annual plans for the first year. Discount applied automatically for verified participants.
              </p>
            </CardContent>
          </Card>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative ${
                    plan.popular
                      ? "border-2 border-primary shadow-xl scale-105"
                      : "border-2"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <Button
                      className="w-full"
                      size="lg"
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => {
                        if (plan.name === "Enterprise") {
                          navigate("/contact");
                        } else {
                          navigate("/auth");
                        }
                      }}
                    >
                      {plan.cta}
                    </Button>

                    <div className="space-y-3 pt-4">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All plans come with a 14-day free trial with full access to all features. 
                    No credit card required to start.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can I change plans later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect 
                    immediately and we'll prorate the charges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We accept all major credit cards, debit cards, UPI, and bank transfers for 
                    annual subscriptions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer custom enterprise solutions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes! Our Enterprise plan is fully customizable. Contact our sales team to 
                    discuss your specific requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-secondary text-white border-0">
              <CardContent className="py-12">
                <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Our team is here to help you find the perfect plan for your business
                </p>
                <div className="flex gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Sales
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    onClick={() => navigate("/demo")}
                  >
                    Request Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
