import { Switch, Route, Link } from 'react-router-dom';
import './styles/index.css';

const NavigationBar = () => {
  return (
    <>
      <div className='menu'>
        <ul id='nav-list' className='navigation-list'>
          <li key='Home'>
            <Link to='/'>Home</Link>
          </li>
          <li key='MyQuiz'>
            <Link to='/my-quizes'>My Quizes</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/' exact>
          <div>Home</div>
        </Route>
        <Route path='/my-quizes'>
          <div>My Quizes</div>
        </Route>
      </Switch>
    </>
  );
};

export default NavigationBar;
