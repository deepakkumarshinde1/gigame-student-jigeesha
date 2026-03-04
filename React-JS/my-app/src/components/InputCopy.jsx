import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  let { name, type = "text" } = props;
  let input = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      value: input.current.value,
      setValue: (val) => {
        input.current.value = val;
      },
      focus: () => {
        input.current.focus();
      },
    };
  });

  return (
    <div className="input-group">
      <label>{name}</label>
      <input
        ref={input}
        type={type}
        placeholder={`Enter ${name}`}
        name={name}
      />
    </div>
  );
}

export default forwardRef(Input);

// forwardRef => It is a higher-order component that allows you to pass a ref
// through a component to one of its children. This is useful when you want to
// access the DOM element of a child component from a parent component.
