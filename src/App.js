
import { ThemeProvider } from '@material-ui/styles';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import themePrimary from './common/theme/themePrimary';
import LoginPage from './Pages/login';


function App() {
    return (
        <Fragment>
            <ThemeProvider theme={themePrimary}>
            {/*<Switch>*/}
            <Route exact path="/">
            <LoginPage/>
            </Route>
            {/*</Switch>*/}
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
