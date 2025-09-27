import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeRowProps {
  badges: readonly Array<{
    name: string;
    status: string;
    active?: boolean;
  }>;
  className?: string;
}

export function BadgeRow({ badges, className }: BadgeRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("flex flex-wrap gap-3 justify-center", className)}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Badge 
            variant={badge.active ? "default" : "secondary"}
            className="px-4 py-2 text-sm font-medium"
          >
            <span className="font-semibold">{badge.name}</span>
            <span className="ml-2 text-xs opacity-75">({badge.status})</span>
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
}
