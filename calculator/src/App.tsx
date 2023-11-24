import { FC } from "react";
import Calculator from "./components/Calculator";

const App: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Calculator />
    </div>
  );
};

export default App;
