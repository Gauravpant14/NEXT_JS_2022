import Link from "next/link";

function Home() {
  return (<div className="container">
    <h1 style={{textAlign:'center'}} className="title">Next JS Pre-rendering</h1>
    <div className="columns">
    <div className="column is-one-fifth">
    <Link href="/users">
      <button className="button is-primary">users</button>
    </Link>
    </div>
    <div className="column is-one-fifth">

    <Link href="/posts" >
      <button className="button is-primary">Posts</button>
    </Link>
    </div>
    <div className="column is-one-fifth">

    <Link href="/products" >
      <button className="button is-primary">Product List</button>
    </Link>
    
    </div>
    <div className="column is-one-fifth">

    <Link href="/news" >
      <button className="button is-primary">SSR Example</button>
    </Link>
    
    </div>
    </div>
    
  </div>);
}

export default Home;
