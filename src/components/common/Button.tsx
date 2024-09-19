import {ButtonProps} from '../../types/components'

const Button: React.FC<ButtonProps> = ({ title = "Button Text", buttonStyle, buttonClick, type }) => {
  return (
    <button type={type} onClick={buttonClick} className={buttonStyle}>
      {title}
    </button>
  );
};

export default Button;
