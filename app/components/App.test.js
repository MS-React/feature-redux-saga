import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

function setup(props) {
  return shallow(<App {...props} />);
}

describe('<App /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      store: {
        subscribe: function () { },
        dispatch: function () { },
        getState: function () { }
      },
      history: {}
    });

    expect(wrapper.find('Provider')).toHaveLength(1);
    expect(wrapper.find('ConnectedRouter')).toHaveLength(1);
  });
});
