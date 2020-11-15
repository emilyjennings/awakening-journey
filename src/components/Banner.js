import stars from '../images/stars.jpg'

function Banner() {
  return (
    <div className="Banner">
      <div className="stars-image">
        <img src={stars} alt="" />
      </div>
      <h1>Awakening Journey</h1>
      <h3>You are not alone.</h3>
    </div>

  );
}

export default Banner;
