import React from 'react'
import './Footer.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer__socialIcons">
            <FacebookIcon className='socialIcon'/>
            <InstagramIcon className='socialIcon'/>
            <TwitterIcon className='socialIcon'/>
            <YouTubeIcon className='socialIcon'/>
        </div>
        <div className="footer__cols">
            <div className="footer__col">
                <ul>
                    <li> Audio and Subtitles </li>
                    <li> Press </li>
                    <li> Privacy </li>
                    <li> Contact Us </li>
                </ul>
            </div>
            <div className="footer__col">
                <ul>
                    <li>Descriptive Audio </li>
                    <li>Relationship with Investors </li>
                    <li>Legal Notice </li>
                </ul>
            </div>
            <div className="footer__col">
                <ul>
                    <li>Help Center</li>
                    <li>Careers</li>
                    <li>Cookis preferences</li> 
                </ul>
            </div>
            <div className="footer__col">
                <ul>
                    <li>Gift Cards </li>
                    <li>Terms of use </li>
                    <li>Corporate Information</li>
                </ul>
            </div>
        </div>
        <div className="footer__button">
            <button>Service Code</button>
        </div>
        <div className="footer__copyright">
           <CopyrightIcon className='copyRight'/> MOVIE HUB
        </div>
    </div>
  )
}

export default Footer