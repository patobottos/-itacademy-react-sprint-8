import {FooterContainer} from './Footer.styled';
import Logos from "../Logos/Logos";
import logo1 from '../../assets/logos/logo-facebook.png';

const Footer = () => {

  return (
    <FooterContainer>
      <div><p>More From Star Wars:</p></div>

      <div className='icons'>
        <img src={logo1}></img>
        <img src={require('../../assets/logos/logo-facebook.png')} />
      
        <img src={Logos.facebook} />
        <img src={Logos.instagram} />
        <img src={Logos.twitter} />
        <img src={Logos.youtube} />
      </div>
      
      <div><p>TM & © Lucasfilm Ltd. All Rights Reserved</p></div>
      
      <div>
        <ul>
          <li>Terms of Use<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Additional Content Information<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Privacy Policy<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Children's Online Privacy Policy<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Your California Privacy Rights<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Star Wars at shopDisney<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Star Wars Helpdesk<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Interest-Based Ads<div className='laser'></div></li>
          <div className='grey-bar'></div>
          <li>Do Not Sell My Personal Information<div className='laser'></div></li>
        </ul>
      </div>
      
    </FooterContainer>
  )
}

export default Footer;