import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatStripProps {
  stats: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  className?: string;
}

export function StatStrip({ stats, className }: StatStripProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center p-4 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm shadow-sm"
        >
          <div className="text-2xl font-bold text-emerald-500">{stat.value}</div>
          <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
