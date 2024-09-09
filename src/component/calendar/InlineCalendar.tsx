import React from 'react';
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css';
const InlineCalendar = () => {

	const highlightSundays = (date:Date) => {
		return date.getDay() === 0 ? "sunday" : "";
	};

	return (
		<BaseCalendar>
			<DatePicker inline readOnly locale={ko} disabled dayClassName={highlightSundays}
			            renderCustomHeader={()=>(<div></div>)} onChange={()=>''}/>
		</BaseCalendar>
	);
};

export default InlineCalendar;

const BaseCalendar = styled.div`
  width: 22.34vw;
  height: auto;
  border-radius: 1.5625vw;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  
  .react-datepicker__triangle{
    display: none;
  }
  .react-datepicker__day-names{
    &>div:first-child{
      color: rgba(255,0,0,0.5);
    }
    &>div:last-child{
      color: #61dafb50;
    }
    //background-color: #fff;
    &>div:nth-child(n+2):nth-child(-n+6){
      color: rgba(255,255,255,0.5);
    }
  }
	
  .react-datepicker{
    border: none;
  }
  .react-datepicker__month-container{
    height: auto;
    width: 22.34vw;
    background-color: #000b58;
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    //position: relative;
    //box-shadow: 0 3px 6px #00000029;
    //border-radius: 4px;

    .react-datepicker__header, react-datepicker__header--custom{
      border-bottom:none;
      font-weight: 600;
    }
    .react-datepicker__header{
      padding: 0;
      font-family: "Nanum Gothic", sans-serif;
    }
  }
  
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none; { /*<img src={calendar} onClick={clickEvent} alt="" style={{position:'absolute', right: '24px', cursor:'pointer'}}/>*/
  } -webkit-appearance: none;
  }
  
  .react-datepicker__day-names{
    padding: 0.5208vw 0;
    background-color: #000b58;
    .react-datepicker__day-name{
      color: #fff;
      width: 3.125vw;
      height: 2.5vw;
      font-size: 1.4583vw;
      margin: 0;
    }
  }

  .react-datepicker__year-wrapper{
    display: grid;
    grid-template-columns: repeat(3, 2.91667vw);
    align-items: center;
    grid-gap: 0.2083vw;
  }

  .react-datepicker__day--keyboard-selected{
    background-color: transparent;
    //background-color: #fff;
    //border-radius: 4px;
    //color: #171725;
  }

  .react-datepicker__week{
    box-sizing: border-box;
    .react-datepicker__day--selected{
      background-color: #0058FF;
      font-weight: 400;
      outline: none;
    }
    .react-datepicker__day--today{
      font-weight: 400;
      position: relative;
      margin: 0 0 0.2083vw 0;
      box-sizing: border-box;
      color: #21d59b !important;
      //&::before{
      //  content:'';
      //  height: 100%;
      //  width: 100%;
      //  box-sizing: border-box;
      //  border: 1px solid #21D59B;
      //  position: absolute;
      //  top: 0;
      //  left: 0;
      //  border-radius: 50%;
      //}
    }
    .react-datepicker__day--outside-month{
      visibility: hidden;
      outline: none;
    }
    .react-datepicker__day{
      position: relative;
      width: 3.125vw;
      height: 2.5vw;
      font-size: 1.4583vw;
      font-weight: 700;
      margin: 0 0 0.2083vw 0;
      box-sizing: border-box;
      font-family: 'Pretendard';
      color: #fff;
      //&::after{
      //  content: '';
      //  width: 3px;
      //  height: 3px;
      //  position: absolute;
      //  top:80%;
      //  border-radius: 50%;
      //  left:50%;
      //  transform: translate(-50%, -50%);
      //  bottom: 0;
      //  background-color: #21D59B;
      //}
    }

    .react-datepicker__day.sunday {
      color: red;
    }
    
    .react-datepicker__day--weekend{
      color: #61dafb;
    }
  }
  `
