function Post({ post }) {
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
  const paths = Array.from(Array(11).fill("")).map((e, i = 1) => {
    return {
      params: {
        postId: i.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
