import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

import styles from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando post...</p>}

      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className={styles.p_body}>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag, index) => (
              <p key={index}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Post;
