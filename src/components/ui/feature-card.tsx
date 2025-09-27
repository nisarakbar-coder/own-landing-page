import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  features?: readonly string[];
  className?: string;
  delay?: number;
}

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  features,
  className,
  delay = 0
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className={cn("h-full hover:shadow-lg transition-shadow", className)}>
        <CardHeader>
          {Icon && (
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
              <Icon className="h-6 w-6 text-emerald-400" />
            </div>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        {features && features.length > 0 && (
          <CardContent>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-slate-300">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
