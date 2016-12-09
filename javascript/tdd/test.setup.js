/**
 * Jest tutorial
 * https://facebook.github.io/jest/docs/tutorial-react.html
 *
 * Redux - writing tests
 * https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
 *
 * enzyme basic usage
 * https://github.com/airbnb/enzyme#basic-usage
 *
 * chai API reference
 * http://chaijs.com/api/
 *
 * chai-enzyme docs
 * https://github.com/producthunt/chai-enzyme/blob/master/README.md
 *
 * chai-jsx docs
 * https://github.com/ckknight/chai-jsx
 */

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import { jsdom } from 'jsdom';

chai.use(chaiEnzyme());
chai.use(chaiJsx);

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
