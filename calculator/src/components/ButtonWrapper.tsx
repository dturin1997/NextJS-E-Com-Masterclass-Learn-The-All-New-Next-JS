import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonWrapper: FC<Props> = ({ children }): JSX.Element => {
  return <div className="btn-wrapper">{children}</div>;
};

export default ButtonWrapper;
