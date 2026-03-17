import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Star, 
  Zap, 
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { services, barbers, timeSlots, getNextAvailableSlot } from "../data/booking-data";
import { toast } from "sonner";

type BookingData = {
  service: string | null;
  barber: string | null;
  date: Date | null;
  time: string | null;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export function Booking() {
  const [step, setStep] = useState(1);
  const [isReturningCustomer, setIsReturningCustomer] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    barber: null,
    date: null,
    time: null,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  useEffect(() => {
    // Check if returning customer (mock - would use localStorage or backend)
    const isReturning = Math.random() > 0.5;
    setIsReturningCustomer(isReturning);
  }, []);

  const handleQuickBook = () => {
    const nextSlot = getNextAvailableSlot();
    const popularService = services.find(s => s.popular);
    
    setBookingData({
      ...bookingData,
      service: popularService?.id || services[0].id,
      barber: "any",
      date: nextSlot.date,
      time: nextSlot.time,
    });
    setStep(4); // Skip to customer details
    toast.success("Quick booking selected! Fill in your details to confirm.");
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.service !== null;
      case 2:
        return bookingData.barber !== null;
      case 3:
        return bookingData.date !== null && bookingData.time !== null;
      case 4:
        return bookingData.name && bookingData.email && bookingData.phone;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed() && step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    toast.success("Booking confirmed! Check your email for details.");
    console.log("Booking submitted:", bookingData);
  };

  const selectedService = services.find(s => s.id === bookingData.service);
  const selectedBarber = barbers.find(b => b.id === bookingData.barber);

  return (
    <div className="pt-20 pb-20 md:pb-8">
      {/* Header */}
      <section className="py-8 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {isReturningCustomer && step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  <Star className="w-4 h-4 mr-2 inline" />
                  Welcome back! Enjoy 10% off your booking
                </Badge>
              </motion.div>
            )}

            <h1 className="text-3xl md:text-4xl mb-2">Book Appointment</h1>
            <p className="text-muted-foreground">Complete the steps below to book your appointment</p>

            {/* Progress Bar */}
            <div className="mt-8 mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Step {step} of {totalSteps}</span>
                <span className="text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Quick Book Button */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6"
              >
                <Button
                  onClick={handleQuickBook}
                  className="w-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Quick Book - Next Available Slot
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Service */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl mb-6">Select Service</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        onClick={() => setBookingData({ ...bookingData, service: service.id })}
                        className={`p-6 cursor-pointer transition-all relative ${
                          bookingData.service === service.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        {service.popular && (
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                        
                        {bookingData.service === service.id && (
                          <div className="absolute top-4 left-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}

                        <h3 className="text-xl mb-2 mt-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl text-primary">{service.price} KM</span>
                          </div>
                          <Badge variant="secondary" className="bg-muted">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.duration} min
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Select Barber */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl mb-6">Select Barber</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {barbers.map((barber) => (
                      <Card
                        key={barber.id}
                        onClick={() => setBookingData({ ...bookingData, barber: barber.id })}
                        className={`p-6 cursor-pointer transition-all ${
                          bookingData.barber === barber.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {barber.image ? (
                            <ImageWithFallback
                              src={barber.image}
                              alt={barber.name}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="w-8 h-8 text-primary" />
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <h3 className="text-lg mb-1">{barber.name}</h3>
                            <p className="text-sm text-muted-foreground">{barber.role}</p>
                          </div>

                          {bookingData.barber === barber.id && (
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Select Date & Time */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl mb-6">Select Date & Time</h2>
                  
                  {/* Date Selection */}
                  <div className="mb-8">
                    <Label className="mb-3 block">Select Date</Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {Array.from({ length: 7 }).map((_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i);
                        const isSelected = bookingData.date?.toDateString() === date.toDateString();
                        
                        return (
                          <Card
                            key={i}
                            onClick={() => setBookingData({ ...bookingData, date })}
                            className={`p-4 cursor-pointer text-center transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/30"
                            }`}
                          >
                            <div className="text-xs text-muted-foreground mb-1">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div className="text-xl">{date.getDate()}</div>
                            <div className="text-xs text-muted-foreground">
                              {date.toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Selection */}
                  {bookingData.date && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Label className="mb-3 block">Select Time</Label>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                        {timeSlots.map((time) => {
                          const isSelected = bookingData.time === time;
                          // Mock availability
                          const isAvailable = Math.random() > 0.3;
                          
                          return (
                            <Button
                              key={time}
                              onClick={() => isAvailable && setBookingData({ ...bookingData, time })}
                              disabled={!isAvailable}
                              variant={isSelected ? "default" : "outline"}
                              className={
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : isAvailable
                                  ? "border-primary/20 hover:bg-primary/10"
                                  : "opacity-50 cursor-not-allowed"
                              }
                            >
                              {time}
                            </Button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 4: Customer Details */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl mb-6">Your Details</h2>
                  
                  <div className="space-y-6">
                    {/* Summary Card */}
                    <Card className="p-6 bg-card border-primary/20">
                      <h3 className="mb-4">Booking Summary</h3>
                      <div className="space-y-3 text-sm">
                        {selectedService && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Service:</span>
                            <span>{selectedService.name} ({selectedService.duration} min)</span>
                          </div>
                        )}
                        {selectedBarber && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Barber:</span>
                            <span>{selectedBarber.name}</span>
                          </div>
                        )}
                        {bookingData.date && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Date:</span>
                            <span>{bookingData.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                          </div>
                        )}
                        {bookingData.time && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Time:</span>
                            <span>{bookingData.time}</span>
                          </div>
                        )}
                        <div className="flex justify-between pt-3 border-t border-border">
                          <span className="text-muted-foreground">Total:</span>
                          <span className="text-xl text-primary">
                            {selectedService?.price} KM
                            {isReturningCustomer && (
                              <span className="text-sm text-green-500 ml-2">(-10%)</span>
                            )}
                          </span>
                        </div>
                      </div>
                    </Card>

                    {/* Contact Form */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={bookingData.name}
                          onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={bookingData.email}
                          onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+387 XX XXX XXX"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special requests or preferences..."
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                          className="mt-2 min-h-24"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button onClick={handleBack} variant="outline" className="flex-1 md:flex-initial">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              
              {step < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
