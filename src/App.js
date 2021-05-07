import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SigninAndSignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
