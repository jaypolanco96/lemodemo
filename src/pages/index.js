import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="heading">
        <h2>Rebase in 12:16</h2>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin: 10px;
          box-shadow: 0px 1px 10px #000;
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
}

export default Home;
