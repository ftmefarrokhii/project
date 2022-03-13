import Membership from './Membership';
import SliderDiv from './SliderDiv';
import classes from './MembershipVsSlider.module.css';

const MembershipVsSlider = ()=>{
    return(
        <div className={classes.div}>
            
            <SliderDiv/>
            <Membership/>
        </div>

    );


}
export default MembershipVsSlider;