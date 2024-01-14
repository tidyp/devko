import { useState } from "react";
import Modal from "../../components/Model";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const username = cookie.load("userId");

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <button className="flex h-12 w-full flex-col items-center justify-center rounded-2xl  bg-indigo-700 text-xl text-white">
      {!username && isOpen && (
        <Modal onClose={handleClose}>
          <p className="py-10">로그인이 필요합니다.</p>
          <Link to="/login">
            <button className="rounded-xl bg-indigo-400 p-4">
              로그인하러가기
            </button>
          </Link>
        </Modal>
      )}
      {username && (
        // <Modal onClose={handleClose}>
        <Link to="write">
          <div className="flex items-center" onClick={handleOpen}>
            {/* <div>+</div> */}
            <div>게시글 작성</div>
          </div>
        </Link>
        // </Modal>
      )}
    </button>
  );
};

export default NewPost;
