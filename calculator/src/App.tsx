import { FC } from "react";
import Calculator from "./components/Calculator";
import Form from "./components/Form";

const App: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Calculator />
      <Form />
    </div>
  );
};

export default App;
