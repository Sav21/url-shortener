import twitterIcon from '../images/icon-twitter.svg';
import facebookIcon from '../images/icon-facebook.svg';
import instagramIcon from '../images/icon-instagram.svg';
import pinterestIcon from '../images/icon-pinterest.svg';

const Footer = () => {
    return (
      <>
      <div className="footer-container">
      <h2>Shortly</h2>

      <div className="footer-block">
          <ul>
          <h6>Features</h6>
              <li><a href="">Link Shortening</a></li>
              <li><a href="">Branded Links</a></li>
              <li><a href="">Analytics</a></li>
          </ul>
      </div>
      <div className="footer-block">
          <ul>
          <h6>Resources</h6>
              <li><a href="">Blog</a></li>
              <li><a href="">Developers</a></li>
              <li><a href="">Support</a></li>
          </ul>
      </div>
      <div className="footer-block">
          <ul>
          <h6>Company</h6>
              <li><a href="">About</a></li>
              <li><a href="">Our Team</a></li>
              <li><a href="">Contact</a></li>
          </ul>
      </div>
      <div className="footer-block footer-social">
          <a href="#"><img src={facebookIcon} alt="fb" /></a>
          <a href="#"><img src={twitterIcon} alt="tw" /></a>
          <a href="#"><img src={pinterestIcon} alt="pt" /></a>
          <a href="#"><img src={instagramIcon} alt="ig" /></a>
      </div>
  </div>
      </>
    )
}

export default Footer;