// En Blog.js

import React, { useState } from 'react';
import { ButtonList } from './../components/ButtonList';
import { ArticleList } from './../components/ArticleList';
import { data, featuredPosts, trendingPosts, categoryColors } from './../assets/mocks/data';

export default function Blog() {
  const allPosts = [...data, ...featuredPosts, ...trendingPosts];
  const allCategories = ['All', ...new Set(allPosts.flatMap(article => article.categories))];
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(allPosts);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Nuevo estado para la categoría seleccionada

  const filterCategory = category => {
    if (category === 'All') {
      setArticles(allPosts);
    } else {
      const filteredData = allPosts.filter(article => article.categories.includes(category));
      setArticles(filteredData);
    }
    setSelectedCategory(category); // Actualiza la categoría seleccionada
  };

  return (
    <>
      <br></br><br></br><br></br><br></br>
      {/* Mandando como prop una función con filterCategory y la categoría seleccionada */}
      <ButtonList categories={categories} filterCategory={filterCategory} selectedCategory={selectedCategory} />
      <hr />
      <ArticleList articles={articles} />
    </>
  );
}
