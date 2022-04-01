import { Modal, Button } from 'antd';

const ModalVurud=(props)=>{
    return(
        <Modal
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
            {!enteredPhoneNumberIsValid && <p >name must be valid</p>}
            <button  type="submit" onClick={props.onClick}
            className={classes.modalbtn}>تایید و دریافت کد</button>
            
        </Modal>

    );
}

export default ModalVurud;
