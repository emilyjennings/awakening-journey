import temple from '../images/temple.jpg'
import { Link } from "react-router-dom";

import EmailListForm from './EmailListForm.js'

function About() {
  return (
    <div className="About">
      <h2>Created from Love</h2>
      <p>This website was created in November 2020 with a hope for the new era of love and awakening, where more of us start to understand our purpose and existence. There is community here in our slack channel, and there is a growing number of resources in the pages for <a href="https://awakening-journey.medium.com">Blog</a> and <Link to="/meditation">Meditation Help</Link>.</p>
      <p>If you are feeling a call to look closer at reality and identify your deeper self as well as your purpose, you are not alone. You are among friends here.</p>
      <div className="temple">
        <img src={temple} alt="" />
      </div>
      < EmailListForm />
    </div>

  );
}

export default About;
