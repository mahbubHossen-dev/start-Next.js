
import Container from '@/components/Container';
import PostCard from '@/components/PostCard';
import React from 'react';

const Main = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return (
        <div>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {
                        data.map(post => <PostCard key={post.id} post={post}></PostCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Main;