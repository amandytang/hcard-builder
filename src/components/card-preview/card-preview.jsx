import React, { Component } from 'react';
import './card-preview.scss';

class CardPreview extends Component {
  constructor(props) {
  super(props);

  this.generateFullName = this.generateFullName.bind(this);
  this.generateStreetAddress = this.generateStreetAddress.bind(this);
}

  generateFullName() {
    const givenName = this.props.givenName ? this.props.givenName : '';
    const surname = this.props.surname ? this.props.surname : '';
    const fullName = `${givenName} ${surname}`;
    return fullName;
  };

  generateStreetAddress() {
    const houseName = this.props.houseName ? this.props.houseName : '';
    const street = this.props.street ? this.props.street : '';
    const streetAddress = `${houseName} ${street}`;
    return streetAddress;
  };

  render() {


    return (
      <div className="card-preview">
        <div className="card-preview__content">
          <div className="card-preview__title">
            hCard Preview
          </div>
          <div className="card-preview__card-frame">
            <div className="card-preview__color-block"/>
            <div className="h-card">
              <div className="p-name">{this.generateFullName()}</div>
              <div className="u-email">
                <span className="label">Email</span> <span className="formOutput"> {this.props.email}</span>
              </div>
              <div className="p-tel">
                <span className="label">Phone</span> <span className="formOutput"> {this.props.phone}</span>
              </div>
              <div className="p-street-address">
                <span className="label">Address</span> <span className="formOutput">{this.generateStreetAddress()}</span>
              </div>
              <div className="p-locality">
                <span className="label"> </span><span className="formOutput">{this.props.suburb} <span className="p-region">{this.props.state}</span></span>
              </div>
              <div className="p-postal-code">
                <span className="label">Post Code</span> <span className="formOutput">{this.props.postCode}</span> <span className="label"><span className="p-country-name">Country</span><span className="formOutput"> {this.props.country}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;
