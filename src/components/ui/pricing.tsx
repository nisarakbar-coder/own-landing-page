import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
}

interface PricingProps {
  title: string;
  plans: readonly PricingPlan[];
  note?: string;
  className?: string;
}

export function Pricing({ title, plans, note, className }: PricingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-8", className)}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">{title}</h2>
        {note && (
          <p className="text-slate-300 max-w-2xl mx-auto">
            {note}
          </p>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="text-2xl font-bold text-emerald-500">{plan.price}</div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {note && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Badge variant="secondary" className="px-4 py-2">
            {note}
          </Badge>
        </motion.div>
      )}
    </motion.div>
  );
}
