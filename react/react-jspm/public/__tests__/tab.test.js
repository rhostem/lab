import React from 'react';
import { shallow, mount } from 'enzyme';

jest.unmock('../components/tab');

import Tab from '../components/tab';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<Tab />).contains(
      <ul className="Tab">
        <li className="Tab-item">tab 1</li>
        <li className="Tab-item">tab 2</li>
        <li className="Tab-item">tab 3</li>
        <li className="Tab-item">tab 4</li>
      </ul>
    )).toBe(true);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<Tab />).is('.Tab')).toBe(true);
  });

  it('contains spec with an expectation', () => {
    expect(mount(<Tab />).find('.Tab').length).toBe(1);
    expect(mount(<Tab />).find('.Tab-item').length).toBe(4);
  });
});
