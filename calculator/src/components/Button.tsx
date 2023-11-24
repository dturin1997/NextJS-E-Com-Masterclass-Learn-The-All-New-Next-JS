import { FC } from "react";

interface Props {
  value: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ value, onClick }): JSX.Element => {
  return (
    <button onClick={onClick} className="calc-btn border">
      {value}
    </button>
  );
};

export default Button;
