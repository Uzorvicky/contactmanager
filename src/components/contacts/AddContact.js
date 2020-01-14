import React, { Component } from "react";
import { Consumer } from "../../Context";
import InputText from "../layout/InputText";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    errors: {}
  };

  handleChanges = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, address, phone } = this.state;

    // form Validation and error Checks
    if (name === "") {
      this.setState({
        errors: { name: "name cannot be empty" }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: { email: "email cannot be empty" }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "Phone cannot be empty" }
      });
      return;
    }
    if (address === "") {
      this.setState({
        errors: { address: "name cannot be empty" }
      });
      return;
    }
    const newContact = {
      name,
      email,
      address,
      phone
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    this.setState({ name: "", phone: "", email: "", address: "", errors: {} });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, address, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card-panel row">
              <div className="card-header">
                <h5>Add Contact</h5>
              </div>
              <form
                className="card-body"
                onSubmit={this.handleSubmit.bind(this, dispatch)}
              >
                <InputText
                  type="text"
                  name="name"
                  label="Enter Name"
                  onChange={this.handleChanges}
                  value={name}
                  error={errors.name}
                />

                <InputText
                  type="text"
                  name="email"
                  label="Enter Valid Email"
                  onChange={this.handleChanges}
                  value={email}
                  error={errors.email}
                />

                <InputText
                  type="text"
                  name="phone"
                  label="Enter Valid Phone"
                  onChange={this.handleChanges}
                  value={phone}
                  error={errors.phone}
                />

                <div className="input-field col s6">
                  <label htmlFor="name" className="blue-text">
                    Enter Address
                  </label>
                  <textarea
                    className="materialize-textarea"
                    name="address"
                    value={address}
                    onChange={this.handleChanges}
                  ></textarea>
                  <span className="helper-text"></span>
                </div>
                <div className="input-field col s6">
                  <input
                    type="submit"
                    value="add"
                    className="btn blue dark-text"
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
