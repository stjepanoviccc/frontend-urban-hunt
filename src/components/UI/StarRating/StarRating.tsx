import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface StarProps {
  selected: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ selected, onClick }) => (
  <FontAwesomeIcon icon={faStar} onClick={onClick} className={`mr-1 ${selected ? "text-primary" : "text-gray-200"}`}/>

);

interface StarRatingProps {
  totalStar: number;
  initialRating: number;
  onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStar, initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleClick = (starIndex: number) => {
    setRating(starIndex + 1);
    onChange(starIndex + 1);
  };

  return (
    <div>
      {[...Array(totalStar)].map((_, index) => (
        <Star key={index} selected={index < rating} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default StarRating;