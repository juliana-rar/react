import React, {useState, useMemo, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination, Tooltip} from 'antd'
import TagRow from './tag-row'

export default function Postgrid({ categories, selectedCategory, onSelectCategory, posts }) {
  const [pageSize, setPageSize] = useState(9)
  const [current, setCurrent] = useState(1)

  const paginatedPosts = useMemo(() => {
      const lastIndex = current * pageSize
      const firstIndex = lastIndex - pageSize

      return posts.slice(firstIndex, lastIndex)
  }, [current, pageSize, posts])

// useEffect(()=> {
//   window.scroll({
//       top:850,
//       left: 0,
//       behavior:'smooth'
//   })

// }, [current,pageSize])

  return(
      <section className='grid-pagination-container'>
          <section className='post-grid container'>
          {paginatedPosts.map((post, index) => (
<div className='post-container' key={`post-container-${index}`}>
  <figure>
    <Link to={post.link}>
      <img src={`../../src/assets/images/${post.image}`} alt={post.image} />
    </Link>
  </figure>
  <TagRow tags={post.categories} key={`tag-row-${index}`} />
  <h2 key={`post-title-${index}`}>{post.title}</h2>
  <p className='author-text' key={`author-text-${index}`}>
    <span>
      By:
      <Link to={`/authors/${post.author}`} key={`author-link-${index}`} >
        {post.author}
      </Link>
    </span>
    <span key={`post-date-${index}`}> - {post.date}</span>
  </p>
  <p className='description-text' key={`description-${index}`}>
    {post.description}
  </p>
  <Link to={post.link} key={`read-more-${index}`}>
    Read More...
  </Link>
</div>
))}

          </section>
          <Pagination 
              simple 
              showSizeChanger 
              onShowSizeChange={setPageSize} 
              pageSize={pageSize}
              total={posts.length}
              defaultCurrent={current}
              onChange={setCurrent}
              />
              
      </section>
  )
}
