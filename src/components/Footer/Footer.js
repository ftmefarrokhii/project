import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import { Fragment } from 'react';
import logoImage from '../../images/logo.png';
import footerBazar from '../../images/footerbazar.png';
import footerGoogleplay from '../../images/footergoogleplay.png';
import FooterDown from './FooterDown'

const Footer = ()=>{
    return(
        <Fragment>
        <section className={classes.footer}>
        <div className={classes.footerdiv}>
            <h3 >ایباس</h3>
            <ul >
                <li>
                    <a class="list-unstyled" href='/Extradition'>استرداد بلیط</a>
                </li>
                <li> 
                    <a href='/mag'>درباره ما</a>
                </li>
                <li> 
                    <a href='/mag'> تماس با ما</a>
                </li>
                <li> 
                    <a href='/mag'> فرصت های شغلی</a>
                </li>
                <li> 
                    <a href='/mag'> سوالات متداول</a>
                </li>
            </ul>
                
        </div>
        <div className={classes.footerdiv}>
            <h3 >راهنما</h3>
            <ul >
                <li>
                    <a  href='/Extradition'>سوالات متداول</a>
                </li>
                <li> 
                   <a href='/mag'>قوانین و مقررات</a>
                </li>
                <li> 
                   <a href='/mag'> راهنمای خرید</a>
                </li>
                <li> 
                    <a href='/mag'>حقوق مسافر</a>
                </li>
                <li> 
                    <a href='/mag'>حقوق مشتریان</a>
                </li>
                <li> 
                    <a href='/mag'>سرویس دربستی</a>
                </li>
            </ul>
        </div>
        <div className={classes.footerdownloadapp}>
            <h3 >دانلود اپلیکیشن</h3>
            <div className={classes.imgsdiv}>
                <img src={footerBazar} alt="Ebus footerBazarImage"/>
                <img src={footerGoogleplay} alt="Ebus footerGoogleplay"/>
            </div>
            
            <p>شماره تماس:02171057305</p>
            <p>فکس:33737912,33737932</p>
            <p>آدرس پست الکترونیکی:info@ebus.ir</p>
        </div>
        <div className={classes.logodiv}>
            <img className={classes.footerimg} src={logoImage} alt="Ebus logoImage"/>
        </div>    
        </section>
        <FooterDown/>
    </Fragment>
    
        

    );


};

export default Footer;