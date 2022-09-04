import React from "react";

const Card = ({

    title,
    img,
    id,
    onClick

}) => {

        return(
        <div>
            <div
            onClick={() => onClick(id)}
            id={id}
            className="card-wrapper">
                <img src={img} alt="" />
                <h2>{title}</h2>
            </div>
        </div>
        )
}

export default Card;