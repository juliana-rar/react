import React from 'react';
import { useParams } from 'react-router-dom';
import { data, featuredPosts, trendingPosts } from '../assets/mocks/data';

function NewsDetail() {
  const { id } = useParams();
  const noticia = data.find(n => n.id === id);

  if (!noticia) {
    // Intenta buscar la noticia en las publicaciones destacadas
    const featuredNoticia = featuredPosts.find(n => n.id === id);
    if (featuredNoticia) {
      return (
        <div className='noticia-content'>
          <br></br><br></br><br></br><br></br><br></br>
          <h1>{featuredNoticia.title}</h1>
          <p>{featuredNoticia.content}</p>
          <p>{featuredNoticia.categories}</p>
          <p>{featuredNoticia.image}</p>
        </div>
      );
    }

    // Intenta buscar la noticia en las publicaciones populares
    const trendingNoticia = trendingPosts.find(n => n.id === id);
    if (trendingNoticia) {
      return (
        <div>
          <br /><br /><br /><br/>
          <h1>{trendingNoticia.title}</h1>
          <p>{trendingNoticia.content}</p>
          <p>{trendingNoticia.image}</p>
          <p>{trendingNoticia.description}</p>
        </div>
      );
    }

    console.log("Noticia no encontrada");
    return <div>Noticia no encontrada</div>;
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>{noticia.title}</h1>
      <br />
      <p>{noticia.content}</p>
      <p>{noticia.image}</p>
      <p>{noticia.description}</p>
      <br />
      {/* Otros detalles y componentes específicos de la noticia */}
    </div>
  );
}

export default NewsDetail;
