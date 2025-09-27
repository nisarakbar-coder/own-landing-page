import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Check, Star } from "lucide-react";

interface PricingTiersProps {
  plans: readonly {
    readonly name: string;
    readonly price: string;
    readonly description: string;
    readonly features: readonly string[];
    readonly cta: string;
    readonly popular?: boolean;
  }[];
  note?: string;
  className?: string;
}

export function PricingTiers({ plans, note, className }: PricingTiersProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
              "relative p-8 rounded-2xl border",
              plan.popular
                ? "bg-slate-900/50 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                : "bg-slate-900/30 border-white/10"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-1 px-3 py-1 bg-emerald-500 text-emerald-900 text-xs font-medium rounded-full">
                  <Star className="w-3 h-3" />
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-100 mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-emerald-500 mb-2">{plan.price}</div>
              <p className="text-sm text-slate-400">{plan.description}</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={cn(
                "w-full",
                plan.popular 
                  ? "bg-emerald-500 hover:bg-emerald-600 text-slate-900" 
                  : "bg-slate-800 hover:bg-slate-700 text-slate-100"
              )}
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
      
      {note && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-slate-400">{note}</p>
        </motion.div>
      )}
    </div>
  );
}
