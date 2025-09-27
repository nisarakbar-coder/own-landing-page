import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatProps {
  label: string;
  value: string;
  description?: string;
  className?: string;
  delay?: number;
}

export function Stat({ 
  label, 
  value, 
  description, 
  className,
  delay = 0
}: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn("text-center", className)}
    >
      <div className="text-3xl font-bold text-primary sm:text-4xl">
        {value}
      </div>
      <div className="mt-2 text-lg font-semibold text-foreground">
        {label}
      </div>
      {description && (
        <div className="mt-1 text-sm text-muted-foreground">
          {description}
        </div>
      )}
    </motion.div>
  );
}
