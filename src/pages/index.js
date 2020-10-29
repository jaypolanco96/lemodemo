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
          color: rgb(91, 57, 38);
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
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .description {
            color: rgb(170, 149, 133);
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
      `}</style>
    </div>
  );
}

export default Home;
