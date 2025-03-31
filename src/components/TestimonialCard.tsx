
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  delay?: number;
  className?: string;
}

const TestimonialCard = ({
  name,
  position,
  company,
  content,
  rating,
  image,
  delay = 0,
  className,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className={cn(
        "glass-card p-6",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-golden-500 flex items-center justify-center mr-4">
              <span className="text-black text-lg font-bold">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {position}, {company}
            </p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-golden-500 fill-golden-500" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <blockquote className="text-gray-600 dark:text-gray-400 italic">
        "{content}"
      </blockquote>
    </motion.div>
  );
};

export default TestimonialCard;
