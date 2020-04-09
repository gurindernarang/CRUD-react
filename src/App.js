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
        <Header></Header>
        <Switch>
          <Route exact path="/"><Posts /></Route>
          <Route exact path="/comments"><Comments /></Route>
          <Route exact path="/users"><Users /></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
