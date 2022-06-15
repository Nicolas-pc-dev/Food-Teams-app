import styled from "styled-components";

const AddBtn = styled.button`
  position: absolute;
  z-index: 50;
  bottom: 2rem;
  left: 50rem;
  height: 5rem;
  padding: 3rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #82bd3c, #65932f);
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(180deg, #82bd3c, #75bc20);
  }
`;

export default AddBtn;
