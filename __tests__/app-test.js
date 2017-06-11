import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {App} from '../src/App';

describe('test <App /> component', () => {
  it('<App /> component renders <h1>', () => {
    expect(mount(<App />).find('h1').length).toBe(1);
  });
});
