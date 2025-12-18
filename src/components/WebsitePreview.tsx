import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface WebsitePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

export const WebsitePreview = ({
  isOpen,
  onClose,
  url,
  title,
}: WebsitePreviewProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[95vw] h-[90vh] bg-background rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-card">
              <h3 className="font-semibold">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe */}
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-none"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
