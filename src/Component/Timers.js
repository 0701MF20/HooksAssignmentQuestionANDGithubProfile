import React, { useRef, useState } from "react";
import {Card,Row,Col} from 'react-bootstrap'

const Timers = () => {
    const intervalRef = useRef(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [timerState, setTimerState] = useState("stop");

    const handleStart = () => {
        intervalRef.current = setInterval(() => {
            setElapsedTime((previousElapsedTime) => previousElapsedTime + 1);
        }, 1000);
        setTimerState("stop");
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        setTimerState("resume");
    };

    const handleResume = () => {
        intervalRef.current = setInterval(() => {
            setElapsedTime((previousElapsedTime) => previousElapsedTime + 1);
        }, 1000);
        setTimerState("stop");
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setElapsedTime(0);
        setTimerState("stop");
    };

    return (
        <div>
            <Card style={{width:'300px',height:'150px',background:'#4ecbfc',display:'flex',justifyContent:'center'}}>
                <h1 style={{color:'white'}}>Timer</h1>
            <h3 style={{color:'white'}}><b> {elapsedTime} seconds</b></h3>
            <Row>
                <Col>
                <button onClick={handleStart} style={{background:'#35de79',color:'white',borderRadius:'5px'}}>Start</button>
                </Col>
                <Col>
                {timerState === "stop" ? (
                <button onClick={handleStop} style={{background:'#fcf11c',color:'white',borderRadius:'5px'}}>Stop</button>
            ) : (
                <button onClick={handleResume} style={{background:'#35de79',color:'white',borderRadius:'5px'}}>Resume</button>
            )}
                </Col>
                <Col>
                <button onClick={handleReset} style={{background:'#fc4e4e',color:'white',borderRadius:'5px'}} >Reset</button>

                </Col>
            </Row>
           
        
            </Card>
            
        </div>
    );
};

export default Timers;
