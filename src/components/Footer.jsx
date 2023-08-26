import './Footer.css'
import twitterIcon from '../assets/twitter-icon.svg'
import facebookIcon from '../assets/facebook-icon.svg'
import instagramIcon from '../assets/instagram-icon.svg'
import githubIcon from '../assets/github-icon.svg'

export default function Footer() {
  return (
    <footer className='card-footer'>
      <img className="social-media-icons" src={twitterIcon} alt="" />
      <img className="social-media-icons" src={facebookIcon} alt="" />
      <img className="social-media-icons" src={instagramIcon} alt="" />
      <img className="social-media-icons" src={githubIcon} alt="" />
    </footer>
  )
}