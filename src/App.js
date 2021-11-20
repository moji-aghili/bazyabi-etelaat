import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// PAGES
import Posts from './pages/Posts';
import Post from './pages/Post';
import Users from './pages/Users'
import User from './pages/User';
import Home from './pages/Home';


function App() {
  
  return (
    <Router >
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/post/:id" component={Post} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
