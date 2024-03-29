import React from 'react';

export default function CardDisplay(props) {
  const cards = props.cardOrder;
  return (
    <div id="cardId">
      {cards.map((card) => (
        <img
          key={card[0]}
          id={card[0]}
          className={card[1] + " displayCard"}
          src={`/cards/${Cards-[0]}.png`}
          alt={card[0]}
        />
      ))}
    </div>
  )
}