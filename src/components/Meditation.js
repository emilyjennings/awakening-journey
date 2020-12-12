import meditation from '../images/meditation.JPG'
import { Link } from "react-router-dom";

function Meditation() {
  return (
    <div className="meditation">
      <div className="meditation-box">
        <img src={meditation} alt="meditation by the author" />
      </div>
      <div className="meditation-box">
        <p>Meditation is the key to unleashing your potential. It allows us to go beyond our limitations such as stress and fear, and see the beauty and purpose in reality.</p>
      </div>
      <div className="space"></div>
      <p className="update-note">This page is developing, so please check back later for resources about meditation. (Last updated: December 2020)</p>
    </div>

  );
}

export default Meditation;
