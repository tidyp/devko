import { Outlet } from "react-router-dom";

const Button = ({ color, onClick, children }) => {
  return (
    <button
      type="button"
      className={`rounded-full border text-white px-4 py-2 ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
