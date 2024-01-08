const Modal = ({ children, onClose }) => {
  const handleClose = () => {
    console.log("c");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-stone-950 backdrop-blur-sm">
      <div className="flex h-fit w-fit flex-col rounded-2xl bg-white p-8">
        <div className="flex justify-end text-8xl" onClick={handleClose}>
          &times;
        </div>
        <div>{children}</div>
        <div></div>
      </div>
    </div>
  );
};

export default Modal;
