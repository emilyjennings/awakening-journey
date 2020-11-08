import { BrowserRouter, Route } from "react-router-dom";

import './style/App.css';
import Banner from './components/Banner.js'
import Body from './components/Body.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Contact from './components/Contact.js'


function App() {
  return (
      <BrowserRouter >
            < Banner />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Body} />
            <Route exact path="/contact" component={Contact} />
            < Footer />



      </ BrowserRouter >
  );
}

export default App;
