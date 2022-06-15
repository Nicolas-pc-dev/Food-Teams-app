import React, { useContext } from "react";
// Context
import FavoriteRecContext from "../../store/favorite-context";
// Splide
import { SplideSlide } from "@splidejs/react-splide";
// Routing
import { useNavigate } from "react-router-dom";
// Styles
import ImgCard from "../../UI/ImgCard";
import Gradient from "../../UI/Gradient";
// ----------------------------------------------------------------

const FavoriteRecipe = (props) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/recipeInformation/${props.id}`);
  };

  return (
    <>
      <SplideSlide key={props.id}>
        <ImgCard onClick={navigateHandler}>
          <p>{props.title}</p>
          <img src={props.image} alt={props.title}></img>
          <Gradient />
        </ImgCard>
      </SplideSlide>
    </>
  );
};

export default FavoriteRecipe;
