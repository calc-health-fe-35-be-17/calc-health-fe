import './Button.css';

function ButtonPrimary(props) {
  const { children, style } = props;
  return <button className={'button-primary ' + style}>{children}</button>;
}

export default ButtonPrimary;
