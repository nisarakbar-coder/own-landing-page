import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  className?: string;
  delay?: number;
}

export function Testimonial({ 
  quote, 
  author, 
  role, 
  company, 
  className,
  delay = 0
}: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn("h-full", className)}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-primary mb-4" />
          <blockquote className="text-lg leading-relaxed text-foreground mb-6">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <div>
            <div className="font-semibold text-foreground">{author}</div>
            <div className="text-sm text-muted-foreground">{role}</div>
            <div className="text-sm font-medium text-primary">{company}</div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
