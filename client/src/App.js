import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Navbar } from './components/Navbar';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import MainPage from './pages/Main/Main';
import { fetchUsers, fetchRandomData } from './redux/actions/users';
import Container from '@material-ui/core/Container';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <MainPage />
            </Route>
          </Switch>

      </Router>
    </div>
  );
}

export default App;
