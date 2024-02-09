import Nevbar from './Component/Nevbar';
import Timer from './Component/Timer';
import Events from './Component/Events';
import AboutUs from './Component/AboutUs';
import Sponsors from './Component/Sponsors';
import ContactUs from './Component/ContactUs';
import sulogo from './Assets/sulogo.png';
import './App.css';
// import './style.scss';

function App() {
  return (

    <div className="app">
      <div className="environment">
        <div className="sulogo">
          <a href="https://shooliniuniversity.com/">
            <img src={sulogo} alt="Logo" height={40} width={70} />
          </a>
        </div>
        <div className='home' id='home'>
          <div className='main'>
            <div className="hero-container">
              {/* </div> */}
              <h1 className="hero glitch layers" data-text="glitch"><span>GLITCH</span></h1>
              <br />
              <h3 className='subtitle'><span><b>UNLEASHING INNOVATION</b></span></h3>
            </div>
            <div className='timer'><Timer /></div>
          </div>
        </div>
        <Nevbar />
        <div className='components' id='about'>
          <AboutUs />
        </div>
        <div className='components' id='events'>
          <Events />
        </div>
        <div className='components' id='sponsors'>
          <Sponsors />
        </div>
        <div className='components' id='contact'>
          <ContactUs />
        </div>

      </div>
    </div>



  );
}

export default App;
