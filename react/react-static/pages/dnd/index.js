import React, { Component, PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class DropDrop extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  static defaultProps = {
    name: 'name',
  };

  state = {
    isNameVisible: true,
  };

  render() {
    return (
      <Layout>
        <div>{this.props.name}</div>
      </Layout>
    );
  }
}

export default DropDrop;
