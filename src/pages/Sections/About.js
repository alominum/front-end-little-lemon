import React from 'react';
import './CSS/About.css';
import Image from '../../assets/restauranfood.png';
import ImageRestaurant from '../../assets/restaurant.png';

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Dublin</h2>
        <p className="about-description">
          Nestled in the vibrant heart of Dublin, Little Lemon is where contemporary elegance meets a warm, nostalgic charm. Our thoughtfully curated
          menu, featuring exquisite Caesar salads, refreshing Caprese salads, and flavorful garlic bread bruschettas, is a testament to our passion
          for treating food as an art. Crafted by skilled chefs using the freshest, locally-sourced ingredients, our dishes are designed to not only
          tantalize your taste buds but also provide a sense of comfort and satisfaction. Whether you’re planning a romantic evening, a family
          gathering, or a casual outing with friends, Little Lemon is your ultimate dining destination. Visit us in the lively streets of Dublin for
          an unforgettable culinary experience.
        </p>
      </div>

      <img className="about-image-restaurant" src={Image} alt="Restarurant food" height={200} width={200} />
      <img className="about-image-bruchetta" src={ImageRestaurant} alt="Restarurant food" height={200} width={200} />
    </div>
  );
};

export default About;
