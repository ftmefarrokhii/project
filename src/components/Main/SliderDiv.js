
import React, { Component } from "react";
import Slider from "react-slick";
import sliderImage from '../../images/slider.png';
import classes from './SliderDiv.module.css';
import { Fragment } from "react";
const SliderDiv=()=> {
    
    return ( 
      <Fragment>
        <div className={classes.sliderdiv} >
          <div className={classes.sliderdivimg}>
            <img src={sliderImage} alt="sliderImage"  className={classes.sliderimg}/>
          </div>
          <div className={classes.sliderdivtext}>
          <h3>شانس بهت رو کرده</h3>
          <p>با استفاده از تقویم قیمتی شما میتوانید کمترین و بیشترین قیمت بلیط پرواز را در روزهای قبل و بعد از آن تاریخ مشاهده کنید</p>
          <button className={classes.button}>بیشتر بخون</button>
          </div>
        </div>
      </Fragment>
    );
}
export default SliderDiv;