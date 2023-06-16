import './button.css';

function ButtonSecond(props) {
  // eslint-disable-next-line react/prop-types
  const { children, style } = props;
  return <button className={'button-secondary ' + style}>{children}</button>;
}

export default ButtonSecond;
