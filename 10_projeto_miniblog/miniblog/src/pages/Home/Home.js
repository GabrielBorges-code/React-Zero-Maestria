import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Home.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          name=""
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div>
        <h1>Posts...</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/post/create" className="btn ">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
