function Post({post}){
return (
    <>
    <h2>
        {post.title}
    </h2>
    <h3>
        {post.body}
    </h3>
    </>

)
}
export default Post

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            post:data,
        }
    }
    
}