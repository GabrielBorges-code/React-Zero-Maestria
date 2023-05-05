import React, { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [taskText, setTaskText] = useState("");
  // dispatch dispara uma função, não apenas atribuí o valor
  const [number, dispatch] = useReducer((state, action) => {
    return (Math.random(state) * 10).toFixed();
  });

  const initialTasks = [
    { id: 1, text: "Fazer uma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTask({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTask({ type: "DELETE", id: id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <ul>
        <li>
          O useReducer tem a mesma função que o useState, ele gerencia valores;
        </li>
        <li>
          Porém temos a possibilidade de executar uma função na hora da
          alteração do valor;
        </li>
        <li>
          Então temos que o useReducer recebe um valor para gerenciar e uma
          função para alterar este valor;
        </li>
      </ul>

      <p>Numero: {number}</p>
      <button onClick={dispatch}>Alterar numero</button>

      <br />
      <br />

      <ul>
        <li>
          Se o useReducer fosse utilizado como no exemplo passado, não teria
          tanta diferença do useState;
        </li>
        <li>
          Por isso o reducer geralmente contém operações mais complexas,
          utilizando a estrutura switch com actions
        </li>
        <li>Esta situação foi apresentada na seção de Context API;</li>
      </ul>

      <hr />

      <h3>Tarefas</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>

      <ul>
        {tasks?.map((task) => (
          <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default HookUseReducer;
