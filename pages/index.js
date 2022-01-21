import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="box">
        <h1 className="title has-text-centered">
          API Routes Uses with examples
        </h1>
        <div className="row">
          <div className="rows has-text-centered">
            <h2 className="sub-title">API GET/POST REQUEST</h2>
            <Link href="/comments">
            <button className="button is-link is-outlined">See example</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
