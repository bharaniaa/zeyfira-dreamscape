
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  color,
  link,
}) => {
  return (
    <div className={`service-card border-t-4 ${color}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link}>
        <Button variant="ghost" className="p-0 hover:bg-transparent text-primary flex items-center gap-1 group">
          Learn More 
          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
