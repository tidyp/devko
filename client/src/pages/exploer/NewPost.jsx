import { useState } from "react";
import styles from "./NewPost.module.scss";

const NewPost = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => {
    setisOpen((cur) => !cur);
  };

  return (
    <div className={styles.newpost}>
      <div className={styles.aaa}>
        <div onClick={handleOpen}>+</div>
        <div>새글작성</div>
      </div>
      <div>
        {isOpen && (
          <>
            <input type="text" />
            <button>작성</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewPost;
