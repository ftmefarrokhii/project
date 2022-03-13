import classes from './Ticket.module.css';
import ticketImage from '../../images/ticket.png'

import { Fragment } from 'react';
const Ticket = () =>{
    return(
        <Fragment>
            <section className={classes.ticketsection}>
                <div className={classes.ticketdiv}>
                <h1 className={classes.ticketh1}>بلیط اتوبوس</h1>
                <p className={classes.ticketp}>ایباس اولین سامانه حمل و نقل هوشمند بین شهری است که فعالیت  خود را از سال 1400 با هدف بهبود خدمات 
                    ارائه شده به مسافران آغاز کرده است.ایباس بهترین قیمت بلیط های بین شهری را ارایه میدهد
                    و شما میتوانید قیمت بلیط های ایباس را با سایر شرکت های فروش بلیط مقایسه کنید
                </p>
                </div>
                <img className={classes.ticketimg} src={ticketImage} alt="ticketImage"/>

            </section>
        </Fragment>


    );


};

export default Ticket;