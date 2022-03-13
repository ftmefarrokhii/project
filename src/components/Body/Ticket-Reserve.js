import classes from './Ticket-Reserve.module.css';
import { Fragment } from 'react';
import reserveImage from '../../images/rezerv.png';

const TicketReserve = () =>{
    return(
    <Fragment>
        <section className={classes.reservesection}>
            <img className={classes.reserveimg} src={reserveImage} alt="reserveImage"/>

            <div className={classes.reservediv}>
            <h1 className={classes.reserveh1}>رزرو بلیط اتوبوس  </h1>
            <p className={classes.reservep}>
            در هفت روز هفته می توانید بلیط اتوبوس خود را رزرو کنید و مطمئن باشید که به صرفه ترین
             .قیمت بلیط همراه با بهترین امکانات رفاهی را رزرو کرده اید 
            مسافرینی که از سایت ایباس و اپلیکیشن به صورت اینترنتی اقدام به تهیه بلیط اتوبوس می کنند در طول سفر 
            از خدمات مطلوب رفاهی بهره مند خواهند شد. تیم خدمات مشتریان ایباس صبورانه 
            در کنار شما خواهند بود تا سفری خاطره انگیز را برایتان به ارمغان بیاورند.
            </p>
            </div>
           
        </section>
    </Fragment>
    );

};

export default TicketReserve;