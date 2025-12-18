import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Calendar, MapPin, Clock, Music, Gift, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingCoupleImg from "@/assets/preview-wedding-couple.jpg";
import birthdayPartyImg from "@/assets/preview-birthday-party.jpg";
import homeInteriorImg from "@/assets/preview-home-interior.jpg";
import corporateGalaImg from "@/assets/preview-corporate-gala.jpg";

interface SamplePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  type: "wedding" | "birthday" | "housewarming" | "corporate";
}

const WeddingPreview = () => (
  <div className="min-h-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-center">
    {/* Hero Image */}
    <motion.div
      className="relative h-64 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src={weddingCoupleImg} 
        alt="Wedding couple" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      <div className="absolute bottom-4 left-0 right-0">
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-primary/50 flex items-center justify-center bg-background/30 backdrop-blur-sm">
          <Heart className="w-8 h-8 text-primary" />
        </div>
      </div>
    </motion.div>

    <div className="px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-4">Together with their families</p>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">Sarah & James</h1>
        <p className="text-primary text-lg font-display italic mb-6">request the pleasure of your company</p>
      </motion.div>

      <motion.div
        className="glass-card rounded-2xl p-6 mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="space-y-5">
          <div className="flex items-center gap-4 justify-center">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="font-display text-lg">February 14, 2025</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 justify-center">
            <Clock className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="font-display text-lg">4:00 PM onwards</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 justify-center">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Venue</p>
              <p className="font-display text-lg">The Grand Ballroom</p>
              <p className="text-xs text-muted-foreground">123 Celebration Ave</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button variant="gold" size="lg" className="w-full">RSVP Now</Button>
        <Button variant="goldOutline" size="default" className="w-full">View Map</Button>
      </motion.div>

      <motion.p
        className="mt-6 text-muted-foreground italic font-display text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        "Two souls, one heart"
      </motion.p>
    </div>
  </div>
);

const BirthdayPreview = () => (
  <div className="min-h-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-center overflow-hidden relative">
    {/* Confetti effect */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
          initial={{ y: -20, x: Math.random() * 100 + "%", opacity: 0 }}
          animate={{ 
            y: "100vh", 
            opacity: [0, 1, 1, 0],
            rotate: 360 
          }}
          transition={{ 
            duration: 3 + Math.random() * 2, 
            repeat: Infinity, 
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}
    </div>

    {/* Hero Image */}
    <motion.div
      className="relative h-48 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src={birthdayPartyImg} 
        alt="Birthday celebration" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
    </motion.div>

    <div className="relative z-10 px-6 py-6 -mt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-6xl mb-4">🎂</div>
        
        <h1 className="font-display text-4xl font-bold text-gradient mb-1">Happy</h1>
        <h1 className="font-display text-4xl font-bold mb-4">Birthday!</h1>
        
        <p className="text-xl font-display mb-2">Emma's 30th</p>
        <p className="text-muted-foreground text-sm mb-6">Join us for an unforgettable celebration!</p>
      </motion.div>

      <motion.div
        className="glass-card rounded-2xl p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-1">
            <Calendar className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">When</p>
            <p className="font-semibold text-sm">Dec 25, 2024</p>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="font-semibold text-sm">7:00 PM</p>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Where</p>
            <p className="font-semibold text-sm">Rooftop Lounge</p>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <Music className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Theme</p>
            <p className="font-semibold text-sm">Gold & Black</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button variant="gold" size="lg" className="w-full">I'm Coming! 🎉</Button>
      </motion.div>
    </div>
  </div>
);

const HousewarmingPreview = () => (
  <div className="min-h-full bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] text-center">
    {/* Hero Image */}
    <motion.div
      className="relative h-52 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src={homeInteriorImg} 
        alt="Beautiful home interior" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
      <div className="absolute bottom-4 left-0 right-0">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/30">
          <span className="text-3xl">🏡</span>
        </div>
      </div>
    </motion.div>

    <div className="px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-primary/80 text-sm tracking-[0.3em] uppercase mb-3">You're Warmly Invited</p>
        
        <h1 className="font-display text-3xl font-bold mb-1">New Home</h1>
        <h1 className="font-display text-3xl font-bold text-gradient mb-4">Celebration</h1>
        
        <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-6">
          The Sharma Family invites you to bless our new home with your presence.
        </p>
      </motion.div>

      <motion.div
        className="glass-card rounded-2xl p-5 mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Date & Time</p>
              <p className="font-display text-sm">Sunday, January 15, 2025</p>
              <p className="text-primary text-xs">11:00 AM - 3:00 PM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Address</p>
              <p className="font-display text-sm">42, Palm Residency</p>
              <p className="text-muted-foreground text-xs">Sector 50, Gurugram</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Special Note</p>
              <p className="font-display text-sm italic">"Your presence is the only gift"</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button variant="gold" size="lg" className="w-full">Count Me In!</Button>
        <Button variant="goldOutline" size="default" className="w-full">Get Directions</Button>
      </motion.div>
    </div>
  </div>
);

const CorporatePreview = () => (
  <div className="min-h-full bg-gradient-to-b from-[#0a0a1a] to-[#0d0d0d] text-center">
    {/* Hero Image */}
    <motion.div
      className="relative h-52 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src={corporateGalaImg} 
        alt="Corporate gala" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/50 to-transparent" />
      
      {/* Logo overlay */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="w-16 h-16 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center bg-background/50 backdrop-blur-sm">
          <span className="font-display text-lg font-bold text-primary">TCI</span>
        </div>
      </div>
    </motion.div>

    <div className="px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-primary/80 text-xs tracking-[0.3em] uppercase mb-3">Tech Corp International</p>
        
        <h1 className="font-display text-3xl font-bold mb-1">Annual Gala</h1>
        <h1 className="font-display text-3xl font-bold text-gradient mb-4">2025</h1>
        
        <p className="text-muted-foreground text-sm max-w-xs mx-auto mb-6">
          Join us for an evening of excellence as we celebrate our achievements.
        </p>
      </motion.div>

      <motion.div
        className="glass-card rounded-2xl p-5 mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="font-semibold text-sm">Mar 15, 2025</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="font-semibold text-sm">6:30 PM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Venue</p>
              <p className="font-semibold text-sm">Taj Palace</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Dress Code</p>
              <p className="font-semibold text-sm">Black Tie</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Evening Highlights</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Cocktails", "Awards", "Live Music", "Dinner"].map((item) => (
              <span key={item} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Button variant="gold" size="lg" className="w-full">Confirm Attendance</Button>
        <Button variant="goldOutline" size="default" className="w-full">View Agenda</Button>
      </motion.div>
    </div>
  </div>
);

export const SamplePreview = ({ isOpen, onClose, type }: SamplePreviewProps) => {
  const previews = {
    wedding: <WeddingPreview />,
    birthday: <BirthdayPreview />,
    housewarming: <HousewarmingPreview />,
    corporate: <CorporatePreview />,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Preview Container - Mobile Frame */}
          <motion.div
            className="relative w-full max-w-[380px] h-[85vh] max-h-[700px] rounded-[2.5rem] border-4 border-border/50 overflow-hidden bg-background shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-border/50 rounded-b-2xl z-10" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-10 right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors border border-border/50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto pt-6">
              {previews[type]}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
