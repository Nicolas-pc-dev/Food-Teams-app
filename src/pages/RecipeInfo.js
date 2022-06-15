import React, { useState, useContext, useEffect } from "react";
// Context
import FavoriteRecContext from "../store/favorite-context";
// Router
import { useParams, useNavigate, useLocation } from "react-router-dom";
// Helpers
import fetchRecipeInformation from "../helpers/getRecipeInfo";
// Icons
import { IoMdCloseCircle } from "react-icons/io";
// Styles
import styled from "styled-components";
import Backdrop from "../UI/Backdrop";
import AddBtn from "../UI/AddBtn";
import Gradient from "../UI/Gradient";
// ------------------------------------------------------------

const RecipeInfo = () => {
  const [recipeData, setRecipeData] = useState({});
  const [showAddBtn, setShowAddBtn] = useState(true);

  const FavoriteCtx = useContext(FavoriteRecContext);

  let params = useParams();
  let { information } = params;
  const infoId = String(information);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  const API_KEY = "apiKey=f19301907cf7488cbd09010c786cd82d";

  const addRecipeHandler = () => {
    FavoriteCtx.addRecipe({
      id: recipeData.id,
      title: recipeData.title,
      image: recipeData.image,
    });
  };

  const removeRecipeHandler = () => {
    FavoriteCtx.removeRecipe({
      id: recipeData.id,
    });
  };

  const navigateHandler = () => {
    navigate("/recipes");
  };

  useEffect(() => {
    if (FavoriteCtx.recipes.some((recipe) => recipe.id === recipeData.id)) {
      setShowAddBtn(false);
    } else {
      setShowAddBtn(true);
    }
  }, [FavoriteCtx.recipes, recipeData.id]);

  useEffect(() => {
    const myRecipes = localStorage.getItem(infoId);
    if (myRecipes) {
      setRecipeData(JSON.parse(myRecipes));
    } else {
      fetchRecipeInformation(information, API_KEY).then((data) => {
        setRecipeData(data);
        localStorage.setItem(infoId, JSON.stringify(data));
      });
    }
  }, [information, infoId]);

  return (
    <>
      <Backdrop />
      <RecipeInfoCard>
        <InfoCard>
          <InfoHeader>
            <h2>{recipeData.title}</h2>
            <IoMdCloseCircle onClick={navigateHandler} />
          </InfoHeader>

          <SummaryContainer>
            <h3>Summary</h3>
            <span>
              <p dangerouslySetInnerHTML={{ __html: recipeData.summary }}></p>
            </span>
          </SummaryContainer>

          <ImageContainer>
            <Gradient />
            <img src={recipeData.image} alt="recipe information" />
          </ImageContainer>

          {showAddBtn ? (
            <AddBtn onClick={addRecipeHandler}>Add Recipe</AddBtn>
          ) : (
            <AddBtn onClick={removeRecipeHandler}>Remove</AddBtn>
          )}

          <InstructionsContainer>
            <h3>Instructions</h3>
            <div>
              <p
                dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
              ></p>
            </div>
          </InstructionsContainer>
        </InfoCard>
      </RecipeInfoCard>
    </>
  );
};

const InfoHeader = styled.header`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  h2 {
    font-size: 4rem;
    text-align: center;
  }
  svg {
    color: #79a93b;
    font-size: 5rem;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 0.2rem;

    &:hover {
      ${"" /* color:  */}
    }
  }
`;

const SummaryContainer = styled.div`
  margin: 1rem 0;
  padding: 2rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  span {
    display: inline-block;
    min-width: 30%;
    height: 95%;
    grid-row: 2 / 3;
    overflow-y: auto;

    p {
      font-size: 1.5rem;
      text-align: justify;
      letter-spacing: 0.5px;
      line-height: 2.8rem;
      padding-right: 1.5rem;

      a {
        font-size: 1.5rem;
        text-decoration: none;
      }

      b {
        font-size: 1.3rem;
      }
    }

    &::-webkit-scrollbar {
      width: 0.5vw;
    }

    &::-webkit-scrollbar-thumb {
      background: #79a93b;
      outline: 1px solid #79a93b;
      border-radius: 5rem;
    }

    &::-webkit-scrollbar-track {
      width: 1vw;
      background: #ccc;
      border-radius: 5rem;
    }
`;

const InstructionsContainer = styled.div`
  margin: 1rem 0;
  padding: 2rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.8rem;
  }

  div {
    min-width: 30%;
    height: 95%;
    grid-row: 2 / 3;
    overflow: auto;

    p,
    ol li {
      font-size: 1.5rem;
      text-align: justify;
      letter-spacing: 0.5px;
      line-height: 2.8rem;
      padding-right: 1.5rem;
      list-style-position: inside;
    }

    &::-webkit-scrollbar {
      width: 0.5vw;
    }

    &::-webkit-scrollbar-thumb {
      background: #79a93b;
      outline: 1px solid #79a93b;
      border-radius: 5rem;
    }

    &::-webkit-scrollbar-track {
      width: 1vw;
      background: #ccc;
      border-radius: 5rem;
    }
  }
`;

const RecipeInfoCard = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoCard = styled.article`
  background: #fff;
  height: 85vh;
  width: 85%;
  padding: 0 2rem 4rem;
  z-index: 150;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 15% 85%;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 82%;
  overflow: hidden;
  position: relative;
  margin-top: 7rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`;

export default RecipeInfo;
