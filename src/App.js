import React from 'react';
import logo from './logo.svg';
import './App.css';
import IssueList from './components/IssueList'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <IssueList />
      </header>
    </div>
  );
}

export default App;
