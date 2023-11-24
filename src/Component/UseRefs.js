import React, { useRef, useState } from "react";
function UseRefs() {
    const refElement = useRef("");
    const [name, setName] = useState("Faraz")
    function reset() {
        setName("");
        refElement.current.focus()
    }
    function handleInput() {
        refElement.current.style.color = "blue"
    }
    return (
        <div>
            <input ref={refElement} value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={reset}>
                Reset
            </button>
            <button onClick={handleInput}>
                HandleInput
            </button>
        </div>
    );
}
export default UseRefs;