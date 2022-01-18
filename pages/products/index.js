import Link from "next/link";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((e, i) => (
        <div key={i}>
          <span>{e.id}</span>
          <h1>{e.title}</h1>
          {/* <h2>{e.description}</h2> */}
          <h3>{e.price}</h3>
          <Link href={`/products/${e.id}`} passHref>
            <button>See Full description</button>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const results = await response.json();
  return {
    props: {
      products: results,
    },
  };
}
