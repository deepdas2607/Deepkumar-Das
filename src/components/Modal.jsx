import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[calc(100vw-1.5rem)] sm:max-w-2xl max-h-[85vh] overflow-x-hidden overflow-y-auto rounded-2xl bg-gradient-to-b from-storm to-indigo border border-white/10 shadow-2xl p-4 sm:p-6 md:p-8"
          >
            <div className="flex items-start justify-between mb-4 sm:mb-6 gap-2">
              <h3 className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mint to-aqua">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 transition-colors rounded-full text-neutral-400 hover:text-white hover:bg-white/10 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="text-sm sm:text-base text-neutral-300">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
