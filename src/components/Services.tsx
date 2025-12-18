import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Cake, Home, Calendar, Palette, Share2 } from "lucide-react";

/* 🔥 Popup Services */
const popupServices = [
  {
    icon: Heart,
    title: "Wedding Invitations",
    description:
      "Elegant digital invites for your special day. Add your love story, photos, and RSVP tracking.",
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description:
      "Playful and personalized birthday invites. From kids parties to milestone celebrations.",
  },
  {
    icon: Home,
    title: "Housewarming",
    description:
      "Welcome guests to your new home with stunning digital invitations.",
  },
];

/* 📌 Static Services */
const staticServices = [
  {
    icon: Calendar,
    title: "Any Event",
    description:
      "Baby showers, anniversaries, corporate events - we create invites for every occasion.",
  },
  {
    icon: Palette,
    title: "Full Customization",
    description:
      "Add your photos, choose colors, fonts, and make it uniquely yours.",
  },
  {
    icon: Share2,
    title: "Instant Sharing",
    description:
      "Share via WhatsApp, email, or social media. Track views and RSVPs in real-time.",
  },
];

export const Services = () => {
  const [index, setIndex] = useState(0);

  /* Auto-play popup cards */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % popupServices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const Service = popupServices[index];

  return (
    <section className="py-24 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Heading */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Everything You <span className="text-gradient">Need</span>
          </motion.h2>

          <p className="text-muted-foreground text-lg">
            Watch our services come to life
          </p>
        </div>

        {/* 🔥 Popup Card */}
        <div className="relative max-w-md mx-auto h-[260px] mb-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 glass-card rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {Service.title}
              </h3>

              <p className="text-muted-foreground">
                {Service.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ✅ Static Cards (Fade-in on Scroll) */}
        <div className="grid md:grid-cols-3 gap-6">
          {staticServices.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-xl p-6 hover:border-primary/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
