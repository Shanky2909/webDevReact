const handleClick = () => {
  console.log('clicked');
};
const Button = ({ name }) => {
  return <button onClick={handleClick}>{name}</button>;
};
export default Button;
