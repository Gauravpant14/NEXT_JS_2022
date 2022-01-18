import build from 'next/dist/build'
import { delBasePath } from 'next/dist/shared/lib/router/router'
import { useRouter } from 'next/router'
import React from 'react'

const Product = ({product}) => {

    //steps for checking the issues of SSG
    // 1. Create Build using yarn build
    // 2. Initially only page 1 will be loaded in build
    // 3. And change the item in db 
    // 4. Then again reload pages and check that data is storing and not changning 
    const router = useRouter()
    const productId = router.query.productId
    if(router.isFallback){
      return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Showing Product description for Product Id {productId}</h1> 
            <h2>{product.description}</h2>
        </div>
    )
}

export default Product

export async function getStaticPaths() {
    //here we have to use same number of params in array , as our api result length. 
  const paths = [
    {
      params: { productId: '1'},
    }
  ]
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(
      `http://localhost:4000/products/${params.productId}`
    );
    const data = await response.json();
    
    console.log(`Generating page for /post/${params.postId }`)
    return {
      props: {
        product: data,
      },
    };
  }
