import React, { useState, useEffect, useContext } from "react";
// Context
import FavoriteRecContext from "../store/favorite-context";
// Router
import { NavLink } from "react-router-dom";
// Styles
import MainHeader from "../UI/MainHeader";
import styled from "styled-components";
import { GiThreeLeaves } from "react-icons/gi";
import Button from "../UI/Button";
import "../index.css";
// ---------------------------------------------------

const Header = () => {
  // States
  const [btnBump, setBtnBump] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  // Ctx
  const favoriteCtx = useContext(FavoriteRecContext);
  const { recipes } = favoriteCtx;
  const numberOfRecipes = recipes.length;
  // Conditional styling
  const btnClasses = `${btnBump ? "bump" : ""}`;

  // Bump effect
  useEffect(() => {
    if (recipes.length === 0) {
      setIsFilled(false);
      return;
    }

    // Style effect
    setBtnBump(true);

    // Show # recipes
    setIsFilled(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [recipes]);

  // JSX
  return (
    <MainHeader>
      <GiThreeLeaves />
      <h1>Veggie & Healthy</h1>
      <div>
        <SNavLink activeClassName="active" to="/">
          <p>Home</p>
        </SNavLink>
        <SNavLink activeClassName="active" to="/recipes">
          <p>Recipes</p>
        </SNavLink>
        <SNavLink activeClassName="active" to="/contact">
          <p>Contact Us</p>
        </SNavLink>
        <SNavLink activeClassName="active" to="/favorites">
          <Button className={btnClasses}>
            Favorites <span>{isFilled && numberOfRecipes}</span>{" "}
          </Button>
        </SNavLink>
      </div>
    </MainHeader>
  );
};

const SNavLink = styled(NavLink)`
  font-size: 3.5rem;
  margin-left: 10rem;
  text-decoration: none;
  color: #79a93b;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Header;
