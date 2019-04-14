import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card-form.scss';
import Form from '../shared/form/form';

class CardForm extends Component {
  constructor(props) {
  super(props);

  this.handleChange = this.handleChange.bind(this);
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
   * @description handler to be called when user clicks 'Upload'
   */
  handleUpload(event) {
    if (this.props.handleUpload) {
      this.props.handleUpload(event);
    };
  }

  render() {
    return (
      <div className="card-form">
        <div className="card-form__title">hCard Builder</div>
        <Form
          handleChange={this.handleChange}
          handleUpload={this.handleUpload}
        />
      </div>
    );
  }
}

export default CardForm;

CardForm.propTypes = {
  handleUpload: PropTypes.func,
  handleChange: PropTypes.func,
}
