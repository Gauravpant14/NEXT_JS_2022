import {useRouter} from 'next/router'
function Post({ post }) {
  const router = useRouter()

  if(router.isFallback){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <h3>{post.body}</h3>
    </>
  );
}
export default Post;

export async function getStaticPaths() {
    //here we have to use same number of params in array , as our api result length. 
  const paths = [
    {
      params: { postId: '1'},
    },
    {
      params: { postId: '2'},
    },
    {
      params: { postId: '3'},
    },
    
  ]
  return {
    paths,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if(!data.id) {
    return {
      notFound: true
    }
  }
  console.log(`Generating page for /post/${params.postId }`)
  return {
    props: {
      post: data,
    },
  };
}
