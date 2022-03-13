import aparatImage from '../../images/aparat.png';
import facebookImage from '../../images/facebook.png';
import instagramImage from '../../images/Instagram.png';
import linkedinImage from '../../images/linkedin.png';
import pinterestImage from '../../images/pinterest.png';
import twitterImage from '../../images/twitter.png';
import ebusLogo from '../../images/Ebus-logo-white.png';
import { Fragment } from 'react';
import classes from './FooterDown.module.css'
const FooterDown =()=>{
    return(
        <Fragment>
        <section className={classes.footerdown}>
        <div className={classes.textdiv}>
            <img src={ebusLogo} alt="Ebus LogoImage"/>
            <p>کلیه حقوق این سایت محفوظ و متعلق به راهکار سفر سروین میباشد</p>
        </div>
        <div className={classes.appsdiv}>
        <img src={linkedinImage} alt="Ebus linkedinImage"/>
        <img src={twitterImage} alt="Ebus twitterImage"/>
        <img src={pinterestImage} alt="Ebus  pinterestImage"/>
        <img src={aparatImage} alt="Ebus aparatImage"/>
        <img src={facebookImage} alt="Ebus facebookImage"/>
        <img src={instagramImage} alt="Ebus instagramImage"/>

        </div>
        </section>
        </Fragment>


    );

}
export default FooterDown;