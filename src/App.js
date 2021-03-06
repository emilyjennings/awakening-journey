import { BrowserRouter as Router, Route } from 'react-router-dom';

import './style/App.css';
import Banner from './components/Banner.js'
import Body from './components/Body.js'
import Strip from './components/Strip.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Meditation from './components/Meditation.js'
import Blog from './components/Blog.js'
import Footer from './components/Footer.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faMedium, faSlack } from '@fortawesome/free-brands-svg-icons'
// import { } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faMedium, faSlack)



function App() {
  return (
      <Router >
        <div className="App">
            < Banner />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Body} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/meditation" component={Meditation} />
            <Route exact path="/blog" component={Blog} />
            < Strip />
            < Footer />
        </div>
      </ Router >
  );
}

export default App;
