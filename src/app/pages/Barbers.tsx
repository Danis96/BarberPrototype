import { Link } from "react-router";
import { motion } from "motion/react";
import { Star, Scissors, Award, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Barbers() {
  const barbers = [
    {
      name: "Emir Hadžić",
      role: "Master Barber",
      experience: "12+ years",
      specialty: "Classic cuts & fades",
      rating: 5.0,
      reviews: 247,
      image: "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzczNzM2MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
    },
    {
      name: "Nermin Softić",
      role: "Senior Stylist",
      experience: "8+ years",
      specialty: "Modern styles & beard design",
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1761931403759-c18a3647e82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaXN0JTIwcG9ydHJhaXQlMjB5b3VuZ3xlbnwxfHx8fDE3NzM3MzYyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Adnan Kovač",
      role: "Barber Specialist",
      experience: "6+ years",
      specialty: "Precision cuts & styling",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1662125502527-bb106378d560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzcGVjaWFsaXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzM2MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Jasmin Memić",
      role: "Traditional Barber",
      experience: "10+ years",
      specialty: "Royal shave & traditional cuts",
      rating: 5.0,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMGV4cGVyaWVuY2VkfGVufDF8fHx8MTc3MzczNjI0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Our Barbers</h1>
            <p className="text-lg text-muted-foreground">
              Meet our team of expert barbers. Each master of their craft with years of experience and a passion for perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {barbers.map((barber, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card border-border hover:border-primary/30 transition-all group">
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={barber.image}
                      alt={barber.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {barber.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}

                    {/* Rating */}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-sm">{barber.rating}</span>
                      <span className="text-xs text-muted-foreground">({barber.reviews})</span>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl mb-1">{barber.name}</h3>
                      <p className="text-primary mb-2">{barber.role}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                          <Scissors className="w-3 h-3 mr-1" />
                          {barber.experience}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted/50 backdrop-blur-sm">
                          {barber.specialty}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-card">
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/booking">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book with {barber.name.split(" ")[0]}
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Expert Barbers", value: "4" },
              { label: "Years Combined", value: "36+" },
              { label: "Happy Clients", value: "5000+" },
              { label: "Average Rating", value: "4.9" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
