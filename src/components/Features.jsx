import iconBrandRecognition from "../images/icon-brand-recognition.svg"
import iconDetailedRecords from "../images/icon-detailed-records.svg"
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";



const Features = () => {

    return (

      <div className="advancedStatistics_container">
      <h3>Advanced Statistics</h3>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      

      <div className="cards-container">
          <div className="card-line"></div>

          <div className="card-container" id="card-1">
              <div className="card-icon-container">
                  <div>
                      <img src={iconBrandRecognition} alt="" />
                  </div>
              </div>
              <h4 className="card-title">
                  Brand Recognition
              </h4>
              <p>
                  Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
              </p>
          </div>
          <div className="card-container" id="card-2">
              <div className="card-icon-container">
                  <div>
                      <img src={iconDetailedRecords} alt="" />
                  </div>
              </div>
              <h4 className="card-title">
                  Detailed Records
              </h4>
              <p>
                  Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </p>
          </div>

          <div className="card-container" id="card-3">
              <div className="card-icon-container">
                  <div>
                      <img src={iconFullyCustomizable} alt="" />
                  </div>
              </div>
              <h4 className="card-title">
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