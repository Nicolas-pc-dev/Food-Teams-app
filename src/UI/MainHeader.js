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
    font-size: 4rem;
    position: absolute;
    left: 9.5rem;
    top: 1.7rem;
  }

  h1 {
    font-size: 3rem;
    color: #79a93b;
  }

  div {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  span {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
`;

export default MainHeader;
