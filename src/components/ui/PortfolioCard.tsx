
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button className="group flex items-center gap-1">
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
