import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Placement from './pages/insights';
import InsightData from './pages/insightData';
import TestList from './pages/testList';
import CodingTest from './pages/coding';
import Result from './pages/result';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/insights' element={<Placement />}/>
        <Route path='/insights/:slug' element={<InsightData/>}/>
        <Route path='/mocktest' element={<TestList/>}/>
        <Route path="/test/:id" element={<CodingTest/>} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
