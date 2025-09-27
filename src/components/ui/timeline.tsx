import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: readonly TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />
      
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start"
          >
            {/* Step number */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg relative z-10">
              {step.step}
            </div>
            
            {/* Content */}
            <div className="ml-8 flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
