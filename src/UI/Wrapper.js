import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 15vh;
  height: 87vh;
  padding: 2rem 5rem;
  position: relative;

  h3 {
    font-size: 3.5rem;
    margin-bottom: 5rem;
    color: #79a93b;

    &::before {
      left: 31%;
      position: absolute;
      content: "";
      height: 0.1rem;
      width: 64%;
      background: rgba(121, 169, 59, 0.8);
      top: 54px;
    }
  }
  span {
    font-size: 3.5rem;
    color: #414141;
  }
`;

export default Wrapper;
