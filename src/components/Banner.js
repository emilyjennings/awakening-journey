import stars from '../images/stars.jpg'

function Banner() {
  return (
    <div className="Banner">
      <div className="stars-image">
        <img src={stars} alt="" />
        <h1>Awakening Journeys</h1>
      </div>
    </div>

  );
}

export default Banner;
