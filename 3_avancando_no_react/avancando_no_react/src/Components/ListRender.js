import React, { useState } from "react";

const ListRender = () => {
  const [names] = useState(["Matheus", "José", "Maria", "Camila"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Gabriel", age: 23 },
    { id: 2, name: "João", age: 74 },
    { id: 3, name: "Maria", age: 64 },
    { id: 4, name: "Pedro", age: 75 },
    { id: 5, name: "Sabrina", age: 11 },
    { id: 6, name: "Ellen", age: 19 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 7);

    // Previous State, verifica o estado anterior de um item.
    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <h1>Nomes Legais</h1>

      {/* usar a 'key' do map é má prática. 
      Preferivel consumir o id do end-point qu está consumindo */}
      {names.map((name, key) => (
        <p key={key}>
          {key + 1} - {name}
        </p>
      ))}

      <h1>Usuários</h1>

      {users.map((user) => (
        <p key={user.id}>
          {user.name} tem {user.age} anos de idade
        </p>
      ))}

      <button onClick={deleteRandom}>Delete random User</button>
    </>
  );
};

export default ListRender;
