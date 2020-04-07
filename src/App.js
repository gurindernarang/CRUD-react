import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import {Container} from 'react-bootstrap';
import Header from './components/header';
import Comments from './components/comments';
import Posts from './components/posts';
import Users from './components/users';

function App() {
  return (
    <Container>
      <Router>
        <header>
          <Header></Header>
        </header>
        <Switch>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
