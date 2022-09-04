import React from "react";
import Grid from "./card-grid";
import "../styles/main.css";
import Header from "./header";
import { shuffle } from "lodash";
import {Cards, Score} from "./cards/cards";

const Main = () => {

    const [cards, setCards] = React.useState(Cards); 

    const [score, setScore] = React.useState(Score);

    const [arr, setArr] = React.useState({arr: []});

    
    const shuffleCards = (id) => {

        let num = 0;
        console.log(id);
        if(num == 0){
            num += 1
            
            setScore({score: num, highScore: num});
        }
        if(num != 0){
            arr.arr.forEach((itemId) => {
                if(itemId == id){
                    num -= num;
                    setScore((prevState) => ({score: num, highScore: prevState.highScore}));
                    setArr({arr: []});
    
                }else if(itemId != id){
                    num+=1;
                    setScore({score: num, highScore: num});
                }
            })  
        }
        setArr((prevState) => ({
            arr: [...prevState.arr, id], 
        }));
        console.log(arr.arr, num);
        setCards(shuffle(cards));

    } 
        return(
            <div className="main" >
                <Header score={score}/>
                <Grid
                cards={cards}
                shuffleCards={shuffleCards}
                />
            </div>
        )
}

export default Main;
