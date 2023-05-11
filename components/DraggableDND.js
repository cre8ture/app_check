import React, { useState } from "react";

const DraggableDND = ({ children }) => {
  const [cards, setCards] = useState(
    children.map((child, index) => ({ id: index, content: child }))
  );

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(
      cards
        .slice(0, dragIndex)
        .concat(cards.slice(dragIndex + 1, hoverIndex), dragCard, cards.slice(hoverIndex + 1))
        .map((card, index) => ({ ...card, id: index }))
    );
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (event, index) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const dragIndex = parseInt(event.dataTransfer.getData("text/plain"));
    moveCard(dragIndex, index);
  };

  return (
    <div>
      {cards.map(({ id, content }, index) => (
        <div
          key={id}
          draggable
          onDragStart={(event) => handleDragStart(event, index)}
          onDragOver={(event) => handleDragOver(event, index)}
          onDrop={(event) => handleDrop(event, index)}
        >
          {content}
        </div>
      ))}
    </div>
  );
};

export default DraggableDND;
