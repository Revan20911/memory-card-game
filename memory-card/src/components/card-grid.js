import React from "react";
import Card from "./card";


const Grid = ({cards, shuffleCards}) => {
    
    return(
    <div className="card-grid">
        {cards.map((pikachu) =>{
                return <Card
                    id={pikachu.id}
                    img={pikachu.img}
                    title={pikachu.title}
                    onClick={shuffleCards}
                    />
                })}
        </div> 
        )
    }
export default Grid;