import '../style/Body.css';
import lotus from '../images/flowerlogo.png'

import EmailListForm from './EmailListForm.js'

function Body() {
  return (

    <div className="Body">
      <div className="home-message">
        <div className="landing-message">
          <h3>You are not alone.</h3>
          <p class="new">This website is the old version and will be retired soon - <a href="www.shaktimindfulawakening.com">check me out at the new site here!</a></p>
          <p>Isn't it beautiful that life has brought you here?</p>
          <p>You've come to the right place if you are feeling the call to arrive at a higher version of yourself.</p>
          <p><a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-kc17udt1-4R6tHNHljVMX9qxKc8OiYg">Join our slack community</a> to connect with others about awakening.</p>
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
