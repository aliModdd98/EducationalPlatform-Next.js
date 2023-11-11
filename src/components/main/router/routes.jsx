
import HomePage from './../pages/HomePage/HomePage';
import About from './../pages/About/About';
import NewsPage from './../pages/NewsPage/NewsPage';

import {Routes, Route } from 'react-router-dom';
const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    );
  };
  
  export default MainRoutes;