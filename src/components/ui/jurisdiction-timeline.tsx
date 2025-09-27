import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface JurisdictionTimelineProps {
  jurisdictions: readonly {
    readonly name: string;
    readonly status: string;
    readonly active: boolean;
  }[];
  className?: string;
}

export function JurisdictionTimeline({ jurisdictions, className }: JurisdictionTimelineProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {jurisdictions.map((jurisdiction, index) => (
        <div key={jurisdiction.name} className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
          >
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center text-xs font-medium mb-2",
              jurisdiction.active 
                ? "bg-emerald-500 text-slate-900" 
                : "bg-slate-800 text-slate-400"
            )}>
              {jurisdiction.name}
            </div>
            <div className="text-xs text-slate-400">{jurisdiction.status}</div>
          </motion.div>
          
          {index < jurisdictions.length - 1 && (
            <ChevronRight className="w-4 h-4 text-slate-400" />
          )}
        </div>
      ))}
    </div>
  );
}
