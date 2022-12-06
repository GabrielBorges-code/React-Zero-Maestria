import React, { useState } from "react";

import styles from "./MyForm.module.css";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [sex, setSex] = useState(user ? user.sex : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(sex);
    console.log("formulário enviado.");
    setName("");
    setEmail("");
    setBio("");
    setSex("male");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            value={name}
            type="text"
            name="name"
            id="name"
            placeholder="digite seu nome..."
            onChange={(e) => setName(e.target.value)}
          />

          {/* pode envolver o label na div, é recomendado, pois pasa menos configuração */}
          <label>
            Email
            <input
              value={email}
              type="email"
              name="email"
              placeholder="digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              name="bio"
              cols="30"
              rows="10"
              placeholder="digite seu perfil aqui"
            />
          </label>

          <label>
            Escolha o sexo
            <select
              name="sex"
              onChange={(e) => setSex(e.target.value)}
              value={sex}
            >
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </label>

          <input type="submit" value="Enviar" />
        </div>
      </form>
    </>
  );
};

export default MyForm;
