
import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import LoginPage from './components/login';
import Main from './main/Main';


function App() {
  return (
    <div className="App">
          <Main/>
    </div>
  );
=======
import LoginPage from './Pages/login';


function App() {
    return (
        <Fragment>
            {/*<Switch>*/}
            {/*<Route exact path="/">*/}
            <LoginPage/>
            {/*</Route>*/}
            {/*</Switch>*/}
        </Fragment>
    );
>>>>>>> 81f265c26989bf45e145fa0da4e6af349b2eb901
}

export default App;
