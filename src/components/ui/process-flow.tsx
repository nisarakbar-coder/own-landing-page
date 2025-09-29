"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Coins, 
  Shield, 
  Users, 
  ArrowRight,
  ArrowDown,
  CheckCircle
} from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  entity: string;
  icon: string;
}

interface ProcessFlowProps {
  steps: readonly ProcessStep[];
  className?: string;
}

const stepIcons = {
  Building2,
  Coins,
  Shield,
  Users,
};

export function ProcessFlow({ steps, className }: ProcessFlowProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Desktop: Horizontal Flow */}
      <div className="hidden lg:block">
        <div className="relative py-8">
          {/* Start Node - Original RWA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-32 h-20 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-sm text-slate-400 font-semibold">Original RWA</div>
              </div>
            </div>
          </motion.div>

          {/* End Node - Tokenized RWA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <motion.div 
              className="w-32 h-20 bg-emerald-900/30 border border-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
              animate={{ 
                boxShadow: [
                  "0 0 0px rgba(16, 185, 129, 0.3)",
                  "0 0 20px rgba(16, 185, 129, 0.6)",
                  "0 0 0px rgba(16, 185, 129, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-center">
                <div className="text-sm text-emerald-400 font-semibold">Tokenized RWA</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-4 gap-6 px-16">
            {steps.map((step, index) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="relative"
                >
                  {/* Entity Label */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-xs text-slate-300 whitespace-nowrap">
                      {step.entity}
                    </div>
                  </div>

                  {/* Step Card */}
                  <motion.div
                    className="card-glass p-6 text-center relative group"
                    whileHover={{ 
                      boxShadow: "0 8px 32px rgba(16, 185, 129, 0.15)"
                    }}
                  >
                    {/* Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-12 h-12 rounded-full bg-emerald-500 text-slate-900 font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10"
                    >
                      {step.step}
                    </motion.div>

                    {/* Icon */}
                    <div className="w-8 h-8 mx-auto mb-3 text-emerald-400">
                      <Icon className="w-full h-full" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow to next step */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      className="absolute top-1/2 -right-4 -translate-y-1/2 z-10"
                    >
                      <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-1/2 left-16 right-16 h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500/60 to-emerald-500/20 -translate-y-1/2 z-0"
          />
        </div>
      </div>

      {/* Mobile: Vertical Flow */}
      <div className="lg:hidden space-y-12 py-8">
        {/* Start Node */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-48 h-16 bg-slate-800 border border-slate-600 rounded-xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <div className="text-sm text-slate-400 font-semibold">Original RWA</div>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        {steps.map((step, index) => {
          const Icon = stepIcons[step.icon as keyof typeof stepIcons];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Entity Label */}
              <div className="flex justify-center mb-4">
                <div className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full text-xs text-slate-300 whitespace-nowrap">
                  {step.entity}
                </div>
              </div>

              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                className="card-glass p-6 flex items-start gap-4 group"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="w-12 h-12 rounded-full bg-emerald-500 text-slate-900 font-bold text-lg flex items-center justify-center mb-3"
                  >
                    {step.step}
                  </motion.div>
                  <div className="w-6 h-6 text-emerald-400">
                    <Icon className="w-full h-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Arrow to next step */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="flex justify-center my-8"
                >
                  <ArrowDown className="w-6 h-6 text-emerald-400" />
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* End Node */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <motion.div 
            className="w-48 h-16 bg-emerald-900/30 border border-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
            animate={{ 
              boxShadow: [
                "0 0 0px rgba(16, 185, 129, 0.3)",
                "0 0 20px rgba(16, 185, 129, 0.6)",
                "0 0 0px rgba(16, 185, 129, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-center">
              <div className="text-sm text-emerald-400 font-semibold">Tokenized RWA</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}