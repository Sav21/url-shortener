import welcomeImage from '../images/illustration-working.svg';
import Features from './Features';
import UrlShortener from './url-shortening/UrlShortener';

const Home = () => {
return (

<>

    <div>
        <div className='home-container'>
            <div className='home-content'>
            <h1 className='home-h1'>More then just shorter links</h1>
            <p className='home-p'>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <button className='home-btn'>Get started</button>
            </div>
            <img src={welcomeImage} alt="Home image" className='home-img'/>
        </div>
    </div>

    <div className="stats-bg">
        <UrlShortener />
        <Features />
    </div>





    <div className="py-5 bg-darkV">
        <div className='getStarted'>
        <h1 style={{color: 'white', fontSize: "40px"}}>Boost your links today</h1>
        <button className='getStarted-btn'>Get Started</button>
        </div>
        
    </div>
    
</>
    )
}
export default Home;