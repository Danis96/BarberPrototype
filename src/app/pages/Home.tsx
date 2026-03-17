import { Link } from "react-router";
import { motion } from "motion/react";
import { Scissors, Clock, Award, Users, ArrowRight, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Scissors,
      title: "Expert Cuts",
      description: "Master barbers with years of experience in traditional and modern styles",
    },
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Easy online booking with next available slot feature",
    },
    {
      icon: Award,
      title: "Premium Service",
      description: "High-end grooming experience with attention to detail",
    },
    {
      icon: Users,
      title: "Loyalty Rewards",
      description: "Earn points and get exclusive benefits as a returning customer",
    },
  ];

  const services = [
    { name: "Classic Cut", price: "25 KM", duration: "30 min" },
    { name: "Fade & Style", price: "35 KM", duration: "45 min" },
    { name: "Beard Trim", price: "15 KM", duration: "20 min" },
    { name: "Complete Package", price: "45 KM", duration: "60 min" },
  ];

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(45deg, #d4a574 0px, #d4a574 2px, transparent 2px, transparent 10px)`,
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Loyalty Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Star className="w-4 h-4 mr-2 inline" />
                Returning Customer? Get 10% Off
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
            >
              <span className="text-foreground">Where Style</span>
              <br />
              <span className="text-primary">Meets Tradition</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Experience premium grooming in Sarajevo's finest barber shop. Expert cuts, classic shaves, and modern styling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/booking">
                  Book Appointment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                <Link to="/services">View Services</Link>
              </Button>
            </motion.div>

            {/* Next Available Slot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 inline-flex items-center gap-2 bg-muted px-6 py-3 rounded-full"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Next available: <span className="text-foreground">Today at 3:00 PM</span>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose Amidža</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine traditional barber craftsmanship with modern techniques and premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-background border-border hover:border-primary/30 transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2">Popular Services</h2>
              <p className="text-muted-foreground">Our most requested treatments</p>
            </div>
            <Button asChild variant="outline" className="border-primary/20 hover:bg-primary/10">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary/30 transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg group-hover:text-primary transition-colors">{service.name}</h3>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {service.duration}
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-primary">{service.price}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-4">Ready for a Fresh Look?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book your appointment now and experience the Amidža difference
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/booking">
                  Book Your Appointment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
