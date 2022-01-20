import Link from "next/link";

function NewsArticleList({articles}){
  return <div className="container has-text-centered">
      <h1 className="title">List of News Articles</h1>
      {articles.map(e => {return(
          <div key={e.id}>
              <Link href={`news/${e.category}`}>
              <h2 className="subtitle">
                  {e.id} {e.title} | {e.category}
              </h2>
              </Link>
          </div>
      )})}
  </div>;
};

export default NewsArticleList;

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
          articles: data,
        },
      };
}

