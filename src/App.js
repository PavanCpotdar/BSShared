
import { ThemeProvider } from '@material-ui/styles';
import { Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import themePrimary from './common/theme/themePrimary';
import ClientPage from './Pages/client';
import DashboardPage from './Pages/dashboard';
import LoginPage from './Pages/login';


function App() {
    return (
        <Fragment>
            <ThemeProvider theme={themePrimary}>
          
            
            <Route exact path="/">
            <LoginPage/>
            </Route>
            <Route exact path='/dashboard'>
            <DashboardPage/>
            </Route>
            <Route exact path='/client'>
            <ClientPage/>
            </Route>
           
    
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
