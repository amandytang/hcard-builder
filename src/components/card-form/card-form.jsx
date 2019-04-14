import React, { Component } from 'react';
import './card-form.scss';
import Form from '../shared/form/form';

class CardForm extends Component {
  constructor(props) {
  super(props);

  this.handleChange = this.handleChange.bind(this);
  this.handleUpload = this.handleUpload.bind(this);
}

  handleChange(event) {
    if (this.props.handleChange) {
      this.props.handleChange(event);
    };
  }

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
