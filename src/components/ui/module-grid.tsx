import { FeatureCard } from "./feature-card";
import { 
  Layers, 
  Users, 
  Shield, 
  Lock, 
  TrendingUp, 
  FileText 
} from "lucide-react";

interface Module {
  title: string;
  description: string;
  features: string[];
}

interface ModuleGridProps {
  modules: Module[];
  className?: string;
}

const moduleIcons = {
  "Issuer Portal": Layers,
  "Investor Portal": Users,
  "Compliance Engine": Shield,
  "Custody & Settlement": Lock,
  "Secondary Workflows": TrendingUp,
  "Reporting & Audit": FileText,
};

export function ModuleGrid({ modules, className }: ModuleGridProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {modules.map((module, index) => {
        const Icon = moduleIcons[module.title as keyof typeof moduleIcons];
        return (
          <FeatureCard
            key={module.title}
            title={module.title}
            description={module.description}
            features={module.features}
            icon={Icon}
            delay={index * 0.1}
          />
        );
      })}
    </div>
  );
}
