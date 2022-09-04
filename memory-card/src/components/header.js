import React from "react";
import "../styles/components.css";
import logo from "../assets/5.svg";

const Header = (props) => {

    const {score} = props;

    return(
        <>
        <div className="header-wrapper">
            <div className="pokedex-display-left">
                <label>Score: {score.score}</label>
            </div>
            <img src={logo}></img>
            <div className="pokedex-display-right">
                <label>High Score: {score.highScore}</label>
            </div>
        </div>
        </>
    )
}

export default Header;