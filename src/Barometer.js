import React from 'react'
import { useState, useEffect,useRef } from 'react'
import { useTeamState,useTeamEvent1, useTeamEvent2,useAddTeamEvent } from './shared/api';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { isNonEmptyArray } from '@apollo/client/utilities';
import { split } from '@apollo/client';
import {ExampleCards} from "./Cards/ExampleCards"
import PersonalCard from './Cards/PersonalCard';
import ProgressBar from "@ramonak/react-progress-bar";



import { Todos } from './Cards/Todo';

function Barometer(props) {

    //this is added 
    
    

    const Example = () => {
        return <ProgressBar completed={props.mood} />;
      };

    const addTeamEvent = useAddTeamEvent();
    

    const team = useTeamEvent2();
    const [array,setArray] = useState([]);
    const [user,setUser] = useState({});
    var userData = []; 
    var mappedTeams = [];
    const TwoMinAfterNow = new Date(Date.now()-2*60*1000).toISOString();

    var seatings = [{name:"user1",seated:"false",emoval : 0},
                      {name:"user2",seated:"false",emoval : 0},
                      {name:"user3",seated:"false",emoval : 0},
                      {name:"user4",seated:"false",emoval : 0}]
    
                      

    useEffect(() => {
        console.log("hej");
       const res = addTeamEvent("user1",props.feeling.toString());
       console.log("hej efteeers");
    }, [props.feeling])
    

    if(team){
        mappedTeams = team.map((t)=>{ 
            const timestamp = t.timestamp;
          
            const data = t.data?.split(","); 
            return {name:data[1],online:data[3],timestamp : timestamp,emoval : data[5]}});
        
        mappedTeams = mappedTeams
            ? [...mappedTeams].sort((s1, s2) => {
                return s1.timestamp < s2.timestamp ? 1 : -1;
               })
             : [];
        mappedTeams = mappedTeams.filter((t)=> { return t.timestamp > TwoMinAfterNow })
        seatings = seatings 
        ? [...seatings].map((n) => {
            console.log(n.name) 
            var test = mappedTeams?.find((s) => s.name === n.name)?.online
            var emo = mappedTeams?.find((s) => s.name === n.name)?.emoval
            console.log(test);
            if(!test){
                test = "false";
            }
            return {...n,seated : test,emoval : emo}
        }) : [];
    }

    // if(mappedTeams){
    //     console.log(mappedTeams);
    // }
    
    useEffect(() => {
        console.log("TEAM har ändrats");
    }, [team])

    const temp_arr = [];
    
    const {feeling,popup} = props;
  
    return (
        
        <div class="employ">
            <div className="outer-container">
                <div className="left-container">


                    
                    <div className="table"></div>

                    

                    <div className="cards">
                        <ExampleCards
                        avatar="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
                         name="Katherine Moss"
                        role="Developer"
                        mood={seatings[1].emoval}
                        status={seatings[1].seated}></ExampleCards>

                        <ExampleCards
                        avatar="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        name="Eva Bond"
                        role="Designer"
                        mood={75}
                        status={"true"}></ExampleCards>

                        <ExampleCards
                        avatar="https://c.vanceai.com/assets/images/colourise/touxiang2.jpg"
                        name="Eduard Franz"
                        role="Artist"
                        mood={60}
                        status={"true"}></ExampleCards>
                        
                        
                        
                
                        <PersonalCard className="cards"
                        avatar="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        name="Josh Knight"
                        role="Developer"
                        mood={seatings[0].emoval}
                        status={"true"}></PersonalCard>
                         
                    
                    </div>
                    <div className="right-container"></div>
            </div>
            
            </div>
            </div>
        
    )
}

export default Barometer
