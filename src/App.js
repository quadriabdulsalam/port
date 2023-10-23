import React from 'react';
import Navbar from './component/navbar';
import Main from './component/main';
import Work from './component/work';
import Project from './component/project';
import Contact from './component/contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Work/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
