import temple from '../images/temple.jpg'

function About() {
  return (
    <div className="About">
      <div className="temple">
        <img src={temple} alt="" />
      </div>
      <h3>Created from Love</h3>
      <p>This website was created with a hope for the new era of love and awakening, where more of us start to understand our purpose and existence.</p>
      <p>Created by Emily Jennings on November 7, 2020, this is still being built, but the hope is that it will be a community-driven initiative. It will be a free resource for information, inspiration and connection.</p>

    </div>

  );
}

export default About;
