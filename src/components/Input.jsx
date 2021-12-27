import React from "react";
import { setCount } from "../redux/slices/countSlice";
import { useDispatch } from "react-redux";

function Input() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="number"
        onChange={(e) => dispatch(setCount(e.target.value))}
      />
    </div>
  );
}

export default Input;
