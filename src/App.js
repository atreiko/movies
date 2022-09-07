import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import 'swiper/swiper.min.css'
import './assets/icons/css/boxicons.css'
import './App.scss';

import Layout from './components/layout/Layout';
import { Catalog, Detail, Home } from './pages';

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      <Routes location={location.pathname}>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=':category' element={<Catalog />} />
          <Route path=':category/search/:keyword' element={<Catalog />} />
          <Route path=':category/:id' element={<Detail />} />
        </Route>

      </Routes>
    </div>

  );
}

export default App;
