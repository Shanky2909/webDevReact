const btnSpecifier = document.getElementById('btn');
console.log('btnSpecifier', btnSpecifier);
const handleClick = () => {
  document.getElementById('header').innerHTML = 'Hi, I got Clicked!';
};
btnSpecifier.addEventListener('click', handleClick);
