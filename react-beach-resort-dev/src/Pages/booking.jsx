import React from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// imports components
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
import BookingContainer from "../Components/Booking/BookingContainer";
// import Registration from "../Components/Register/Registration";

function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Payment Page">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    <BookingContainer/>
    {/* <Registration/> */}
      
    </>
  );
}

export default Room;
