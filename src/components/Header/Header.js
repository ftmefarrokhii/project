import { Fragment } from 'react';
import headerImage from '../../images/bus.jpg';
import classes from './Header.module.css';
import MainHeader from './MainHeader';

const Header = () =>{
    return(
        <Fragment>
            <div className={classes['main-image']}>
                <img src={headerImage} alt="Ebus headerImage"/>
                <h1>ایباس:سفری سریع راحت و به صرفه </h1>
                <button className={classes.loginbutton}>ورود</button>
                <button className={classes.signupbutton}>عضویت</button>
            </div>
        <MainHeader/>
        </Fragment>
    );
};
export default Header;