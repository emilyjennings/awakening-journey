import FadeIn from 'react-fade-in';

import temple from '../images/temple.jpg'
import logo from '../images/LogoLight.png'
import { Link } from "react-router-dom";

import EmailListForm from './EmailListForm.js'

function About() {
  return (
    <div className="About">
      <h2>Created from Love</h2>
      <p>This website was created in November 2020 with a hope for the new era of love and awakening, where more of us start to understand our purpose and existence.</p>
      <p>There is community here in our <a href="https://join.slack.com/t/waking-upworkspace/shared_invite/zt-izfp06jo-j0jDznPIrbUseT_RCyXn~Q"><b>slack channel</b></a>, and there are resources to help you in the pages for <a href="https://awakening-journey.medium.com"><b>Blog</b></a> and <Link to="/meditation"><b>Meditation</b></Link>.</p>
      <p>If you are feeling a call to look closer at reality and identify your deeper self as well as your purpose, you are not alone. You are among friends here.</p>
      <FadeIn>
        <div className="temple">
          <img src={temple} alt="" />
        </div>
      </FadeIn>
      <FadeIn>
        <p>I'm Emily. I have journeyed into my soul and received the message that I am a healer. I was compelled to start this website and get to work to help others. It is my life's purpose.</p>
        <p>This website is still a baby. I am in the process of training to be a wellness coach. If you subscribe to my newsletter, you will hear updates on my status. I'll be adding offerings, services, and opening myself for clients in 2021.</p>
        <p>I'd love to connect, because that's why I am here. Let me know what I can do for you.</p>
      </FadeIn>
      <FadeIn>
        < EmailListForm />
      </FadeIn>
      <img src={logo} alt=""/>
    </div>

  );
}

export default About;
