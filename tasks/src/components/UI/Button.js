import "./Button.css";

const Button = (props) => {
  const classes = "primary-btn " + props.classes;
  return <button type="submit" className={classes}>{props.children}</button>;
};

export default Button;
