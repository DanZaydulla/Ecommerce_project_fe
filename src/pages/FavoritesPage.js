import React from 'react';
import ItemsGrid from '../components/ItemGrid';

const FavoritesPage = ({ favorites }) => {
  return React.createElement('div', {},
    React.createElement('h2', {}, 'My Favorites'),
    React.createElement(ItemsGrid, { products: favorites }, null)
  );
};

export default FavoritesPage;


