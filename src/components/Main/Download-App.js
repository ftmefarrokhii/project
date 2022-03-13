import classes from './Download-App.module.css';
import {Fragment} from 'react';
import downloadIcon from '../../images/download-icon.png';
import bazarImage from '../../images/bazar.png';
import mobileImage from '../../images/mobile.png';
const DownloadApp =()=>{
    return (
        <Fragment>
            <div className={classes['download-div']}>
            <section className={classes.textsection}>
                <h3 className={classes['download-h1']}>دانلود اپلیکیشن ایباس</h3>
                <p className={classes['download-p']}> با استفاده از اپلیکیشن ایباس، به راحتی بلیط خود را تهیه نمایید و از مزایای آن برخوردار شوید </p>
              
                <div className={classes['btns-div']}>
                <button className={classes['download-btn']}>
                    <div className={classes['btn-div']} >
                        <p className={classes['btn-text']}>دانلود از بازار</p>  
                        <img className={classes.icon} src={bazarImage} alt="bazarImage"/>
                    </div>
                </button>

                <button className={classes['download-btn']}>
                    <div className={classes['btn-div']} >
                        <p className={classes['btn-text']}> دانلود مستقیم</p>  
                        <img className={classes.icon} src={downloadIcon} alt="downloadIcon"/>
                    </div>
                </button>
                </div>
                
            </section>

            <section className={classes.imgsection}>
            <img src={mobileImage} alt="mobileImage"  className={classes['mobile-img']}/>
            </section>
            </div>
       
        </Fragment>


    );

};

export default DownloadApp;