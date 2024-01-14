import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Feed, Video } from './components';

const App = () => (

   <Router>
   <Routes>
     <Route index element={<Feed />} />
     <Route path="/video/:videoId" element={<Video />} />
   </Routes>
 </Router>
);

export default App;
