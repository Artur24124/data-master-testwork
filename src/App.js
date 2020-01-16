import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFound';
import Main from './components/Main';
import Orders from './containers/Orders';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <div className='content'>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={(props) => <Main {...props} />}
                        />
                        <Route
                            exact
                            path='/orders'
                            render={(props) => <Orders {...props} />}
                        />
                        <Route
                            path='*'
                            render={(props) => <NotFound {...props} />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
