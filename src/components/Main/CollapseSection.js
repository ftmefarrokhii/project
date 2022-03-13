import { Collapse } from 'antd';
import { Fragment } from 'react';
import classes from './CollapseSection.module.css';
import questionImage from '../../images/question.png';


const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
function callback(key) {
  console.log(key);
}

const CollapseSection = () =>{
  return(
  <Fragment>
    <section className={classes.generalsection} >
    <h2>سوالات متداول</h2>
  <Collapse className={classes.collapse} onChange={callback}>
    <Panel className={classes.panel} 
      showArrow={false}
      header={
        <div className={classes.headerdiv}>
          <img src={questionImage} alt="questionImage" className={classes.headerimg}/>
          <p className={classes.headerp}>چه زمانی میتوانیم اقدام به خرید بلیط کنیم؟</p>
        </div>}
      key="1" >
      <p>{text}</p>
    </Panel>
    <Panel className={classes.panel} 
      showArrow={false}
      header={
        <div className={classes.headerdiv}>
          <img src={questionImage} alt="questionImage" className={classes.headerimg}/>
          <p className={classes.headerp}>چه زمانی میتوانیم اقدام به خرید بلیط کنیم؟</p>
        </div>}
      key="2" >
      <p>{text}</p>
    </Panel>
    <Panel className={classes.panel} 
      showArrow={false}
      header={
        <div className={classes.headerdiv}>
          <img src={questionImage} alt="questionImage" className={classes.headerimg}/>
          <p className={classes.headerp}>چه زمانی میتوانیم اقدام به خرید بلیط کنیم؟</p>
        </div>}
      key="3" >
      <p>{text}</p>
    </Panel>
    <Panel className={classes.panel} 
      showArrow={false}
      header={
        <div className={classes.headerdiv}>
          <img src={questionImage} alt="questionImage" className={classes.headerimg}/>
          <p className={classes.headerp}>چه زمانی میتوانیم اقدام به خرید بلیط کنیم؟</p>
        </div>}
      key="4" >
      <p>{text}</p>
    </Panel>

  </Collapse>
  </section>
  </Fragment>

  );

};
export default CollapseSection;
/*<Collapse className={classes.collapse} onChange={callback}>
    <Panel className={classes.panel} header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel showArrow={false} header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>*/