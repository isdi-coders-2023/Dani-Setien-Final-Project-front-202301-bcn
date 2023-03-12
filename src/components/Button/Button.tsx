interface ButtonProps {
  icon: JSX.Element;
  disabled: boolean;
  ariaLabel: string;
}

const Button = ({ icon, disabled, ariaLabel }: ButtonProps): JSX.Element => {
  return (
    <button aria-label={ariaLabel} disabled={disabled}>
      {icon}
    </button>
  );
};

export default Button;
