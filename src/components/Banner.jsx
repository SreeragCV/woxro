import React from "react";
import img from "../assets/banner.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <h1 className="title">
        Epic Games : An American video game and software developer and publisher
        based in Cary, North Carolina.
      </h1>
      <img className="image" src={img} alt="" />
      <div>
        <p className="description">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
      </div>
      <p><button className="button">View Website</button></p>
    </div>
  );
}

export default Banner;
