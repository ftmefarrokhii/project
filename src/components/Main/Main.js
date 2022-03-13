import MainDiv from './MainDiv'
import DownloadApp from "./Download-App";
import MembershipVsSlider from './MembershipVsSlider';
import BehtarBeshnasid from './Behtar-Beshnasid';
import CollapseSection from './CollapseSection';
import { Fragment } from 'react';
import SliderDiv from './SliderDiv'

const Main =()=>{
    return(
        <Fragment>
            <MainDiv/>
            <MembershipVsSlider/>
            <DownloadApp/>
            <BehtarBeshnasid/>
            <CollapseSection/>
        </Fragment>
    );
};

export default Main;