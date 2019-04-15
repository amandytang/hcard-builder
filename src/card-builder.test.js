import React from 'react';
import ReactDOM from 'react-dom';
import CardBuilder from './card-builder';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardBuilder />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("generates expected snapshot", () => {
  const wrapper = shallow(
    <CardBuilder />
  );

  expect(wrapper).toMatchSnapshot();
});

it('should capture given name correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(0);
  input.instance().value = 'Taco';
  input.simulate('change');
  expect(component.state().givenName).toEqual('Taco');
});

it('should capture surname correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(1);
  input.instance().value = 'Burrito';
  input.simulate('change');
  expect(component.state().surname).toEqual('Burrito');
});

it('should capture email correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(2);
  input.instance().value = 'taco@taco.com';
  input.simulate('change');
  expect(component.state().email).toEqual('taco@taco.com');
});

it('should capture phone correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(3);
  input.instance().value = '12345678';
  input.simulate('change');
  expect(component.state().phone).toEqual('12345678');
});

it('should capture house name correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(4);
  input.instance().value = 'Taco Factory';
  input.simulate('change');
  expect(component.state().houseName).toEqual('Taco Factory');
});

it('should capture street correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(5);
  input.instance().value = 'Taco Street';
  input.simulate('change');
  expect(component.state().street).toEqual('Taco Street');
});

it('should capture suburb correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(6);
  input.instance().value = 'TacoVille';
  input.simulate('change');
  expect(component.state().suburb).toEqual('TacoVille');
});

it('should capture state correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(7);
  input.instance().value = 'Taco County';
  input.simulate('change');
  expect(component.state().state).toEqual('Taco County');
});

it('should capture post code correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(8);
  input.instance().value = '2222';
  input.simulate('change');
  expect(component.state().postCode).toEqual('2222');
});

it('should capture country correctly in <CardBuilder /> onChange', () => {
  const component = mount(<CardBuilder />);
  const input = component.find('input').at(9);
  input.instance().value = 'Taco Country';
  input.simulate('change');
  expect(component.state().country).toEqual('Taco Country');
});
