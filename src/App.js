import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import PageNotFound from "./components/layout/PageNotFound";
import About from "./components/layout/About";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import Provider from "./Context";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header branding="Contacts Manager" />
          <div className="container padding">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/addcontact" component={AddContact} />
              <Route exact path="/editcontact/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="" component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
