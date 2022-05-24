import { type ChangeEvent } from "react";

import "./index.css";

type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ id, name, placeholder, onChange }: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      type={"search"}
      className={"search-input"}
      onChange={onChange}
    />
  );
};

export default Input;
