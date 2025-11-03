import Link from 'next/link';
import React from 'react'
export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await res.json();
    return result;
}
async function Posts() {
    const posts = await getPosts();
    return <div>
        <div>
            {
                posts.map((item: any) => <Link key={item.id} href={`/posts/${item.id}`}><div>{item.title}</div></Link>)
            }
        </div>
    </div>
}

export default Posts
