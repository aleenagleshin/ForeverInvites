import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react";
import { SamplePreview } from "./SamplePreview";
import { WebsitePreview } from "./WebsitePreview";

import sampleWedding from "@/assets/sample-wedding.jpg";
import sampleBirthday from "@/assets/sample-birthday.jpg";
import sampleHousewarming from "@/assets/sample-housewarming.jpg";
import sampleCorporate from "@/assets/sample-corporate.jpg";
import safnajan from "@/assets/safnajan.jpg";
import AbhiAmal from "@/assets/AbhiAmal.jpg";


export type SampleType =
  | "wedding"
  | "birthday"
  | "housewarming"
  | "corporate";

/* 🌐 Featured Live Websites */
const featuredWebsites = [
  {
    title: "Safna Weds Jan",
    description: "Live wedding invitation website with RSVP & gallery",
    image: safnajan,
    url: "https://safna-wedding-website.vercel.app/",
  },
  {
    title: "Abhirami Weds Amal",
    description: "Elegant wedding website with full event details",
    image: AbhiAmal,
    url: "https://abhiramiwedsamal.vercel.app/",
  },
];

/* 🎨 Sample Designs */
const samples = [
  {
    title: "Elegant Wedding",
    category: "Wedding",
    image: sampleWedding,
    type: "wedding" as SampleType,
  },
  {
    title: "Golden Birthday",
    category: "Birthday",
    image: sampleBirthday,
    type: "birthday" as SampleType,
  },
  {
    title: "New Home Celebration",
    category: "Housewarming",
    image: sampleHousewarming,
    type: "housewarming" as SampleType,
  },
  {
    title: "Corporate Gala",
    category: "Corporate",
    image: sampleCorporate,
    type: "corporate" as SampleType,
  },
];

export const Samples = () => {
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [samplePreviewOpen, setSamplePreviewOpen] = useState(false);

  const [websitePreviewOpen, setWebsitePreviewOpen] = useState(false);
  const [activeWebsite, setActiveWebsite] = useState<{
    title: string;
    url: string;
  } | null>(null);

  const openWebsitePreview = (title: string, url: string) => {
    setActiveWebsite({ title, url });
    setWebsitePreviewOpen(true);
  };

  return (
    <section className="py-24 px-4 bg-card/50" id="samples">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Live <span className="text-gradient">Websites</span> & Samples
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preview real invitation websites and browse sample design styles.
          </p>
        </motion.div>

        {/* 🌐 Live Websites */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {featuredWebsites.map((site, i) => (
            <motion.div
              key={site.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer"
              onClick={() => openWebsitePreview(site.title, site.url)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    {site.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {site.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎨 Sample Designs */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={samples[activeSampleIndex].title}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl glass-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={samples[activeSampleIndex].image}
                    alt={samples[activeSampleIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex items-end p-6">
                  <div className="flex justify-between w-full items-end">
                    <div>
                      <span className="text-xs text-primary uppercase">
                        {samples[activeSampleIndex].category}
                      </span>
                      <h3 className="font-display text-2xl font-semibold mt-1">
                        {samples[activeSampleIndex].title}
                      </h3>
                    </div>

                    <Button
                      variant="gold"
                      size="sm"
                      className="gap-2"
                      onClick={() => setSamplePreviewOpen(true)}
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">
            {samples.map((sample, index) => (
              <button
                key={sample.title}
                onClick={() => setActiveSampleIndex(index)}
                className={`rounded-xl transition border ${
                  index === activeSampleIndex
                    ? "border-primary"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex gap-4 glass-card p-3">
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-20 h-14 rounded-md object-cover"
                  />
                  <div>
                    <span className="text-xs text-primary">
                      {sample.category}
                    </span>
                    <p className="text-sm font-medium">{sample.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      <WebsitePreview
        isOpen={websitePreviewOpen}
        onClose={() => setWebsitePreviewOpen(false)}
        title={activeWebsite?.title || ""}
        url={activeWebsite?.url || ""}
      />

      <SamplePreview
        isOpen={samplePreviewOpen}
        onClose={() => setSamplePreviewOpen(false)}
        type={samples[activeSampleIndex].type}
      />
    </section>
  );
};
