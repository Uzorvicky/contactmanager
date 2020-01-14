import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";

class Contact extends Component {
  state = {
    display: false
  };

  showContact = () => {
    this.setState({
      display: !this.state.display
    });
  };

  deleteContact = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/:${id}`)
      .then(dispatch({ type: "CONTACT_DELETE", payload: id }));
  };

  render() {
    const { name, email, phone, address, id } = this.props.contact;
    const { display } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card pad-1">
              <h5>
                {name}{" "}
                <i
                  onClick={this.showContact}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  onClick={this.deleteContact.bind(this, id, dispatch)}
                  className="fas fa-times"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "red",
                    marginRight: 7
                  }}
                ></i>
                <Link to={`editcontact/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "blue",
                      marginRight: 5
                    }}
                  ></i>
                </Link>
              </h5>
              {display ? (
                <ul className="collection">
                  <li className="collection-item">{email}</li>
                  <li className="collection-item">{phone}</li>
                  <li className="collection-item">{address}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
