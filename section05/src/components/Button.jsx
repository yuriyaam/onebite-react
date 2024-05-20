const Button = ({ text, color, children }) => {
  const onCLickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onCLickButton} style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
