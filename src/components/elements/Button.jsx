const variantClassMap = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outline: 'button--outline-primary',
};

const Button = ({
  type = 'button',
  variant = '',
  className = '',
  onClick,
  disabled = false,
  children,
  ...rest
}) => {
  const variantClass = variantClassMap[variant] || '';
  return (
    <button
      type={type}
      className={`button ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;