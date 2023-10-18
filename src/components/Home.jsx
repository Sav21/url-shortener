import welcomeImage from '../images/illustration-working.svg';
import Features from './Features';
import UrlShortener from './url-shortening/UrlShortener';
import "../App.scss"

const Home = () => {
    return (

        <>

            <div>
                <div className='home'>
                    <div>
                        <h1>More then just shorter links</h1>
                        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
                        <button>Get started</button>
                    </div>
                    <img src={welcomeImage} alt="Home image" />
                </div>
            </div>

            <div className="stats-bg">
                <UrlShortener />
                <Features />
            </div>





            <div className="py-5 getStarted">
                <div>
                    <h1>Boost your links today</h1>
                    <button>Get Started</button>
                </div>

            </div>

        </>
    )
}
export default Home;