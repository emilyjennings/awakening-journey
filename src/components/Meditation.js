import meditation from '../images/meditation.JPG'
import logo from '../images/LightLogo.png'

import EmailListForm from './EmailListForm.js'

function Meditation() {
  return (
    <div className="meditation">
      <div className="meditation-box">
        <img src={meditation} alt="meditation by the author" />
      </div>
      <div className="meditation-box">
        <p>Meditation is the key to unleashing your potential. It allows us to go beyond our limitations such as stress and fear, and see the beauty and purpose in reality.</p>
        <p>I teach meditation by guiding the self to inner peace and oneness, ultimately finding out who the 'self' really is.</p>
        <p>Anyone should be able to reach a higher state through meditation, which is why I am developing offerings and services to guide others there.</p>
        <p>Subscribe to <a href="https://f01b0c2b.sibforms.com/serve/MUIEAGBJmRlcGyXyfi8W1N1jxnXTseOtts1pCemmd1_P_8lNLN3BIGU1U3J2o6ni5HC5Pgsa0HcwXwlM2rfTS8stHbnUK8Piy63QVhdGKzwEomE3LqNROHnpJSI9qP8mKRh-3F3cwtCVJHckNzqV1Ee-B9Vn0QMP13vX6txFtqeOnmHRLFN6E7xJ3KLuEp3Ox0GIxcaWYtT1e1kY">my newsletter</a> and get a free four-step meditation guide that will help you reach alignment between self and the world.</p>
        <img src={logo} alt="logo"/>
      </div>
      <div className="space"></div>
      < EmailListForm />
      <p className="update-note">This page is developing, so please check back later for resources about meditation. (Last updated: December 2020)</p>
    </div>

  );
}

export default Meditation;
