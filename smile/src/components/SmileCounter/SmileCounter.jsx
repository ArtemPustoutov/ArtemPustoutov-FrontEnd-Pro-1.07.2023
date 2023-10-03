import React, {useState} from "react";
import './SmileCounter.css'



const SmileCounter = () => {
    const [counter1, setCouner1] = useState(0)
    const [counter2, setCouner2] = useState(0)
    const [counter3, setCouner3] = useState(0)

    let winner = function () {
        if(counter1 > counter2 && counter1 > counter3) {
            alert('победил  8-)')
        }else if (counter2 > counter1 && counter2 > counter3) {
            alert('победил  :-)')
        }else if(counter3 > counter1 && counter3 > counter2){
            alert('победил   :-(')
        } else {
            alert('победитель не определен')
        }
    }
    return(
        <div>
            <h1>Проголосуй за Смйлик</h1>
            <ul>
                <li><button className="smile-btn" onClick = {()=>setCouner1(counter1 + 1)}>8-)</button><span>{counter1}</span></li>
                <li><button className="smile-btn" onClick = {()=>setCouner2(counter2 + 1)}>:-)</button><span>{counter2}</span></li>
                <li><button className="smile-btn" onClick = {()=>setCouner3(counter3 + 1)}>:-(</button><span>{counter3}</span></li>
                <li><button onClick = {()=>winner()}>Show Winner</button></li>
            </ul>
        </div>
    )
}
export default SmileCounter