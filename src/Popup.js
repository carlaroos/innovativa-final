import React from 'react'
import {useState, useEffect,useRef} from 'react'
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Dots from './Dots';
import './Dots.css'
import { useTeamState,useTeamEvent } from './shared/api';
import './Popup.css'

function Popup(props) {
    console.log("POPUP RENDERING")
    const USER = "user1";
    const [count,setCount] = useState(0);
    const tester = 0;
    const question = useRef(1)
    const [old_timestamp,setOld_Timestamp] = useState("");
    const team  = useTeamEvent("Grupp1_Question");

    const sortedTeam = team
    ? [...team].sort((s1, s2) => {
        return s1.timestamp < s2.timestamp ? 1 : -1;
      }): [];
    const RPI_answer =
    sortedTeam?.find((s) => s.type === USER)?.data;
    const RPI_answer_timestamp =
    sortedTeam?.find((s) => s.type === USER)?.timestamp ?? "Unknown";
    console.log(team)

    useEffect(() => { 
        console.log("team",team);
        if(RPI_answer){
            nextQuestion()
            question.current = question.current + 1
        }
    
    }, [team])

    useEffect(() => {
        console.log("FEELVALUE",props.feelVALUE)
       
    }, [props.feelVALUE])


    useEffect(() => {
        console.log("count",count)
        if(question.current == 4){
            console.log(tester);
            props.setFeelVALUE(count);
            props.setTrigger(false);
        }     
    }, [count])
    // Varför måste jag köra ett extra varv
    // om jag använder
    // Vilket gör att jag skcikar värdet 3 gånger till servern
    // 
    function nextQuestion() {
        if(question.current > 0 && question.current<5){ 
            console.log("RPI_ANSWER",RPI_answer)
            setCount(prevState => prevState + parseInt(RPI_answer))
            console.log("Count",count)
        }

    }

    return (props.trigger) ? (
        <div className="popup-bg">
        <div className="popup">
                <div className="popup-inner">
                {props.children}
                
                {count}
                
                <div class="questions">{question.current === 1 && <Question1 />}
                {question.current === 2 && <Question2 />}
                {question.current === 3 && <Question3 />}</div>
                
             
                
                <Dots />

                <div class="buttons">
                <button className="close-btn1" onClick={() => props.setTrigger(false)}>Hoppa över</button>
                <button className="close-btn2" onClick={nextQuestion}>Nästa</button>
                </div>
            </div>
        </div>
        </div>
    ) : "";
}

export default Popup
