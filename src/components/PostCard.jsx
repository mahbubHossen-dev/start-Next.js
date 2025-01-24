import Link from 'next/link';
import React from 'react';

const PostCard = ({post}) => {
    const {title, body, id} = post || {}
    return (
        <div className='border border-black/50 space-y-4 p-6 rounded-sm'>

            <Link href={`/blog/${id}`}><h3 className='text-xl font-medium border-b w-fit text-center mx-auto'>{title}</h3></Link>
            
        </div>
    );
};

export default PostCard;