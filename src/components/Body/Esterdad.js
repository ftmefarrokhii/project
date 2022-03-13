import classes from './Esterdad.module.css';
import { Fragment } from 'react';
import esterdadImage from '../../images/ret-tick.png';

const Esterdad = () =>{
    return(
    <Fragment>
        <section className={classes.esterdadsection}>
            <img className={classes.esterdadimg} src={esterdadImage} alt="esterdadImage"/>
            <div className={classes.esterdaddiv}>
            <h1 className={classes.esterdadh1}> استرداد بلیط اتوبوس یا کنسلی بلیط</h1>
            <p className={classes.esterdadp}>ایباس شرایط و قوانینی را فراهم کرده که شما بتوانید بلیط اتوبوس 
            خریداری شده خود را لغو کنید. مبلغ بلیط شما بدون هیج کسری به کیف پول خودتان در پنل کاربری ایباس
            بازمی گردد تا بتوانید بلیط بعدی خود را به راحتی تهیه کنید.برای اطلاع دقیق تر از قانون استرداد 
            بلیط اینترنتی اتوبوس به قوانین استرداد بلیط مراجعه کنید
            </p>
            </div>
        </section>
    </Fragment>
    );
};

export default Esterdad;