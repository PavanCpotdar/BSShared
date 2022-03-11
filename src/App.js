
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/login';


function App() {
    return (
        <Fragment>
            {/*<Switch>*/}
            <Route exact path="/">
            <LoginPage/>
            </Route>
            {/*</Switch>*/}
        </Fragment>
    );
}

export default App;
