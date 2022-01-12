import React from "react";
import "./EmployeeCard.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Progress from 'react-progressbar';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


//import ProgressBar from 'react-bootstrap/ProgressBar'

import LinearProgressWithLabel from '@mui/material/LinearProgress';


function EmployeeCard(props) {

	const emoValue = parseInt(props.mood)

	return (
		<div className="card-container">
			<header>
                <div className="pic">
				<img src={props.avatar} alt={props.name} />
                {props.status == "true" && <h3 className="statusseated">Online</h3>}
				{props.status == "false" && <h3 className="statusnotseated">Offline</h3>}
                </div>
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text">{props.role}</h2>
			<div className="info-container">
				<div className="mood">
                    <h1 className="bold-text">Todays mood: </h1>
					<div className="baro" style={{width:110, height:20}}>
						
						
						{props.status == "true" && <div style={{paddingRight:'20px'}}>
					<ProgressBar percent={emoValue}
        				filledBackground={emoValue< 40 ? "linear-gradient(to right, #f00a0a99, #b0303099)"
						 : emoValue > 40 && emoValue < 80 ? "linear-gradient(to right, #CACF36, #5ACF0C" :
						 "linear-gradient(to right, #46EB46, #08F000"}
      				/>
					</div>}
						

             	       
            		</div>
                    
                </div>

				<ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
                
                
                
        
			</div>
		</div>
	);
}

export default EmployeeCard;