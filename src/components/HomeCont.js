import React from "react";
// Styles
import MainContent from "../UI/MainContent";
import Vector from "../UI/Vector";
// Local Image
import vegetables from "../assets/vegetables.png";
// --------------------------------------------------------

const HomeCont = () => {
  return (
    <MainContent>
      <div>
        <h1>
          Healthy <span>Diets From</span> <br />
          <span>Sustainable Foods!</span>
        </h1>
        <p>
          “To ensure good health: eat lightly, breathe deeply, <br />
          live moderately, cultivate cheerfulness, <br />
          and maintain an interest in life.” <br />
          <br />
          -William Londen
        </p>
      </div>
      <img src={vegetables} alt="Vegetables" />
      <Vector />
    </MainContent>
  );
};

export default HomeCont;
