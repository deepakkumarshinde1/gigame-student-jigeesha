function Input({ name, value, handleChange, type = "text" }) {
  return (
    <div className="input-group">
      <label>{name}</label>
      <input
        type={type}
        placeholder={`Enter ${name}`}
        value={value}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
}

export default Input;
