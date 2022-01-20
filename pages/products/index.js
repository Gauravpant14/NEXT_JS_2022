import Link from "next/link";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h1 className="title has-text-centered">Products List</h1>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth mt-4">
        <thead>
          <tr>
            <th title="id">ID</th>
            <th title="Title">Title</th>
            <th title="Price">Price</th>
            <th title="See full Description">Description</th>
          </tr>
        </thead>
        <tbody>
      {products.map((e, i) => (
        <tr key={i}>
          <td>{e.id}</td>
          <th>{e.title}</th>
          {/* <h2>{e.description}</h2> */}
          <td>{e.price}</td>
          <td>
          <Link href={`/products/${e.id}`} passHref>
            <button>See Full description</button>
          </Link>
          </td>       
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
};

export default ProductList;

export async function getStaticProps() {
  console.log('generating list');
  
  const response = await fetch("http://localhost:4000/products");
  const results = await response.json();
  return {
    props: {
      products: results,
    },
    revalidate: 10
  };
}
