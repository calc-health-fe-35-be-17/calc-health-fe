import './Button.css';

function ButtonSecond(props) {
  const { children, style } = props;
  return <button className={'button-secondary ' + style}>{children}</button>;
}

export default ButtonSecond;
