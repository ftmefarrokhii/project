import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classes from './MainHeader.module.css';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import fa_IR from "antd/es/locale/fa_IR";
import locale from "antd/es/date-picker/locale/fa_IR";

function onChangedate(date, dateString) {
  console.log(date, dateString);
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const { Option, OptGroup } = Select;


function handleChange(value) {
    console.log(`selected ${value}`);
}
    
function onChange(date, dateString) {
    console.log(date, dateString);
}
function MainHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div className={classes.div}>
     
      <Box sx={{ borderBottom: 1, borderColor: 'white' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="یکطرفه" {...a11yProps(0)} />
          <Tab label="رفت و برگشت" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <div className={classes.itemsdiv}>
      <Select 
        showArrow={false} 
        placeholder="مبدا"
        className={'testzz'}
        style={{borderRadius:'5px',width:'10rem',margin:'1rem'}}
        
        onChange={handleChange}>
            <OptGroup label="شهرهای پرتردد">
                <Option value="رشت">رشت</Option>
                <Option value="تهران">تهران</Option>
            </OptGroup>
            <OptGroup label="زنجان">
                <Option value="ابهر">ابهر</Option>
            </OptGroup>
        </Select>
        
        <Select 
        showArrow={false} 
        placeholder="مقصد"
        dropdownClassName='testclass'
        
        style={{borderRadius:'5px',width:'10rem',margin:'1rem',color:'red'}}
        className={'testzz'}
        onChange={handleChange}>
            <OptGroup label="شهرهای پرتردد">
                <Option value="رشت">رشت</Option>
                <Option value="تهران">تهران</Option>
            </OptGroup>
            <OptGroup label="زنجان">
                <Option value="ابهر">ابهر</Option>
            </OptGroup>
        </Select>

        <Space direction="vertical" locale={fa_IR}>
        <DatePicker className={classes.datepicker} placeholder='تاریخ رفت' locale={locale} onChange={onChangedate} />
        </Space>
        <Space direction="vertical" locale={fa_IR}>
        <DatePicker className={classes.datepicker} disabled={true} placeholder='تاریخ برگشت' locale={locale} onChange={onChangedate} />
        </Space>
        <input className={classes.input} placeholder="تعداد مسافر"></input>
 
        <button className={classes.searchbutton}>جست و جو</button>

        </div>


      </TabPanel>
      <TabPanel value={value} index={1}>
      <Select 
        showArrow={false} 
        placeholder="مبدا"
        className={'testzz'}
        style={{borderRadius:'5px',width:'10rem',margin:'1rem'}}
        
        onChange={handleChange}>
            <OptGroup label="شهرهای پرتردد">
                <Option value="رشت">رشت</Option>
                <Option value="تهران">تهران</Option>
            </OptGroup>
            <OptGroup label="زنجان">
                <Option value="ابهر">ابهر</Option>
            </OptGroup>
        </Select>

        <Select 
        showArrow={false} 
        placeholder="مقصد"
        dropdownClassName='testclass'
        
        style={{borderRadius:'5px',width:'10rem',margin:'1rem',color:'red'}}
        className={'testzz'}
        onChange={handleChange}>
            <OptGroup label="شهرهای پرتردد">
                <Option value="رشت">رشت</Option>
                <Option value="تهران">تهران</Option>
            </OptGroup>
            <OptGroup label="زنجان">
                <Option value="ابهر">ابهر</Option>
            </OptGroup>
        </Select>

        <Space direction="vertical" locale={fa_IR}>
        <DatePicker className={classes.datepicker} placeholder='تاریخ رفت' locale={locale} onChange={onChangedate} />
        </Space>
        <Space direction="vertical" locale={fa_IR}>
        <DatePicker className={classes.datepicker} placeholder='تاریخ برگشت' locale={locale} onChange={onChangedate} />
        </Space>
        <input className={classes.input} placeholder="تعداد مسافر"></input>
 
        <button className={classes.searchbutton}>جست و جو</button>
       

      </TabPanel>
    
      </div>

   
  );
}
export default MainHeader;
