import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ 
  children, 
  className, 
  size = "lg" 
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:px-6",
        {
          "max-w-2xl": size === "sm",
          "max-w-4xl": size === "md", 
          "max-w-[1100px]": size === "lg", // Updated to match design system
          "max-w-7xl": size === "xl",
          "max-w-none": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
