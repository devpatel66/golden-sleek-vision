
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  delay = 0,
  className,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className={cn(
        "glass-card p-6 flex flex-col items-center text-center hover-scale hover-glow",
        className
      )}
    >
      <div className="bg-gradient-gold w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-gray-900" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
