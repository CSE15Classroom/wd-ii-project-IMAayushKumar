import React from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import hero_banner from "../../assets/squid-games.png";
import play from "../../assets/play_arrow.png";
import info from "../../assets/info.png";
import TitleCards from "../../component/TitleCards/TitleCards";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="Hero_banner" />
        <div className="hero-caption">
          <p>
            Squid Game is a sharp, dark critique of modern capitalism, wealth inequality, and the lengths to which a desperate person will go to survive.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="" />
              Info
            </button>
          </div>
        </div>
        <div className="morecards">
          <TitleCards title={"Blockbuster Movies"}/>
          <TitleCards title={"Only on Netflix"}/>
          <TitleCards title={"Top Picks for You"}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
