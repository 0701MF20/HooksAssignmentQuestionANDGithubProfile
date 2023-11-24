import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap"
import { Card } from "react-bootstrap"
const Counter = () => {
    const [count, setCount] = useState(0);
    const incremenet = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1)

    }
    useEffect(()=>{
        document.title=`count is ${count}`
    });
    return (
        <div className="container my-3">
            <Card style={{width:'200px',height:'200px',background:'black',color:'white'}}>
                <Row>
                    <h3>Counter</h3>
                </Row>
            <Row style={{marginTop:'100px'}}>
                <Col>
                    <button onClick={decrement}>-</button>
                </Col>
                <Col>
                    <h4>{count}</h4>
                </Col>
                <Col>
                    <button onClick={incremenet}>+</button>
                </Col>
            </Row>
            </Card>
        </div>
    );
}
export default Counter;