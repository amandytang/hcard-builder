import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card-preview.scss';
import placeholderAvatar from '../../avatar.png';

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

  generateAvatarImage() {
    const avatar = this.props.avatar ? this.props.avatar : placeholderAvatar;
    return avatar;
  }

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
              <div className="card-preview__avatar">
                <img className="u-photo" src={this.generateAvatarImage()} alt="userAvatar"/>
              </div>
              <div className="p-name">{this.generateFullName()}</div>
              <div className="card-preview__row">
                <span className="label">Email</span> <span className="formOutput u-email"> {this.props.email}</span>
              </div>
              <div className="card-preview__row">
                <span className="label">Phone</span> <span className="formOutput"> {this.props.phone}</span>
              </div>
              <div className="card-preview__row">
                <span className="label">Address</span> <span className="formOutput p-street-address">{this.generateStreetAddress()}</span>
              </div>
              <div className="card-preview__row">
                <span className="label"> </span><span className="formOutput p-locality">{this.props.suburb} <span className="p-region">{this.props.state}</span></span>
              </div>
              <div className="card-preview__row left half">
                <span className="label">Post Code</span> <span className="formOutput p-postal-code">{this.props.postCode}</span>
              </div>
              <div className="card-preview__row half">
                <span className="label">Country</span>
                <span className="formOutput p-country-name">{this.props.country}</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default CardPreview;

CardPreview.propTypes = {
  givenName: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  street: PropTypes.string,
  houseName: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  postCode: PropTypes.string,
  country: PropTypes.string,
  avatar: PropTypes.string,
  handleChange: PropTypes.func,
}
