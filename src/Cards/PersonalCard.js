import React from "react";
import "./PersonalCard.css";
//import Progress from 'react-progressbar';
import { Todos } from "./Todo";


import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


function PersonalCard(props) {
	const emoValue = parseInt(props.mood)
	
	return (
		
		<div className="card-container1">
			
			<header>
                <div className="pic1">
                <div className="pic2">
				    <img src={props.avatar} alt={props.name} />
                </div>
                {props.status == "true" && <h3 className="statusseated1">Online</h3>}
				{props.status == "false" && <h3 className="statusnotseated1">Offline</h3>}
               
                </div>
			</header>
			<h1 className="bold-text1">
				{props.name} <span className="normal-text">{props.age}</span>
			</h1>
			<h2 className="normal-text1">{props.role}</h2>
			<div className="info-container1">
				<div className="mood1">
                    <h1 className="bold-text1">Todays mood: </h1>
					<div className="progressbar">
						
					{props.status == "true" && <div style={{paddingRight:'20px'}}>
					<ProgressBar percent={emoValue}
        				filledBackground={emoValue< 40 ? "linear-gradient(to right, #f00a0a99, #b0303099)"
						 : emoValue > 40 && emoValue < 80 ? "linear-gradient(to right, #CACF36, #5ACF0C" :
						 "linear-gradient(to right, #46EB46, #08F000"}
      				/>
					</div>}
						</div>
					
                    
                </div>

				
			<Todos></Todos>
                
        
			</div>
			</div>
		
	);
}

export default PersonalCard;