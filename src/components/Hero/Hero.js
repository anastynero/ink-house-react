import '../../style/App.css';
import image from '../../img/hero-image.png';
function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className='hero-wrapper'>
          <div className='hero-image'>
            <img src={image} alt='hero'/>
          </div>
          <div className='hero-text'>
            <h1>Реплики картин от <span>Ink. House</span></h1>
            <p classname='standard-text'>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
            <a className="btn" href='#'>Продукция</a>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Hero;