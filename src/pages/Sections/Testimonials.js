import React from 'react';
import './CSS/Testimonials.css';
import TestimonialCard from '../../components/TestimonialCard';

const testimonials = [
  {
    id: 1,
    author: 'Sophia Bennett',
    description:
      'The Caesar Salad was a delightful mix of crisp romaine, parmesan, and crunchy croutons, topped with a perfectly creamy house-made dressing.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBevPAd1FndSbk-C7pP1ktx-XL9Kib2Xw-Gg&s',
    rating: 5,
  },
  {
    id: 2,
    author: 'James Carter',
    description: 'The Caprese Salad was a refreshing Italian masterpiece with fresh mozzarella, ripe tomatoes, and a drizzle of balsamic reduction.',
    image: 'https://www.ncronline.org/files/2025-01/master-pnp-gtfy-05200-05292u%20Jimmy%20Carter%20CROP.jpg',
    rating: 5,
  },
  {
    id: 3,
    author: 'Emma Collins',
    description: 'The Garlic Bread Bruschetta was a flavor-packed delight with perfectly toasted bread, fresh basil, and a hint of balsamic glaze.',
    image: 'https://pbs.twimg.com/profile_images/1786391473803460608/xogMflSg_400x400.jpg',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
