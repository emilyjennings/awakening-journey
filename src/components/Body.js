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
          <p>You've come to the right place if you are feeling the call to arrive at a higher version of yourself.</p>
          <p>This resource for your awakening is growing and expanding, just like we are. Sign up for my newsletter for updates!</p>
          <p><a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-izfp06jo-j0jDznPIrbUseT_RCyXn~Q">Join our slack community</a> to connect with others about awakening.</p>
        </div>
        <div className="landing-message">
          <div className="lotus-img">
            <img src={lotus} alt="By Rui Xu on Unsplash" />
          </div>
          < EmailListForm />
        </div>
      </div>
    </div>

  );
}

export default Body;
