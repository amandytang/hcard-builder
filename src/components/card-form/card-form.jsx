import React, { Component } from 'react';
import './card-form.scss';
import Form from '../shared/form/form';

class CardForm extends Component {
  constructor(props) {
  super(props);

  this.handleChange = this.handleChange.bind(this);
}

  handleChange(event) {
    if (this.props.handleChange) {
      this.props.handleChange(event);
    };
  }

  render() {
    return (
      <div className="card-form">
        <div className="card-form__title">hCard Builder</div>
        <Form
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CardForm;
