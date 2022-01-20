import React from "react";

const ArticleByCategory = ({articles, category}) => {
  return <div className="container has-text-centered">
    <h1 className="title">Showing news for category <i>{category}</i></h1>
    {
      articles.map((e) => {
        return(
          <div key={e.id} >
            <h2 className="title">
              {e.id} {e.title}
            </h2>
            <p className="subtitle">{e.description}</p>
          </div>
        )
      })
    }
  </div>;
};

export default ArticleByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query, 'query');
  console.log(req.headers.cookie, 'cookie');
  res.setHeader('Set-Cookie', ['name=Gaurav'])
  const { category } = params;

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category
    }
  }
}
