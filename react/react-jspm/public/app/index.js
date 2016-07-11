import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { createHashHistory } from 'history';
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import Root from './components/root';
import Main from './components/common/main';

import Todo from './components/todo/Todo';
import List from './components/list';
import DangerMarkup from './components/danger-markup';
import HistoryHandle from './components/history-handle';
class App extends React.Component {
  componentWillMount() {
    this.forceUpdate(); // force update even react-router warns
  }

  render() {
    return (
      // <Router history={appHistory} >
      // <Router >
      <Router history={browserHistory}>
        <Route path="/" component={Root}>
          <IndexRoute component={Main} />
          <Route path="todo" component={Todo} />
          <Route path="list" component={List} />
          <Route path="danger-markup" component={DangerMarkup} />
          <Route path="history-handle(/:id)" component={HistoryHandle} />
          <Route path="*" component={Main} />
        </Route>
      </Router>
    );
  }
}

export default App;

render((
  <App />
), document.getElementById('app'));

// ReactDOM.render((
//   <ReactStudy />
// ), document.getElementById('app'));
