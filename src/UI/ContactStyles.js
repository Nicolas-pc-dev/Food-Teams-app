import styled from "styled-components";

const ContactContainer = styled.div`
  width: 100%;
  height: 87vh;
  margin-top: 13vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #d7d7d7, #fff);

  span {
    width: 40%;
    height: 65%;
    margin-left: 10rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  section {
    width: 60%;
    height: 100%;
    padding: 8rem 10rem 2rem;

    button {
      margin-left: 5rem;
    }

    h2 {
      font-size: 5rem;
      margin-left: 5rem;
      color: #414141;
      letter-spacing: 0.1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 88%;
      height: 70%;
      padding: 2rem 5rem;

      div {
        display: flex;
        justify-content: space-between;
      }

      input {
        padding: 1.5rem;
        width: 30rem;
        border: none;
        border-radius: 1rem;
        font-size: 1.8rem;
        letter-spacing: 0.1rem;
        background: #ccc;
      }

      textarea {
        font-family: "Montserrat";
        font-size: 2rem;
        padding: 1.5rem;
        border: none;
        border-radius: 1rem;
        background: #ccc;
        color: #000;
      }
    }
  }
`;
export default ContactContainer;
