import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no Front-end e Firebase
        no Back-end
      </p>
      <Link className="btn" to="/post/create">Criar post</Link>
    </div>
  );
};

export default About;
