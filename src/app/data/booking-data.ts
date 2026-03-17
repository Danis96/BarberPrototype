export const services = [
  {
    id: "classic-cut",
    name: "Classic Cut",
    price: 25,
    duration: 30,
    description: "Traditional scissor cut tailored to your style",
    category: "haircuts",
  },
  {
    id: "fade-style",
    name: "Fade & Style",
    price: 35,
    duration: 45,
    description: "Modern fade with styling and finish",
    category: "haircuts",
    popular: true,
  },
  {
    id: "buzz-cut",
    name: "Buzz Cut",
    price: 20,
    duration: 20,
    description: "Clean, simple clipper cut",
    category: "haircuts",
  },
  {
    id: "beard-trim",
    name: "Beard Trim",
    price: 15,
    duration: 20,
    description: "Shape and style your beard",
    category: "beard",
  },
  {
    id: "royal-shave",
    name: "Royal Shave",
    price: 30,
    duration: 40,
    description: "Hot towel straight razor shave",
    category: "beard",
    popular: true,
  },
  {
    id: "complete-package",
    name: "Complete Package",
    price: 45,
    duration: 60,
    description: "Haircut + beard trim + styling",
    category: "packages",
    popular: true,
  },
];

export const barbers = [
  {
    id: "emir",
    name: "Emir Hadžić",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1747830280502-f33d7305a714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MXx8fHwxNzczNzM2MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "nermin",
    name: "Nermin Softić",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1761931403759-c18a3647e82e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaXN0JTIwcG9ydHJhaXQlMjB5b3VuZ3xlbnwxfHx8fDE3NzM3MzYyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "adnan",
    name: "Adnan Kovač",
    role: "Barber Specialist",
    image: "https://images.unsplash.com/photo-1662125502527-bb106378d560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzcGVjaWFsaXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczNzM2MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "jasmin",
    name: "Jasmin Memić",
    role: "Traditional Barber",
    image: "https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBiYXJiZXIlMjBwb3J0cmFpdCUyMGV4cGVyaWVuY2VkfGVufDF8fHx8MTc3MzczNjI0MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "any",
    name: "Any Available",
    role: "First Available Barber",
    image: "",
  },
];

export const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30",
];

export const getNextAvailableSlot = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Mock: return today at 15:00 if before 3pm, otherwise tomorrow at 9:00
  if (now.getHours() < 15) {
    return { date: today, time: "15:00" };
  } else {
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return { date: tomorrow, time: "09:00" };
  }
};
