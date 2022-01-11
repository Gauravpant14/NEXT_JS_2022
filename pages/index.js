import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter()  
  const placeOrder = () => {
    console.log('Order Placed successfully') 
    router.push('/product') 
  }
  return (
    <div>
      <h1>Home Page</h1>
      
      <Link href="/blog">
          <a>Blog</a>
      </Link>
      <Link href="/product">
          <a>Products</a>
      </Link>
    <button onClick={()=> placeOrder()}>
        Order Now
    </button>
      
    </div>
  );
}

export default Home;
