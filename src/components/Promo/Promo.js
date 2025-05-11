import '../../style/App.css';
import star from './../../img/star.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='container'>
        <div className='promo__content'>
          <div className='promo__title'>
            <img src={star} alt=""/>
            <h2>Новая коллекция французских авторов</h2>
          </div>
          <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к&nbsp;новым свершениям, 
            которые, в&nbsp;свою очередь, должны быть заблокированы в&nbsp;рамках своих собственных рациональных ограничений. 
        Принимая во&nbsp;внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность 
        направлений прогрессивного развития.</p>
        <button className="btn-yellow">Ознакомиться</button>
        </div>
      </div>
    </section>
  );
}

export default Promo;