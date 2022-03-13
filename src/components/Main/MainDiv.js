import easyImage from '../../images/easy.png';
import expressImage from '../../images/express.png';
import economicImage from '../../images/economic.png';
import classes from './MainDiv.module.css';
import { Fragment } from 'react';

const MainDiv =() =>{
    return(
        <Fragment>
        <section className={classes['main-section']}>
        <div className={classes['main-div']}>
            <img src={easyImage} alt="easyImage"  className={classes['main-div-img']}/>
            <h3  className={classes['main-div-h3']}>راحت</h3>
            <p  className={classes['main-div-p']}>با چند کلیک ساده بلیط تهیه و در کمال آرامش سفر کنید</p>
        </div>
        
        <div className={classes['main-div']}>
            <img src={expressImage} alt="expressImage"  className={classes['main-div-img']}/>
            <h3  className={classes['main-div-h3']}>سریع</h3>
            <p  className={classes['main-div-p']}>سریع و بدون معطلی سفر کنید و نگران تاخیر نباشید</p>
        </div>      
        
        <div className={classes['main-div']}>
            <img src={economicImage} alt="economicImage"  className={classes['main-div-img']}/>
            <h3  className={classes['main-div-h3']}>به صرفه</h3>
            <p  className={classes['main-div-p']}>ارزان تر و مقرون به صرفه تر از هر جای دیگر بلیط تهیه کنید</p>
        </div>
        </section>
        </Fragment>

    );

};

export default MainDiv;