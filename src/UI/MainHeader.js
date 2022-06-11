import styled from "styled-components";

const MainHeader = styled.header`
  top: 0;
  position: fixed;
  background: #fff;
  z-index: 100;
  padding: 1rem;
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: -10px 11px 15px -5px rgba(0, 0, 0, 0.3);

  svg {
    color: #79a93b;
    font-size: 5rem;
  }

  h1 {
    font-size: 4rem;
    color: #79a93b;
  }

  div {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  span {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
`;

export default MainHeader;
