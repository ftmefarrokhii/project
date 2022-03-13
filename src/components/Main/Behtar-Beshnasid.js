import { Fragment } from "react";
import classes from './Behtar-Beshnasid.module.css';
import ebusImage from '../../images/ebus.jpg';

const BehtarBeshnasid = ()=>{
    return(
        <Fragment>
            
            <h2 className={classes.moarefih2}>ایباس را بهتر بشناسید</h2>

            <div className={classes.behtarbeshnasiddiv}>
                <img src={ebusImage} alt="ebusImage"  className={classes.behtarbeshnasidimg}/>
                <div className={classes.textdiv}>
                   <p className={classes.behtarbeshnasidp}>معرفی ایباس"ایباس اولین سامانه حمل و نقل هوشمند بین شهری اتوبوسی“ که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به مسافران ,آغاز کرده است. تا بتواند برای تمام افراد امکان سفری امن ,خدماتی مقرون به صرفه و با کیفیت بالا در ناوگان اتوبوسی فراهم کند. ما در این مسیر ملزم به اخذ مجوز‌های لازم برای ارائه خدمات قانونی به شما بودیم ,تمام فعالیت‌های ایباس قانونی بوده و تحت نظارت سازمان راهداری و حمل و نقل جاده ای کشور انجام می‌شود. ایباس یک پلتفرم قابل اعتماد و کارآمد که با شناسایی نیازهای مشتری و سنجش مشکلات سفرهای اتوبوسی به دنبال رفع مشکلات و برآورده کردن نیازهای اولیه مشتری با ارائه راه‌حل های لجستیک و مشتری مداری با تعهد به برتری و کیفیت خدمات به منظور رقابت و بهینه سازی هزینه‌ها و ایجاد شبکه امن در حمل و نقل عمومی می‌باشد.</p>
                </div>
            </div>

        </Fragment>
        
    );

};

export default BehtarBeshnasid;