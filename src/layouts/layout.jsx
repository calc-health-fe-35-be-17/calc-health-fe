/* eslint-disable react/prop-types */
import NavigationBar from '../components/navbar/navbar';
import FooterComponent from '../components/footer/footer';

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <NavigationBar />
      <div>{children}</div>
      <FooterComponent />
    </>
  );
}
