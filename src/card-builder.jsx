import React, { Component } from 'react';
import './card-builder.scss';
import CardForm from './components/card-form/card-form'
import CardPreview from './components/card-preview/card-preview'

class CardBuilder extends Component {
  constructor(props) {
  super(props);
  this.state = {

  };

  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  if (event.target) {
    this.setState({[event.target.name]: event.target.value});
  }
}

  render() {
    return (
      <div className="card-builder">
        <CardForm
          handleChange={this.handleChange}
        />
        <CardPreview
          givenName={this.state.givenName}
          surname={this.state.surname}
          email={this.state.email}
          phone={this.state.phone}
          houseName={this.state.houseName}
          street={this.state.street}
          suburb={this.state.suburb}
          postCode={this.state.postCode}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default CardBuilder;
