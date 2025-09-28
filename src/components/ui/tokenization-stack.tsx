"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface TokenizationStackProps {
  className?: string;
}

export function TokenizationStack({ className = "" }: TokenizationStackProps) {
  const shouldReduceMotion = useReducedMotion();
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generate random sparkles
  useEffect(() => {
    if (shouldReduceMotion) return;

    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 2 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 80 + 10, // Keep within bounds
        y: Math.random() * 80 + 10,
        delay: Math.random() * 1,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 4000 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className={`relative isolate rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur p-8 shadow-[0_0_40px_rgba(16,185,129,0.1)] ${className}`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-950/60 border border-white/10 flex items-center justify-center">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/20"></div>
          </div>
          <p className="text-slate-400 text-sm font-medium">Tokenization Stack</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`relative isolate rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur p-8 shadow-[0_0_40px_rgba(16,185,129,0.1)] ${className}`}
      whileHover={{ 
        y: -4,
        boxShadow: "0 0 60px rgba(16,185,129,0.2)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      aria-label="Tokenization stack visualization"
    >
      {/* Background Aura */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/10"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central Node */}
      <div className="relative z-10 flex items-center justify-center mb-6">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-slate-950/60 border border-white/10 flex items-center justify-center relative"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-emerald-400/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Core element */}
          <motion.div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400/30 to-emerald-500/50"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Orbiting elements */}
        <motion.div
          className="absolute w-24 h-24 border border-emerald-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 border border-emerald-400/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Data flow particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/60"
            style={{
              left: `${15 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-emerald-300 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Label */}
      <div className="text-center">
        <p className="text-slate-400 text-sm font-medium">Tokenization Stack</p>
      </div>
    </motion.div>
  );
}
