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
  CheckCircle,
  Sparkles
} from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  detailedDescription?: string;
  entity: string;
  icon: string;
  duration?: string;
  features?: readonly string[];
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
      {/* Desktop: Enhanced Horizontal Flow */}
      <div className="hidden lg:block">
        <div className="relative py-12">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Entity Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    className="flex justify-center mb-6"
                  >
                    <div className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-300 font-medium backdrop-blur-sm">
                      {step.entity}
                    </div>
                  </motion.div>

                  {/* Step Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="relative"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Main Card */}
                    <div className="relative card-glass p-8 text-center group-hover:border-emerald-500/30 transition-all duration-300">
                      {/* Step Number with Enhanced Design */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15 + 0.4, type: "spring", bounce: 0.4 }}
                        className="relative mb-6"
                      >
                        <div className="w-16 h-16 mx-auto relative">
                          {/* Outer Ring */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 animate-pulse" />
                          {/* Inner Circle */}
                          <div className="absolute inset-1 rounded-full bg-emerald-500 flex items-center justify-center">
                            <span className="text-slate-900 font-bold text-xl">{step.step}</span>
                          </div>
                          {/* Sparkle Effect */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-1 -right-1 w-4 h-4"
                          >
                            <Sparkles className="w-4 h-4 text-emerald-400" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                        className="w-12 h-12 mx-auto mb-4 text-emerald-400"
                      >
                        <Icon className="w-full h-full" />
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                      >
                        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-100 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                        

                        {/* Features List */}
                        {step.features && (
                          <div className="space-y-1">
                            {step.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 + 0.7 + featureIndex * 0.1 }}
                                className="flex items-center gap-2 text-xs text-slate-400"
                              >
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Enhanced Arrow to next step */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.8 }}
                      className="absolute top-1/2 -right-6 -translate-y-1/2 z-10"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-600/50 flex items-center justify-center backdrop-blur-sm">
                          <ArrowRight className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Enhanced Vertical Flow */}
      <div className="lg:hidden space-y-8 py-8">
        {steps.map((step, index) => {
          const Icon = stepIcons[step.icon as keyof typeof stepIcons];
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Entity Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                className="flex justify-center mb-4"
              >
                <div className="px-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-full text-xs text-slate-300 font-medium backdrop-blur-sm">
                  {step.entity}
                </div>
              </motion.div>

              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main Card */}
                <div className="relative card-glass p-6 group-hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.4, type: "spring", bounce: 0.4 }}
                        className="relative mb-3"
                      >
                        <div className="w-12 h-12 relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 animate-pulse" />
                          <div className="absolute inset-1 rounded-full bg-emerald-500 flex items-center justify-center">
                            <span className="text-slate-900 font-bold text-lg">{step.step}</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                        className="w-8 h-8 text-emerald-400"
                      >
                        <Icon className="w-full h-full" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                      >
                        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-100 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                          {step.description}
                        </p>
                        

                        {/* Features List */}
                        {step.features && (
                          <div className="space-y-1">
                            {step.features.map((feature, featureIndex) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.2 + 0.7 + featureIndex * 0.1 }}
                                className="flex items-center gap-2 text-xs text-slate-400"
                              >
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Arrow to next step */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  className="flex justify-center my-6"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-600/50 flex items-center justify-center backdrop-blur-sm">
                      <ArrowDown className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}