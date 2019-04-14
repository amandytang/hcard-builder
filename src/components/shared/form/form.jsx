import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  if (this.props.handleChange) {
    this.props.handleChange(event);
  };
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

  render() {
    console.log("name value:", this.state.givenName)
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__header">Personal Details</div>
        <label>
          Given Name
          <input type="text" name="givenName" value={this.state.givenName} onChange={this.handleChange} />
        </label>
        <label>
          Surname
          <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
        </label>
        <label>
          Email
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Phone
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <div className="form__header">Address</div>
        <label>
          House Name or #
          <input type="text" name="houseName" value={this.state.houseName} onChange={this.handleChange} />
        </label>
        <label>
          Street
          <input type="text" name="street" value={this.state.street} onChange={this.handleChange} />
        </label>
        <label>
          Suburb
          <input type="text" name="suburb" value={this.state.suburb} onChange={this.handleChange} />
        </label>
        <label>
          State
          <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
        </label>
        <label>
          Post Code
          <input type="text" name="postCode" value={this.state.postCode} onChange={this.handleChange} />
        </label>
        <label>
          Country
          <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
