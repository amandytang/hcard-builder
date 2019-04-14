import React, { Component } from 'react';
import './form.scss';

class Form extends Component {
  constructor(props) {
  super(props);
  this.state = {
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleUpload = this.handleUpload.bind(this);
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

handleUpload(event) {
  if (this.props.handleUpload) {
    this.props.handleUpload(event);
  };
}

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
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
        </fieldset>
        <fieldset>
          <legend>Address</legend>
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
        </fieldset>
        <div className="form__button-container">
          <input type="file" name="file" id="file" className="uploadButton" onChange={this.handleUpload} />
          <label htmlFor="file">Upload Avatar</label>
          <input type="submit" className="submitButton" value="Create hCard" />
      </div>
      </form>
    );
  }
}

export default Form;
