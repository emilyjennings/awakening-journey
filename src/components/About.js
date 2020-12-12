import FadeIn from 'react-fade-in';

import temple from '../images/temple.jpg'
import { Link } from "react-router-dom";

import EmailListForm from './EmailListForm.js'

function About() {
  return (
    <div className="About">
      <h2>Created from Love</h2>
      <p>This website was created in November 2020 with a hope for the new era of love and awakening, where more of us start to understand our purpose and existence. There is community here in our slack channel, and there are resources to help you in the pages for <a href="https://awakening-journey.medium.com"><b>Blog</b></a> and <Link to="/meditation"><b>Meditation Help</b></Link>.</p>
      <p>If you are feeling a call to look closer at reality and identify your deeper self as well as your purpose, you are not alone. You are among friends here.</p>
      <FadeIn>
        <div className="temple">
          <img src={temple} alt="" />
        </div>
      </FadeIn>
      <FadeIn>
        < EmailListForm />
      </FadeIn>
    </div>

  );
}

export default About;
