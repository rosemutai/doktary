import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './routes/About'
import ContactUs from './routes/ContactUs';
import BookAppointment from './routes/BookAppointment'
import PageNotFound from './routes/PageNotFound'

import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} exact />
        <Route path='about' element={<About />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='book-appointment' element={<BookAppointment />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
