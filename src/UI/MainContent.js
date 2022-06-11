import styled from "styled-components";

const MainContent = styled.section`
  margin-top: 13vh;
  width: 100%;
  height: 87vh;
  display: flex;
  position: relative;

  img {
    position: absolute;
    height: 700px;
    margin-top: 25px;
    right: 0;
    transform: rotate(30%);
  }

  div {
    width: 69%;

    h1 {
      position: absolute;
      letter-spacing: 0.15rem;
      font-size: 8rem;
      color: #474747;
      position: absolute;
      top: 25%;
      left: 10%;
      span {
        font-size: 8rem;
        color: #79a93b;
      }
    }
    p {
      font-size: 2.5rem;
      position: absolute;
      letter-spacing: 0.15rem;
      top: 58%;
      left: 10%;
    }
  }
`;

export default MainContent;
