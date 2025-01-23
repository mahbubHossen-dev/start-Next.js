import Container from '@/components/Container';
import React from 'react';

const Blog =async ({ params }) => {
    const {id} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data =await res.json()
    return (
        <div>
            <Container>
                <div className='text-center md:w-8/12 mx-auto space-y-4 mt-8'>
                    <p>userId: {data.userId}</p>
                    <p>userId: {data.id}</p>
                    <h1 className='text-xl'>{data.title}</h1>
                    <p>{data.body}</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;