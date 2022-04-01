import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect } from 'react';
import { useState } from 'react';
import * as React from 'react';
const Progress=()=>{
    const [progress, setProgress] = useState(0);

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
        <Box sx={{ width:'80%',margin:"1rem"}}>
            <LinearProgress variant="determinate" value={progress} />
        </Box>

    );

}
export default Progress;