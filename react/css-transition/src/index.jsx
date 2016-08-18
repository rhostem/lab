import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.css';
import React from 'react';
import { render } from 'react-dom';

import TransitionGroup from 'react-addons-css-transition-group';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ['hello', 'world', 'click', 'me']
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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
      <div>
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
      </div>
    );
  }
}

render(<App/>, document.querySelector("#app"));
