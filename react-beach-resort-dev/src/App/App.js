import "./App.css";
// import react-router-dom
import { Route, Switch } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import SingleRoom from "../Pages/SingleRoom";
import Booking from "../Pages/booking";
import Registration from "../Pages/Registration";
import LoginForm from "../Pages/LoginForm";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/rooms/booking" component={Booking} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/LoginForm" component={LoginForm} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
