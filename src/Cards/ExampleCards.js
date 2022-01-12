import { title } from "process";
import React from "react";

import EmployeeCard from "./EmployeeCard";



export const ExampleCards = (props) => {
  return (
    <>
      <div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>


      
      
            <EmployeeCard
                avatar={props.avatar}
                name={props.name}
                role={props.role}
                mood={props.mood}
                status={props.status}
                ></EmployeeCard>

            


			

            
		</div>
    </>
  );
};
