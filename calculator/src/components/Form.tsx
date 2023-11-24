import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import Button from "./Button";

interface Props {}

const Form: FC<Props> = (): JSX.Element => {
  //const [value, setValue] = useState<string>();
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File>();

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-col">
      <input
        className="border padding-10"
        type="file"
        onChange={({ target }) => {
          const { files } = target;

          if (files) {
            const file = files[0];
            setFile(file);
          }
        }}
      />
      <div className="padding-10" />
      <input
        className="border padding-10"
        type="text"
        value={value}
        onChange={handleOnChange}
      />
      <div className="padding-10" />
      <Button value="submit" />
    </form>
  );
};

export default Form;
