import { motion } from "framer-motion";
import { MessageSquare, Palette, Sparkles, Send } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell Us Your Vision",
    description: "Share your event details, theme, and any specific ideas you have in mind.",
  },
  {
    icon: Palette,
    step: "02",
    title: "We Design",
    description: "Our team creates a stunning digital invitation tailored to your style.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "You Personalize",
    description: "Add your photos, tweak colors, and make it perfectly yours.",
  },
  {
    icon: Send,
    step: "04",
    title: "Share & Celebrate",
    description: "Send instantly to all your guests and track responses in real-time.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-4" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From idea to invitation in four simple steps. We make the process effortless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto rounded-full glass-card flex items-center justify-center mb-6 group hover:border-primary/40 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-primary/60 font-display text-sm mb-2">{step.step}</div>
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
