import React from 'react';
import { shallow, mount } from 'enzyme';
// import { render } from 'enzyme';

jest.unmock('../appname');

import AppName from '../appname';
import Tab from '../components/tab';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<AppName />).contains(
      <div className="AppName">
        <Tab />
        <div className="Side">side</div>
        <div className="Main">main</div>
      </div>
    )).toBe(true);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<AppName />).is('.AppName')).toBe(true);
  });

  it('contains spec with an expectation', () => {
    expect(mount(<AppName />).find('.Side').length).toBe(1);
    expect(mount(<AppName />).find('.Main').length).toBe(1);
  });
});
