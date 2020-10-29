import React from "react";
import favicon from "../favicon.png";
function Home() {
  return (
    <div className="container">
      <div className="heading">
        <img id="headingimg" src={favicon} alt="favicon"></img>
      </div>
      <div className="headingtitle">
        <h1 className="title">ChefLemo is Ready</h1>
        <h3 className=" description">
          Stake LemonSwap LP tokens to claim your very own $GUAVA
        </h3>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Rebase in 12:16</h2>
        </div>
        <div className="card">
          <h2>Your LEMO Balance</h2>
          <h3>1,000,000,000</h3>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 98%;
          justify-content: center;
          margin: 10px;
          border-radius: 15px;
        }
        .title {
          font-family: "Kaushan Script", sans-serif;
          font-size: 36px;
          text-align: center;
          font-weight: 700;
          margin: 0px;
          padding: 0px;
        }
        .heading {
          display: flex;
          justify-content: center;
        }
        .headingtitle {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .description {
          color: #4b4b4b;
          font-size: 18px;
          font-weight: 400;
          margin: 0px;
          padding: 0px;
          text-align: center;
        }

        #headingimg {
          display: flex;
          height: 130px;
        }
        .cards {
          display: flex;
          justify-content: center;
          flex-direction: row;
        }
        .card {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 25%;
          height: 110px;
          margin: 10px;
          text-align: center;
          border: 1px solid #4b4b4b;
          border-radius: 12px;
        }
        @media only screen and (max-width: 800px) {
          .cards {
            flex-direction: column;
          }

           .card {
               width: 95%;
           }
        }
      `}</style>
    </div>
  );
}

export default Home;
