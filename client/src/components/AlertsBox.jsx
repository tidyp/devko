import { IoWarningOutline } from "react-icons/io5";

const AlertsBox = ({ children }) => {
  return (
    <p className="flex w-full rounded-xl bg-slate-100 py-4  text-center text-xl text-[#ef5353]">
      <span className="flex w-full items-center justify-center gap-2">
        <IoWarningOutline /> {children}
      </span>
    </p>
  );
};

export default AlertsBox;
