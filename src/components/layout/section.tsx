import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "primary" | "secondary";
  padding?: "sm" | "md" | "lg" | "xl";
}

export function Section({ 
  children, 
  className, 
  id,
  background = "default",
  padding = "lg"
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative",
        {
          "bg-background": background === "default",
          "bg-muted/50": background === "muted",
          "bg-primary text-primary-foreground": background === "primary",
          "bg-secondary text-secondary-foreground": background === "secondary",
        },
        {
          "py-8 sm:py-12": padding === "sm",
          "py-12 sm:py-16": padding === "md",
          "py-16 sm:py-20": padding === "lg",
          "py-20 sm:py-24": padding === "xl",
        },
        className
      )}
    >
      {children}
    </motion.section>
  );
}
