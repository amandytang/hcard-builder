import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

/**
 * @description handler to be called when user makes an input in the form
 */
handleChange(event) {
  if (this.props.handleChange) {
    this.props.handleChange(event);
  };
}

/**
 * @description handler to be called when user submits the form
 * TODO: Validate the user's input and save the hCard
 */
handleSubmit(event) {
  alert('Creating your hCard...');
  event.preventDefault();
}

/**
 * @description handler to be called when user clicks 'Upload'
 */
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
            <input type="text" required name="givenName" value={this.state.givenName} onChange={this.handleChange} />
          </label>
          <label>
            Surname
            <input type="text" required name="surname" value={this.state.surname} onChange={this.handleChange} />
          </label>
          <label>
            Email
            <input type="text" required name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Phone
            <input type="tel" required name="phone" value={this.state.phone} onChange={this.handleChange} />
          </label>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <label>
            House Name or #
            <input type="text" required name="houseName" value={this.state.houseName} onChange={this.handleChange} />
          </label>
          <label>
            Street
            <input type="text" required name="street" value={this.state.street} onChange={this.handleChange} />
          </label>
          <label>
            Suburb
            <input type="text" required name="suburb" value={this.state.suburb} onChange={this.handleChange} />
          </label>
          <label>
            State
            <input type="text" required name="state" value={this.state.state} onChange={this.handleChange} />
          </label>
          <label>
            Post Code
            <input type="number" required name="postCode" value={this.state.postCode} onChange={this.handleChange} />
          </label>
          <label>
            Country
            <input type="text" required name="country" value={this.state.country} onChange={this.handleChange} />
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

Form.propTypes = {
  handleUpload: PropTypes.func,
  handleChange: PropTypes.func,
}
