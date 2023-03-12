interface ButtonProps {
  icon: JSX.Element;
  disabled: boolean;
}

const Button = ({ icon, disabled }: ButtonProps): JSX.Element => {
  return <button disabled={disabled}>{icon}</button>;
};

export default Button;
