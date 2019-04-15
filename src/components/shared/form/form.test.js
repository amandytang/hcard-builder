import React from 'react';
import Form from './form';
import sinon from 'sinon';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it("generates expected snapshot", () => {
  const wrapper = shallow(
    <Form />
  );

  expect(wrapper).toMatchSnapshot();
});

it("calls handleUpload on change of Upload Avatar button", () => {
  const handleUpload = sinon.spy();
  const form = mount(
    <Form handleUpload={handleUpload} />
  );

  const uploadButton = form.find('input').at(10);
  uploadButton.simulate('change');

  expect(handleUpload.calledOnce).toBe(true);
});