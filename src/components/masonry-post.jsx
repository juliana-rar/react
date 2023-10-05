import React from 'react'
import TagRow from './common/tag-row'
import { Link } from 'react-router-dom';



{/*    const style = {backgroundImage: `url("${require(`../../assets/images/${post.image}`)}")`}; */}

export default function MasonryPost({post, tagsOnTop}){
    const windowWidth = window.innerWidth
    const imageBackground = { 
        backgroundImage: `url("../../../src/assets/images/${post.image}")`, 
        backgroundSize: 'cover'
    };
    const style = windowWidth > 900 ? {...imageBackground, ...post.style} : imageBackground

    return(
        
        <Link to={`/news/${post.id}`} className="masonry-post overlay" style={style}>
            <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
                <TagRow tags={post.categories}/>
                <div>
                    <h2 className='image-title'>{post.title}</h2>
                    <span className='image-date'>{post.date}</span>
                </div>
            </div>
        </Link>

    );
}

 
