import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout.js';
import Home from './Components/Pages/Home.js';
import ContactUs from './Components/Pages/ContactUs.js'
import PageNotFound from './Components/Pages/PageNotFound.js';
import SignIn from './Components/Pages/SignIn.js';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='*' element={<PageNotFound />} /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
} 

export default App;
