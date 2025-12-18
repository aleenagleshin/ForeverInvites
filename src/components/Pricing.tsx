import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹499",
    tagline: "Perfect for quick events",
    features: ["Pre-designed template", "No customization", "Event details section", "Share via link"],
    highlight: false,
  },
  {
    name: "Custom",
    price: "₹999+",
    tagline: "Tailored to your vision",
    features: ["Fully customizable design", "Your photos & content", "Custom colors & fonts", "RSVP & guest tracking", "WhatsApp & social sharing"],
    highlight: true,
  },
  {
    name: "Budget",
    price: "Based on your budget",
    tagline: "We adapt to your budget",
    features: ["Flexible features", "Custom design within budget", "Event details & sharing", "Optional extras"],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-card/40" id="pricing">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Simple <span className="text-gradient">Pricing</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Choose a plan that fits your celebration. We also offer flexible options based on your budget.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`relative p-6 rounded-xl glass-card ${plan.highlight ? "border-primary/40" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </div>
            )}

            <h3 className="font-display text-2xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">{plan.tagline}</p>

            <div className="mb-4 text-3xl font-bold">
              {plan.price}
              {plan.name === "Custom" && <span className="text-sm text-muted-foreground ml-2">(based on requirements)</span>}
            </div>

            <ul className="space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
