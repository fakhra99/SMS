const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={"bg-customBlue text-white w-50 py-2 px-4  rounded-md ${className}"}
    >
      {children}
    </button>
  );
};

export default Button;
