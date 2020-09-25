import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/About';
import SignUp from './pages/SignUp';
import MainPage from './pages/Main';
import { fetchUsers } from './redux/actions/users';
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
        <Container maxWidth="lg">

          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/about">
              <AboutPage />
            </Route>

            <Route path="/">
              <MainPage />
            </Route>
          </Switch>

        </Container>
      </Router>
    </div>
  );
}

export default App;
