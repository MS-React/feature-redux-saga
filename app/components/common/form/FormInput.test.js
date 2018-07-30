import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './FormInput';

function setup(props) {
  return shallow(<InputForm {...props} />);
}

describe('<InputForm />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  it('should be defined', () => {
    expect(InputForm).toBeDefined();
  });

  it('should be a function', () => {
    expect(InputForm).toEqual(expect.any(Function));
  });

  it('should have a <FormGroup /> wrapper', () => {
    expect(wrapper.is('FormGroup')).toBe(true);
  });

  it('should have one <Label />', () => {
    expect(wrapper.find('Label')).toHaveLength(1);
  });

  it('should have one `label` with class `sr-only`', () => {
    expect(wrapper.find('label.sr-only')).toHaveLength(1);
  });

  it('should have one `Input`', () => {
    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('should have one <FormFeedback />', () => {
    expect(wrapper.find('FormFeedback')).toHaveLength(1);
  });

  it('should add a `type` attribute', () => {
    wrapper = setup({ type: 'email' });

    expect(wrapper.find('Input').prop('type')).toBe('email');
  });

  it('should add a `name` attribute', () => {
    wrapper = setup({
      name: 'foo'
    });

    expect(wrapper.find('Input').prop('name')).toBe('foo');
  });

  it('should add a `placeholder` attribute', () => {
    wrapper = setup({
      placeholder: 'foo'
    });
  
    expect(wrapper.find('Input').prop('placeholder')).toBe('foo');
  });

  it('should append `*` to the `Label` when `required` param is true', () => {
    wrapper = setup({
      label: 'Foo',
      required: true
    });

    const label = wrapper.find('Label');  
    
    expect(label.dive().text()).toBe('Foo*');
  });

  it('should display Feedback when `feedback` param is passed in', () => {
    wrapper = setup({
      feedback: 'foo'
    });

    const formFeedback = wrapper.find('FormFeedback');  
    
    expect(formFeedback.dive().text()).toBe('foo');
  });
});
