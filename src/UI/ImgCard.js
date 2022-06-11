import styled from "styled-components";

const ImageCard = styled.section`
  min-height: 45rem;
  border-radius: 8rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem;
  box-shadow: 0px 14px 24px -11px rgb(4 5 4 / 50%);

  img {
    border-radius: 8rem;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 45%;
    width: 90%;
    bottom: 10%;
    transform: translate(-42%, 10%);
    color: #fff;
    text-align: center;
    font-weight: 600;
    font-size: 3rem;
    heigh: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default ImageCard;
