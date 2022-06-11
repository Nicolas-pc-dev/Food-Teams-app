import React from "react";
// Components
import FavoriteRecipes from "./FavoriteRecipes";
// Styled Components
import Wrapper from "../../UI/Wrapper";
import Waves from "../../UI/Waves";
// Splide
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
// ----------------------------------------------------

const FavoriteCarrousel = ({ recipes, type }) => {
  return (
    <>
      <Wrapper>
        <h3>
          {type} <span>Recipes</span>{" "}
        </h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            drag: "free",
            snap: true,
            gap: "3rem",
            focus: "center",
          }}
        >
          {recipes.map((recipe) => {
            return (
              <FavoriteRecipes
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
              />
            );
          })}
        </Splide>
        <Waves />
      </Wrapper>
    </>
  );
};

export default FavoriteCarrousel;
