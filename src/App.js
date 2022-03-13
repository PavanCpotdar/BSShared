import {ThemeProvider} from '@material-ui/styles';
import {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import themePrimary from './common/theme/themePrimary';
import LoginPage from './Pages/login';
import CONSTANTS from "./common/constants";
import Dashboard from "./Pages/dashboard";
import Homepage from "./Pages/homepage";
import ClientPage from "./Pages/client";
import DevicesPage from "./Pages/Devices";
import SettingsPage from "./Pages/Settings";


function App() {
    return (
        <Fragment>
            <ThemeProvider theme={themePrimary}>
                <Switch>
                    <Route exact path="/">
                        <LoginPage/>
                    </Route>

                    <Homepage>
                        <Route exact path={CONSTANTS.LINK_DASHBOARD}>
                            <Dashboard/>
                        </Route>
                        <Route path={CONSTANTS.LINK_CLIENT}>
                            <ClientPage/>
                        </Route>
                        <Route path={CONSTANTS.LINK_DEVICES}>
                            <DevicesPage/>
                        </Route>
                        <Route path={CONSTANTS.LINK_SETTINGS}>
                            <SettingsPage/>
                        </Route>
                    </Homepage>
                </Switch>
            </ThemeProvider>
        </Fragment>
    );
}

export default App;
