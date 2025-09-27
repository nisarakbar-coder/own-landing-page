import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrustLogosProps {
  logos: Array<{
    name: string;
    logo?: string;
    href?: string;
  }>;
  className?: string;
}

export function TrustLogos({ logos, className }: TrustLogosProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center", className)}>
      {logos.map((logo, index) => (
        <motion.div
          key={logo.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
        >
          {logo.href ? (
            <a href={logo.href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="w-24 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium">
                {logo.name}
              </div>
            </a>
          ) : (
            <div className="w-24 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 text-sm font-medium">
              {logo.name}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
