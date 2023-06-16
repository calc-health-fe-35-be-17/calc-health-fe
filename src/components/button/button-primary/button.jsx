import './button.css';

function ButtonPrimary(props) {
  const { children, style, onClick } = props;
  return <button onClick={onClick} className={'button-primary ' + style}>{children}</button>;
}

export default ButtonPrimary;
