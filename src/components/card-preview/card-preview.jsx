import React, { Component } from 'react';
import './card-preview.scss';

class CardPreview extends Component {
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
              <div className="p-name">{this.props.givenName}</div>
              <div className="u-email">{this.props.email}</div>
              <div className="p-tel">{this.props.phone}</div>
              <div className="p-street-address">{this.props.street}</div>
              <div className="p-locality">{this.props.suburb}</div><div className="p-p-region">{this.props.state}</div>
              <div className="p-postal-code">{this.props.postCode}</div>
              <div className="p-country-name">{this.props.country}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardPreview;
