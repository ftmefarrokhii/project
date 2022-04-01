import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {

    const[seconds,setSeconds]=useState(0);
    const[minutes,setMinutes]=useState(2);

    
    useEffect(()=>{
        const timer=setInterval(()=>{
  
            if (seconds > 0) {
                setSeconds(seconds-1)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer)
                } 
                else {
                    setMinutes(minutes - 1)
                    setSeconds(59)    
                }

            }   
        },500)
        return ()=>clearInterval(timer)
    });

    return(
        <p>{minutes<10? "0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</p>

    );
}

export default Timer;

  // useEffect(() => {
    //     const timer = setInterval(() => {
    //       setProgress((oldProgress) => {

    //         if (oldProgress === 100) {
    //           return;

    //         }
    //         return ((oldProgress)=> oldProgress+1)
    //         // const diff = Math.random() * 10;
    //         // return Math.min(oldProgress + diff, 100);
    //       });
    //     }, 2000);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
