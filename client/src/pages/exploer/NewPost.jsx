import { useState } from "react";
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
    <button className="flex flex-col h-12 rounded-2xl w-full justify-center items-center text-2xl bg-indigo-200 text-white hover:bg-indigo-700">
      <div className="flex items-center" onClick={handleOpen}>
        {/* <div>+</div> */}
        <div>게시글 작성</div>
      </div>
      {isOpen && (
        <Modal onClose={handleClose}>
          <NewPostForm onClose={handleClose}/>
        </Modal>
      )}
    </button>
  );
};

export default NewPost;
