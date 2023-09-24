// import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { Login } from 'pages/Login/Login';
import { Registration } from 'pages/Registration/Registration';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </>
  );
};
