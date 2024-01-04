import { useState } from "react";
import styles from "./NewPost.module.scss";
import Modal from "../../components/Model";
import NewPostForm from "./NewPostForm";

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log("a");
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    console.log("b");
    setIsOpen(false);
  };

  return (
    <div className={styles.newpost}>
      <div className={styles.aaa} onClick={handleOpen}>
        <div>+</div>
        <div>새글작성</div>
      </div>
      {isOpen && (
        <Modal onClose={handleClose}>
          <NewPostForm />
        </Modal>
      )}
    </div>
  );
};

export default NewPost;
