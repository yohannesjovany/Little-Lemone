import React from "react";
import "./card.css"

let Card = (props)=>(
    <div className="card">
        {props.sOut && <p className="badge">Sold Out</p>}
        <img className="card-image" src={props.card.img} alt = {props.card.title}/>
        <div>
            <span>{props.card.rating}({props.card.reviewCount})</span><span>{props.card.country}</span>
        </div>
        <p className="title">Life lessons with Katie zaferes</p>
        <p> <span className="price">From ${props.card.price}</span> /person </p>
    </div>

);

export default Card;
