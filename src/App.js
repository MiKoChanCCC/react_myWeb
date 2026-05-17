import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Myself from './pages/Myself';
import Video from './pages/Video';
import Preview from './pages/Preview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/myself" element={<Myself />} />
        <Route path="/video" element={<Video />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;
