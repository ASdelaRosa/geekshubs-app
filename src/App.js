import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { IndexView } from './view/IndexView'; 
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<IndexView/>}/>
        <Route path="/*" element={<h1>Not found</h1>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
