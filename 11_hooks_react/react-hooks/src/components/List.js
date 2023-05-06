import React, { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("buscando items do db...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>
      <div>Lista:</div>
      {myItems && myItems.map((item, i) => <span key={i}>{item} </span>)}
    </div>
  );
};

export default List;
