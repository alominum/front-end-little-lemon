import React from 'react';
import './CSS/Hero.css';
import Button from '../../components/Button';
import Image from '../../assets/restaurantchef.jpg';
import { useNavigate } from 'react-router-dom';
import pages from '../../utils/pages';

const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(pages.get('reservations').path);
  };

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Dublin</h2>
          <p>
            Situated in the lively city of Dublin, Little Lemon blends modern elegance with a welcoming, nostalgic ambiance. Our thoughtfully curated
            menu features an array of delicious options, including flavorful bruschettas, tender burgers, and refreshing Greek salads, showcasing our
            dedication to the art of food.
          </p>
          <Button title={'Reserve a table'} onClick={onClickReserve} />
        </div>

        <img className="image" src={Image} alt="Restarurant food" height={200} width={200} />
      </div>
    </div>
  );
};

export default Hero;
