import styled from "styled-components";

const AddBtn = styled.button`
  z-index: 50;
  width: 5rem;
  height: 5rem;
  padding: 3rem;
  margin-right: 1rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #82bd3c, #65932f);
  color: #fff;
  font-weight: 600;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1.1);
    font-size: 3.2rem;
    background: linear-gradient(180deg, #82bd3c, #75bc20);
  }
`;

export default AddBtn;
