import '../style/Body.css';
import lotus from '../images/lotus2.jpg'

import EmailListForm from './EmailListForm.js'

function Body() {
  return (

    <div className="Body">
      <div className="home-message">
        <div className="landing-message">
          <h3>You are not alone.</h3>
          <p>Isn't it beautiful that life has brought you here?</p>
          <p>This resource for your awakening is growing and expanding, just like we are. Have fun browsing, check back later for updates, and join us.</p>
        </div>
        <div className="landing-message">
          <div className="lotus-img">
            <img src={lotus} alt="By Rui Xu on Unsplash" />
          </div>
          <div className="link-box">
            <a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-izfp06jo-j0jDznPIrbUseT_RCyXn~Q">Join Our Slack Community</a>
          </div>
        </div>
      </div>
      <div className="space"></div>
      < EmailListForm />
    </div>

  );
}

export default Body;
