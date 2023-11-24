import { FC } from "react";
import Button from "./Button";
import ButtonWrapper from "./ButtonWrapper";

const Calculator: FC = (): JSX.Element => {
  return (
    <div className="border padding-10">
      <div className="calculator-screen border">
        <span>0</span>
        <span className="result">100</span>
      </div>
      <ButtonWrapper>
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value="0" />
        <Button value="+" />
        <Button value="-" />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value="/" />
        <Button value="*" />
        <Button value="=" />
      </ButtonWrapper>
    </div>
  );
};

export default Calculator;
