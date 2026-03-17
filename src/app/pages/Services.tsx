import { Link } from "react-router";
import { motion } from "motion/react";
import { Scissors, Sparkles, Droplets, Package, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Services() {
  const serviceCategories = [
    {
      icon: Scissors,
      category: "Haircuts",
      services: [
        { name: "Classic Cut", price: "25 KM", duration: "30 min", description: "Traditional scissor cut tailored to your style" },
        { name: "Fade & Style", price: "35 KM", duration: "45 min", description: "Modern fade with styling and finish", popular: true },
        { name: "Buzz Cut", price: "20 KM", duration: "20 min", description: "Clean, simple clipper cut" },
        { name: "Long Hair Cut", price: "40 KM", duration: "60 min", description: "Expert cut for longer styles" },
      ],
    },
    {
      icon: Sparkles,
      category: "Beard Services",
      services: [
        { name: "Beard Trim", price: "15 KM", duration: "20 min", description: "Shape and style your beard" },
        { name: "Royal Shave", price: "30 KM", duration: "40 min", description: "Hot towel straight razor shave", popular: true },
        { name: "Beard Design", price: "25 KM", duration: "30 min", description: "Detailed beard sculpting and design" },
      ],
    },
    {
      icon: Droplets,
      category: "Premium Treatments",
      services: [
        { name: "Hair Treatment", price: "20 KM", duration: "20 min", description: "Nourishing scalp and hair treatment" },
        { name: "Face Mask", price: "25 KM", duration: "25 min", description: "Rejuvenating facial treatment" },
        { name: "Head Massage", price: "15 KM", duration: "15 min", description: "Relaxing scalp massage" },
      ],
    },
    {
      icon: Package,
      category: "Packages",
      services: [
        { name: "Complete Package", price: "45 KM", duration: "60 min", description: "Haircut + beard trim + styling", popular: true },
        { name: "Deluxe Experience", price: "70 KM", duration: "90 min", description: "Full service with treatments and massage" },
        { name: "Quick Refresh", price: "35 KM", duration: "40 min", description: "Haircut + styling" },
      ],
    },
  ];

  return (
    <div className="pt-20 pb-20 md:pb-0">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Premium grooming services crafted with precision and care. Every service includes a complimentary consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl">{category.category}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card
                        key={serviceIndex}
                        className="p-6 bg-card border-border hover:border-primary/30 transition-all group cursor-pointer relative overflow-hidden"
                      >
                        {service.popular && (
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                        
                        <div className="mb-4">
                          <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl text-primary">{service.price}</span>
                            <span className="text-sm text-muted-foreground">/ {service.duration}</span>
                          </div>
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Link to="/booking">Book</Link>
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Not Sure What You Need?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert barbers will recommend the perfect service for your style and needs.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/booking">
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
