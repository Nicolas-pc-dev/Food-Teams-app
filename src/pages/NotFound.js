import React from "react";
import styled from "styled-components";
import WavesOpacity from "../UI/WavesOpacity";
import tomato from "../assets/Tomato.jpg";

const NotFound = () => {
  return (
    <MainNotFound>
      <section>
        <img src={tomato} alt="Tomato" />
        <article>
          <p>Oooooops!</p> <br />
          <h1>
            PAGE{" "}
            <span>
              NOT <br /> FOUND
            </span>
          </h1>
        </article>
      </section>
      <div>
        <WavesOpacity />
      </div>
    </MainNotFound>
  );
};

export default NotFound;

const MainNotFound = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 13vh;

  display: flex;
  justify-content: center;
  align-items: center;

  article {
    margin-left: 5rem;
  }

  p {
    font-size: 5rem;
    color: #414141;
  }
  h1 {
    margin-top: 2rem;
    font-size: 5rem;
    color: #79a93b;
  }

  span {
    color: #414141;
    font-size: 5rem;
  }

  section {
    width: 70%;
    height: 80%;
    display: flex;
    align-items: center;
  }

  img {
    width: 50%;
  }

  div {
    width: 100%;
    height: 20%;
    transform: rotate(180deg);
    position: absolute;
    bottom: 0;
  }
`;
