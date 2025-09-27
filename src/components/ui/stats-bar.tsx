import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsBarProps {
  stats: readonly {
    readonly label: string;
    readonly value: string;
    readonly description: string;
  }[];
  className?: string;
}

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm shadow-sm"
        >
          <div className="text-3xl font-bold text-emerald-500 mb-2">{stat.value}</div>
          <div className="text-sm font-medium text-slate-100 mb-1">{stat.label}</div>
          <div className="text-xs text-slate-400">{stat.description}</div>
        </motion.div>
      ))}
    </div>
  );
}
