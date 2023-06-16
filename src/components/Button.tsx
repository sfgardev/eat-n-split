type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
