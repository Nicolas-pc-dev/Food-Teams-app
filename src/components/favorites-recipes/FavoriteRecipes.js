import React, { useContext } from "react";
// Context
import FavoriteRecContext from "../../store/favorite-context";
// Splide
import { SplideSlide } from "@splidejs/react-splide";
// Styles
import ImgCard from "../../UI/ImgCard";
import Gradient from "../../UI/Gradient";
import AddBtn from "../../UI/AddBtn";
// ----------------------------------------------------------------

const FavoriteRecipe = (props) => {
  const FavoriteCtx = useContext(FavoriteRecContext);

  const removeRecipeHandler = () => {
    FavoriteCtx.removeRecipe({
      id: props.id,
    });
  };

  return (
    <>
      <SplideSlide key={props.id}>
        <ImgCard>
          <p>
            <AddBtn onClick={removeRecipeHandler}>-</AddBtn>
            {props.title}
          </p>
          <img src={props.image} alt={props.title}></img>
          <Gradient />
        </ImgCard>
      </SplideSlide>
    </>
  );
};

export default FavoriteRecipe;
