import './button.css';

function ButtonPrimary(props) {
  // eslint-disable-next-line react/prop-types
  const { children, style } = props;
  return <button className={'button-primary ' + style}>{children}</button>;
}

export default ButtonPrimary;
