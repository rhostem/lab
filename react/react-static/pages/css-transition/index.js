/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import styles from './styles.css';
import TransitionGroup from 'react-addons-css-transition-group';


class CssTransitionTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ['hello', 'world', 'click', 'me']
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }


  componentDidMount() {
    document.title = 'css-transition';
  }


  handleAdd() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    var items = this.state.items.map(function(item, i) {
      return (
        // global import
        // <div className={styles.example} key={item} onClick={this.handleRemove.bind(this, i)}>
        <div className={styles.example} key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));

    return (
      <Layout>
        <button onClick={this.handleAdd}>Add Item</button>
        <TransitionGroup
          transitionName={{
            enter: styles.exampleEnter,
            enterActive: styles.exampleEnterActive,
            leave: styles.exampleLeave,
            leaveActive: styles.exampleLeaveActive,
          }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </TransitionGroup>
      </Layout>
    );
  }
}

export default CssTransitionTest;
