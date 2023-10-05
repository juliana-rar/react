import React from 'react'
import {PostMasonry, MasonryPost, PostGrid} from '../components/common'
import { featuredPosts, trendingPosts } from './../assets/mocks/data';

const trendingConfig = {
    1:{
        gridArea: '1 / 2 / 3 / 3'
    }
}

const featuredConfig = {
    0:{
        gridArea:'1 / 1 / 2 / 3',
        height:'300px',
        width: '100%'
    },
    1:{
        height:'300px',
        width: '100%'
    },
    3:{
        height:'630px',
        marginLeft:'30px',
        width:'630px'
    }
}

const mergeStyles = function (posts, config){
    posts.forEach((post,index) => {
        post.style = config[index]
        post.author = 'Reversa Nexo'
        post.description = "Lorem Ipsum Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.Dolores de la cuevaa"
    })
}

const trending = [...trendingPosts]; // Create a copy of trendingPosts
const featured = [...featuredPosts]; // Create a copy of featuredPosts
mergeStyles(trending, trendingConfig);
mergeStyles(featured, featuredConfig);
const lastPost = featured.pop();

const recentPosts = [...trending, ...featured, ...featured]; // Merge data

export default function Home (){
    return(
        <main className='home'>
            <br></br><br />
            <section className='container'>
                <div className='row'>
                    <div className='title-background'><h1>Posts destacados</h1></div>
                    <section className='featured-posts-container'>
                        <PostMasonry posts={featured} columns={2} tagsOnTop={true}/>
                        <MasonryPost post={lastPost} tagsOnTop={true}/>
                    </section>
                </div>
            </section>
<br />
    <div className='border-background'></div>
            <section className='container'>
                <div className='row'> <br /><br />
                <div className='title-background'><h1>Posts en tendencia</h1></div>
                    <PostMasonry posts={trending} columns={2}/>
                </div>
            </section> <br /><br />
            
    <div className='border-background'></div>
        <section className='bg-white'>
            <section className='container'>
                <div className='row'>
                    <PostGrid posts={recentPosts} />
                </div>
            </section>
        </section>

        </main>
    )
}