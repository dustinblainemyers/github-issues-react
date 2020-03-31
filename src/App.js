import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import IssueDetail from './components/IssueDetail'
import IssueList from './components/IssueList'


function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={IssueList}/>
        <Route path="/issue/:issue_number?" component={IssueDetail}/>
      </Router>
    </div>
  );
}

export default App;
