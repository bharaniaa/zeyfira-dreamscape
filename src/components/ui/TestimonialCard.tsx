
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  testimonial,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6">"{testimonial}"</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
