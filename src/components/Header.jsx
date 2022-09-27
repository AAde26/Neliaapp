import React, { useMemo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateInput } from "../redux/albumSlice";
import debounce from "lodash.debounce";

function Header() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(updateInput(event.target.value));
    };

    const debouncedHandleChange = useMemo(() => debounce(handleChange, 300),[]);
 
 return (
<HeaderBody>
    <div className="container">
        <input 
        type="text"
        className="input"
        onChange={debouncedHandleChange}
        placeholder="Search for your favourite Artist....."
        />
        <button className="search-button">
            <FontAwesomeIcon icon={faSearch}  />
        </button>
    </div>
</HeaderBody>
 )

}

export default Header;

const HeaderBody = styled.header`
height: 80px;
background-color: #953553;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 1;

.container {
    width: 30%;
    height: 40px;
    background-color: green;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding-right: 5px;
    padding-left: 15px;
    transition: width 0.5s ease;
}

.input{
    flex-grow: 1;
    width: 80%;
    height: 95%;
    border: none;
    border-radius: 25px;
    font-size: 20px;
    flex-shrink: 1;

    &:focus {
        outline: none;
    }
}

.search-button {
    color: white;
    border-radius: 25px;
    width: 35px;
    height: 35px;
    font-size: 15px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b8b8b8;
    padding-left: 10px;
    cursor: pointer;
    transition: transition 0.5s ease;

    &:active {
        transform: scale(0.9);
        transition: transform 0.1s ease;
    }
}
`