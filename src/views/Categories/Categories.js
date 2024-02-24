import React from 'react';
import './Categories.css';
import Navbar from '../../Components/Navbar/Navbar';

const categories = [
  {
    name: 'Appetizers',
    image: '/images/paneer-tikka.jpg'
  },
  {
    name: 'Main Course',
    image: '/images/maharashtraThali.jpeg',
  },
  {
    name: 'Desserts',
    image: '/images/kulfi.webp',
  },
  {
    name: 'Drinks',
    image: '/images/lassi.webp',
  },
];

const CategoryCard = ({ name, image }) => (
  <div className="category-card">
    <div className="image-container">
      <img src={image} alt={name} />
    </div>
    <h3>{name}</h3>
  </div>
);

const Categories = () => (
  <div className="App">
    <h1>Categories of Food</h1>
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoryCard key={index} name={category.name} image={category.image} />
      ))}
    </div>
  </div>
);


export default Categories;
