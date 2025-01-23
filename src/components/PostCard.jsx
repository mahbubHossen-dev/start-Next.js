import Link from 'next/link';
import React from 'react';

const PostCard = ({post}) => {
    const {title, body, id} = post || {}
    return (
        <div className='border border-black space-y-4 p-6'>

            <Link href={`/blog/${id}`}><h3 className='text-xl font-medium border-b w-fit text-center'>{title.slice(0, 20)}...</h3></Link>
            
            <h3>{body}</h3>
        </div>
    );
};

export default PostCard;