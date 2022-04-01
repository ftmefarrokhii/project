import { Fragment } from 'react';
import { Modal, Button } from 'antd';
import classes from './Header.module.css';
import MainHeader from './MainHeader';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect } from 'react';
import Timer from './Timer'

const Header = (props) =>{
const[modalVurud,setModalVurud]=useState(false);
const[modalCode,setModalCode]=useState(false);
const[enteredPhoneNumber,setEnteredPhoneNumber]= useState();
const [progress, setProgress] = useState(0);

const[showError,setShowError]=useState(false);

let showErrorMessage = <p>phone number must be valid</p>
  const sendCodeHandler =(event)=>{
    event.preventDefault();
    console.log(enteredPhoneNumber);
    
    if(enteredPhoneNumber.trim().length === 0 ||enteredPhoneNumber.trim().length <10){
        setModalCode(false);
        setModalVurud(true);
        setShowError(true);
        console.log("incorrect");
    }else{
        setModalCode(true);
        setModalVurud(false);
    }
    }
    
    const modalVurudHandler=()=>{
        setModalVurud(true); 
        setShowError(false);
    }

    const phoneNumberChangeHandler =event=>{
        setEnteredPhoneNumber(event.target.value)
    }

       useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => prev + 1);
            if (progress === 100) {
                return;
            }
            }, 1200);
            return () => {
                clearInterval(interval);
                };
        } , []);

    return(
        <Fragment> 
            <div className={classes['main-image']}>
            <nav class="navbar navbar-light justify-content:left">
            <div class="row d-flex">
            <div className={classes.container}>
                <button type="primary" onClick={modalVurudHandler} style={{color:"red",backgroundColor:"transparent",border:"1px solid transparent"}} >ورود</button>
                <button type="primary" style={{color:"red",backgroundColor:"transparent",border:"1px solid transparent"}}>عضویت</button>
           
            {modalVurud && (<Modal
            className={classes.modal}
            title="ورود"
            centered
            visible={modalVurud}
            onOk={() => setModalVurud(false)}
            onCancel={() => setModalVurud(false)}
            >
            <p>برای ادامه شماره موبایل خود را وارد کنید.</p>
            <div className={classes.modaldiv}>
            <input 
            className={classes.modalinput}
            value={enteredPhoneNumber}
            type="text" 
            placeholder="شماره تلفن"
            onChange={phoneNumberChangeHandler}
            ></input>
            <label className={classes.numberlabel}>+98</label>
            </div>
            
            {showError && (showErrorMessage)}

            <button type="submit" onClick={sendCodeHandler}
            className={classes.modalbtn}>تایید و دریافت کد</button> 
            </Modal>)}
            
            {modalCode && (
            <Modal
            className={classes.modal}
            title="کد را وارد کنید"
            centered
            visible={modalCode}
            onOk={() => setModalCode(false)}
            onCancel={() => setModalCode(false)}
            >
            <p>کد 6 رقمی به شماره {enteredPhoneNumber} ارسال شد</p>
            <div className={classes.inputsdiv}>
            <input className={classes.input}></input>
            <input className={classes.input}></input>
            <input className={classes.input}></input>
            <input className={classes.input}></input>
            <input className={classes.input}></input>
            <input className={classes.input}></input>
            </div>

            <Box sx={{ width:'80%',margin:"1rem"}}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            
            <p class="d-flex">ارسال مجدد کد:<Timer></Timer></p>

            <button type="submit" className={classes.modalbtn}>تایید </button>
            </Modal>
            )}
                </div>
                </div>
                </nav>
                {/* <h1>ایباس:سفری سریع راحت و به صرفه </h1>  */}
            </div>

        <MainHeader/>
        </Fragment>
    );
};
export default Header;