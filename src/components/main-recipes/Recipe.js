import React, { useState, useContext } from "react";
// Context
import FavoriteRecContext from "../../store/favorite-context";
// Styles
import ImgCard from "../../UI/ImgCard";
import Gradient from "../../UI/Gradient";
import AddBtn from "../../UI/AddBtn";
// Splide
import { SplideSlide } from "@splidejs/react-splide";
// ---------------------------------------------------------------
const Recipe = (props) => {
  const [showBtn, setShowBtn] = useState(true);
  const FavoriteCtx = useContext(FavoriteRecContext);

  const addRecipeHandler = () => {
    setShowBtn(false);
    FavoriteCtx.addRecipe({
      id: props.id,
      title: props.title,
      image: props.image,
    });
  };

  return (
    <>
      <SplideSlide key={props.id}>
        <ImgCard>
          <p>
            {showBtn && <AddBtn onClick={addRecipeHandler}>+</AddBtn>}
            {props.title}
          </p>
          <img src={props.image} alt={props.title}></img>
          <Gradient />
        </ImgCard>
      </SplideSlide>
    </>
  );
};

export default Recipe;
