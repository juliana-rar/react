import React from 'react';

export const ButtonList = ({ categories, filterCategory, selectedCategory }) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <button
          type='button'
          className={`btn-category ${selectedCategory === category ? 'selected' : ''}`}
          onClick={() => filterCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
