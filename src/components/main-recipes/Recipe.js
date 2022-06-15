import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import ImgCard from "../../UI/ImgCard";
import Gradient from "../../UI/Gradient";

// Splide
import { SplideSlide } from "@splidejs/react-splide";
// ---------------------------------------------------------------
const Recipe = (props) => {
  return (
    <>
      <SplideSlide key={props.id}>
        <Link to={`/recipeInformation/${props.id}`}>
          <ImgCard>
            <p>{props.title}</p>
            <img src={props.image} alt={props.title}></img>
            <Gradient />
          </ImgCard>
        </Link>
      </SplideSlide>
    </>
  );
};

export default Recipe;
