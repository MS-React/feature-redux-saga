import React from 'react';
import { shallow } from 'enzyme';
import UsersForm from './UsersForm';

function setup(props) {
  return shallow(<UsersForm {...props} />);
}

describe('<UsersForm /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      onChange: () => {},
      user: {}
    });

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('FormInput')).toHaveLength(4);
  });
});
