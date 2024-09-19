const Card = ({ children }) => {
  return (
    <div className="mt-4 mb-10 bg-white dark:bg-gray-800 rounded-md p-7">
      {children}
    </div>
  );
};

export default Card;
