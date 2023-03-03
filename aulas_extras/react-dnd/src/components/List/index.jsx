import React from "react";
import { MdAdd } from "react-icons/md";
import { Container } from "./styles";
import Card from "../Card";

const index = ({ data, index: listIndex }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card 
            key={card.id} 
            listIndex={listIndex} 
            index={index} 
            data={card} 
          />
        ))}
      </ul>
    </Container>
  );
};

export default index;