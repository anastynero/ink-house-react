import '../../style/App.css';
import Header from '../Header/Header';
import Catalog from '../Catalog/Catalog';
import Hero from '../Hero/Hero';
import Promo from '../Promo/Promo';
import Company from '../Company/Company';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <Catalog/>
      <Promo/>
      <Company/>
      <Footer/>
    </div>
  );
}

export default App;
