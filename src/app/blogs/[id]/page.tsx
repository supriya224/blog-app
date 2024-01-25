import Comments from '@/app/components/core/comments'
import FormComment from '@/app/components/domain/formComment'
import React from 'react'

const BlogDetailPage = () => {
  return (
    <div className='max-w-4xl mx-auto my-8'>
        <h1 className='text-3xl font-bold'>post one</h1>
        <p>written by: me </p>
        <div className='mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Adipisci asperiores aut aperiam, hic velit placeat neque error!
             Sequi dolorum iure molestias earum voluptate! Praesentium officia mollitia voluptatum minus? Cum, quibusdam!
        </div>
        <Comments/>
        <FormComment/>
    </div>
  )
}

export default BlogDetailPage