import iconBrandRecognition from "../images/icon-brand-recognition.svg"
import iconDetailedRecords from "../images/icon-detailed-records.svg"
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";



const Features = () => {

    return (

      <div className="stats">
      <h3>Advanced Statistics</h3>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      

      <div className="cards">
          <div className="card-line"></div>

          <div className="card" id="card-1">
              <div className="icon">
                  <div>
                      <img src={iconBrandRecognition} alt="" />
                  </div>
              </div>
              <h4>
                  Brand Recognition
              </h4>
              <p>
                  Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
              </p>
          </div>
          <div className="card" id="card-2">
              <div className="icon">
                  <div>
                      <img src={iconDetailedRecords} alt="" />
                  </div>
              </div>
              <h4>
                  Detailed Records
              </h4>
              <p>
                  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </p>
          </div>

          <div className="card" id="card-3">
              <div className="icon">
                  <div>
                      <img src={iconFullyCustomizable} alt="" />
                  </div>
              </div>
              <h4>
                  Fully Customizable
              </h4>
              <p>
                  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </p>
          </div>
      </div>
  </div>
    )
}

export default Features;