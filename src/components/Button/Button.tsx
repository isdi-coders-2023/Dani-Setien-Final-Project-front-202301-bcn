interface ButtonProps {
  icon: JSX.Element;
  disabled: boolean;
  ariaLabel: string;
  className: string;
}

const Button = ({
  icon,
  disabled,
  ariaLabel,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button aria-label={ariaLabel} disabled={disabled} className={className}>
      {icon}
    </button>
  );
};

export default Button;
