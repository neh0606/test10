import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Tabcontent } from './Tabcontent/Tabcontent';
import { Tabimg } from './Tabimg/Tabimg';
import { Step } from './Step/Step';
import { Footer } from './Footer/Footer';
import { Blog } from './Blog/Blog';
import { Multitab } from './Multitab/Multitab';
import { Trapezoid } from './Trapezoid/Trapezoid';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Tabcontent />
      <Trapezoid/>
      <Step />
      <Tabimg />
      <Multitab/>
      <Blog />
      <Footer />
    </>
  )
}
export default App;