import { Fragment } from "react";
import classes from './Membership.module.css';

const Membership = () =>{
    return(
        <Fragment>
        <section className={classes['membership-section']}>
        <h1 className={classes['membership-h1']}>عضویت در خبرنامه</h1>
        <p className={classes['membership-p']}>با عضویت در خبرنامه از آخرین اخبار و جشنواره های ایباس باخبر شوید</p>
        <form className={classes['membership-form']}>
            <input className={classes['email-input']} type='email' placeholder="ایمیل خود را وارد کنید"></input>
            <button className={classes['submit-btn']}>ثبت</button>
        </form>
        </section>
        </Fragment>
    );
};

export default Membership;