import React from 'react';
import './card.styles.css';

const cardSize = 180;
export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=${cardSize}x${cardSize}`}></img>
        <h2> { props.monster.name } </h2>
        <p> {props.monster.email } </p>
    </div>
)