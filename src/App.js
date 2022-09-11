import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Detail from './pages/book/Detail';
import Home from './pages/book/Home';
import SaveForm from './pages/book/SaveForm';
import UpdateForm from './pages/book/UpdateForm';
import LoginForm from './pages/user/LoginForm';
import JoinForm from './pages/user/JoinForm';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/saveForm" exact={true} element={<SaveForm />} />
        <Route path="/book/:id" exact={true} element={<Detail />} />
        <Route path="/loginForm" exact={true} element={<LoginForm />} />
        <Route path="/joinForm" exact={true} element={<JoinForm />} />
        <Route path="/updateForm/:id" exact={true} element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
