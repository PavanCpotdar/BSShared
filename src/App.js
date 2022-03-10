
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import Main from './main/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <Main/> */}
          <switch>
          <Route exact path="/"  >
            <LoginPage/>
        </Route>
        </switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
