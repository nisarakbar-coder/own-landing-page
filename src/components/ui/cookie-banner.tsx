"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-50 lg:left-auto lg:right-4 lg:max-w-md"
        >
          <div className="card-glass p-4 rounded-2xl border border-white/10">
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-100 text-sm mb-2">
                  Cookie Consent
                </h3>
                <p className="text-xs text-slate-300 mb-3">
                  We use cookies to enhance your experience and analyze site usage. 
                  <a href="/privacy" className="text-emerald-400 hover:underline ml-1">
                    Learn more
                  </a>
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 text-xs"
                  >
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDecline}
                    className="border-white/20 text-slate-100 hover:bg-white/10 text-xs"
                  >
                    Decline
                  </Button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
