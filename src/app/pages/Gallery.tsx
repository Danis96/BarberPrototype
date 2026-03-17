import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "cuts", label: "Haircuts" },
    { id: "beards", label: "Beards" },
    { id: "shop", label: "Our Shop" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    {
      src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwaGFpcmN1dCUyMGZhZGV8ZW58MXx8fHwxNzczNzM2MjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Modern Fade",
    },
    {
      src: "https://images.unsplash.com/photo-1654097803253-d481b6751f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwYmVhcmQlMjB0cmltfGVufDF8fHx8MTc3MzczNjI3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "beards",
      title: "Beard Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1647220419119-316822d9d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwY2xhc3NpYyUyMGN1dHxlbnwxfHx8fDE3NzM3MzYyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Classic Cut",
    },
    {
      src: "https://images.unsplash.com/photo-1769034260387-39fa07f0c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwc3R5bGluZyUyMGhhaXJ8ZW58MXx8fHwxNzczNzM2Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "cuts",
      title: "Hair Styling",
    },
    {
      src: "https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzaG9wJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzczNjk1NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Our Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1678356163587-6bb3afb89679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0b29scyUyMHNjaXNzb3JzJTIwY29tYnxlbnwxfHx8fDE3NzM3MzYyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "shop",
      title: "Professional Tools",
    },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              See our work. Every cut, every style, crafted with precision and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 bg-background/95 backdrop-blur-md border-b border-border z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/20 hover:bg-primary/10"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer relative overflow-hidden rounded-lg aspect-square"
                  onClick={() => setSelectedImage(index)}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl text-foreground">{image.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card hover:bg-muted transition-colors flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl">{filteredImages[selectedImage].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
