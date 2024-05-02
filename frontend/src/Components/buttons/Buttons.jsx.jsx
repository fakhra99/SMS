const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={"bg-customBlue text-white py-2 w-50 px-4 rounded-md ${className} mt-5"}
    >
      {children}
    </button>
  );
};

export default Button;
