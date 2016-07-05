import React from 'react'
import ReactDOM from 'react-dom'
import store from './store.js'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import MyContainer from './components/MyContainer.js'
import EditorPage from './container/EditorPage.js'
import PreviewPage from './container/PreviewPage.js'

var rootEl=document.getElementById('root');
const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={MyContainer} >
                <IndexRoute component={EditorPage} />
                <Route path="/editor" component={EditorPage} />
                <Route path="/preview" component={PreviewPage} />
            </Route>
        </Router>
    </Provider>,
    rootEl
)





