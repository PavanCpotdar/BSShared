import React, {Fragment} from "react";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/login';
import Homepage from "./Pages/Homepage";


function App() {
    return (
        <Fragment>
            <Homepage/>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
            </Switch>
        </Fragment>
    );
}

export default App;
