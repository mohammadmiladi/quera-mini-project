import { InputProps } from "../../types/components";


const Input: React.FC<InputProps> = ({
  placeholder = "placeholder ...",
  label = "label",
  inputStyle,
  inputError,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label
        className=" text-sm mb-1 text-black"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        className={inputStyle}
        placeholder={placeholder}
        {...props}
      />
      <p className=" text-red-500 text-sm">{inputError}</p>
    </div>
  );
};

export default Input;
