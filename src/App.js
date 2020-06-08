import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
     <LoginForm/>
     <Footer/>
    </div>
  );
}

export default App;
