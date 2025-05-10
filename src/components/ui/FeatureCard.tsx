import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isFirst?: boolean;
}

export default function FeatureCard({ title, description, icon, isFirst = false }: FeatureCardProps) {
  return (
    <div className={`flex flex-col items-start ${isFirst ? '' : 'sm:pl-6 md:pl-8 lg:pl-12'}`}>
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 sm:mb-8 md:mb-10">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6 md:mb-8 text-primary">{title}</h3>
      <p className="text-base sm:text-lg text-gray-700">{description}</p>
    </div>
  );
} 