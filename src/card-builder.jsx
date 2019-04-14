import React, { Component } from 'react';
import './card-builder.scss';
import CardForm from './components/card-form/card-form'
import CardPreview from './components/card-preview/card-preview'

/*
 * Internal state for the <CardBuilder /> component
 *  file {String} - Avatar image file uploaded by the user
*/
class CardBuilder extends Component {
  constructor(props) {
  super(props);
  this.state = {
    file: null,
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleUpload = this.handleUpload.bind(this);
}

/**
 * @description handler to be called when user makes an input in the form
 */
handleChange(event) {
  if (event.target) {
    this.setState({[event.target.name]: event.target.value});
  }
}

/**
 * @description handler to be called when user clicks 'Upload'
 * Takes the file object uploaded by the user and creates a temporary local URL with it
 * TODO: Store the file permanently
 */
handleUpload(event) {
  this.setState({
    file: URL.createObjectURL(event.target.files[0])
  });
}

  render() {
    return (
      <div className="card-builder">
        <CardForm
          handleChange={this.handleChange}
          handleUpload={this.handleUpload}
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
          state={this.state.state}
          country={this.state.country}
          avatar={this.state.file}
        />
      </div>
    );
  }
}

export default CardBuilder;
