import styled from "styled-components";

const ImageCard = styled.section`
  min-height: 32rem;
  border-radius: 8rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem;
  box-shadow: 0px 14px 24px -11px rgb(4 5 4 / 50%);
  cursor: pointer;

  img {
    border-radius: 8rem;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  p {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    width: 90%;
    heigh: 40%;
    left: 45%;
    bottom: 10%;
    color: #fff;
    font-weight: 600;
    font-size: 2rem;
    transform: translate(-42%, 10%);
  }
`;

export default ImageCard;
