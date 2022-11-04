import React from "react";

const SimpleCounter= (props)=>{
    const C = {
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        width: "800px",
        height: "250px",
        margin: "5px"
    }
    const NumberStyle = {
        position: "relative",
        backgroundColor: "green",
        borderRadius: "10px",
        width: "100px",
        height: "100px",
        margin: "5px",
        textAlign: "center",
    }
    return (
        <div className="bigCounter" style={SimpleCounter}>Hello World 222
            <div className="calendar">
                <i class="fa-regular fa-clock"></i>
            </div>
            <div className="four" style={NumberStyle}>0</div>
            <div className="three" style={NumberStyle}>0</div>
            <div className="two" style={NumberStyle}>0</div>
            <div className="one" style={NumberStyle}>0</div>
        </div>
    );
};

export default SimpleCounter;


