import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Articles() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        async function fetchArticles(){
            await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                    .then(response => response.json())
                    .then(json => setPosts(json))
        }
        fetchArticles();
    },[])


  return (
    <div className='articles'> 
        {posts.map((item) => {
            return(
                <div  key={item.id} className='articles_item'>
                    {
                        item.body
                    }
                </div>
            )
        })}
    </div>
  )
}
