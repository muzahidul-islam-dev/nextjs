import React from 'react'
type Props = {
    params: any
}

const getSinglePost = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const result = await res.json();
    return result;
}
async function SinglePost({params}: Props) {
    const param = await params;
    const singlePost = await getSinglePost(param.id);
    return (
        <div>
            <p>Single Post {singlePost.title}</p>
        </div>
    )
}

export default SinglePost
