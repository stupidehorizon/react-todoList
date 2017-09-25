import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import App from './routers/App';
import AllList from './routers/AllList';
import TodoList from './routers/TodoList';
import DoingList from './routers/DoingList';
import DoneList from './routers/DoneList';
import createStoreFunc from './stores';
import './index.less';

const store = createStoreFunc();
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={AllList} />
                <Route path="/todo" component={TodoList} />
                <Route path="/doing" component={DoingList} />
                <Route path="/done" component={DoneList} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root'),
);
