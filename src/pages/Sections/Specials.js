import React from 'react';
import './CSS/Specials.css';
import Button from '../../components/Button';
import FoodCard from '../../components/FoodCard';
import { useNavigate } from 'react-router-dom';
import pages from '../../utils/pages';

const specials = [
  {
    id: 1,
    title: 'Caesar Salad',
    description: 'A classic Caesar salad with crisp romaine, parmesan cheese, crunchy croutons, and our creamy house-made Caesar dressing.',
    image: 'https://i1.wp.com/pamelasglutenfreerecipes.com/wp-content/uploads/2019/07/Ceasar-Salad-with-Bacon-and-Tomatoes.jpg?resize=1040%2C596',
    price: '$10.99',
  },
  {
    id: 2,
    title: 'Caprese Salad',
    description: 'Fresh mozzarella, ripe tomatoes, and basil drizzled with a balsamic reduction and olive oil for a refreshing Italian favorite.',
    image:
      'https://www.seriouseats.com/thmb/5kQKbm3V-zgurSr95PTITqaS_vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-caprese-salad-recipe-hero-05_1-9ce2f9b0601c45279e07320f9548fa66.JPG',
    price: '$9.99',
  },
  {
    id: 3,
    title: 'Garlic Bread Bruschetta',
    description: 'Toasted garlic bread topped with diced tomatoes, fresh basil, and a hint of balsamic glaze.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg',
    price: '$6.99',
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get('orders').path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={'Online Menu'} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard key={special.id} title={special.title} description={special.description} image={special.image} price={special.price} />
        ))}
      </div>
    </div>
  );
};

export default Specials;
