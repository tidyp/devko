const Modal = ({ children, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-stone-950 backdrop-blur-sm">
      <div className="flex h-fit w-fit flex-col rounded-2xl bg-white p-8">
        <div className="flex justify-end px-8 text-4xl">
          <div onClick={handleClose}>&times;</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
