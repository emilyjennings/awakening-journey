import meditation from '../images/meditation.JPG'
import logo from '../images/LogoLight.png'

import EmailListForm from './EmailListForm.js'

function Meditation() {
  return (
    <div className="meditation">
      <div className="meditation-box">
        <img src={meditation} alt="meditation by the author" />
      </div>
      <div className="meditation-box">
        <p>Meditation is the key to unleashing your potential. It allows us to go beyond our limitations such as stress and fear, and see the beauty and purpose in reality.</p>
        <p>There are two ways I teach meditation.</p>
        <p>One is to find complete inner peace.</p>
        <p>The second is to journey into yourself to find out who the 'self' really is.</p>
        <p>Subscribe to my newsletter and get a free four-step meditation guide that will help you reach alignment between self and the world.</p>
        <img src={logo} alt="logo"/>
      </div>
      <div className="space"></div>
      < EmailListForm />
      <p className="update-note">This page is developing, so please check back later for resources about meditation. (Last updated: December 2020)</p>
    </div>

  );
}

export default Meditation;
