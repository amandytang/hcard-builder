import React, { Component } from 'react';
import './card-builder.scss';
import Form from '../shared/form/form';

class CardBuilder extends Component {
  render() {
    return (
      <div className="card-builder">
        <div className="card-builder__title">hCard Builder</div>
        <Form />
      </div>
    );
  }
}

export default CardBuilder;
