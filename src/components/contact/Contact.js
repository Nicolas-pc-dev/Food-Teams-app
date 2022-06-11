import React from "react";
// Styles
import ContactContainer from "../../UI/ContactStyles";
import Button from "../../UI/Button";
// Local Image
import image from "../../assets/Veggie-Bacon.png";
// -----------------------------------------------------------------
const Contact = () => {
  return (
    <ContactContainer>
      <span>
        <img src={image} alt="Veggie-Bacon" />
      </span>
      <section>
        <h2>Contact Us !</h2>
        <form>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name"></input>
          </div>
          <div>
            <input type="email" placeholder="email address"></input>
            <input type="number" placeholder="Phone Number"></input>
          </div>
          <textarea rows="50" cols="10" placeholder="Comment..." />
        </form>
        <Button> Submit Now </Button>
      </section>
    </ContactContainer>
  );
};

export default Contact;
