import React from "react";
import styled from "styled-components";


function ResultInfo({count, artist, isLoading }) {
    //Loading...
    if(isLoading) {
        return (
            <Counter>
                <div className="counter">Please wait is Loading.....</div>

            </Counter>
        );
    }

    //Results

    const resultString = count === 1 ? "Result" : "Results";

    //text to be rendered
    let renderText;
    
    // check if user input artist name
    if(artist) {
        renderText = `${count} ${resultString} Found for "${artist}"`;
    } else {
        renderText = "Search Artist By Artist Name , Album or Song";
    }
    return (
        <Counter>
        <div className = "counter">{renderText}</div>
        </Counter>
    )
}

export default ResultInfo;

const Counter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: sticky;
top: 80px;
background-color: #f1f3f2;
z-index: 1;

.counter {
    width: 90%;
    height: 80px;
    display: flex;
    font-size: 25px;
    border-bottom: 1px solid black;
    justify-content: center;
    align-items: center;
}

`