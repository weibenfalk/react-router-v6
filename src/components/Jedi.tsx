import { Link, Outlet, Routes, Route } from 'react-router-dom';
import Yoda from './Yoda';
import Luke from './Luke';
import Nothing from './Nothing';

const Jedi: React.FC = () => (
  <div>
    <p>This is the JEDI page</p>
    <Link to='yoda'>
      <p>Yoda</p>
    </Link>
    <Link to='luke/skywalker'>
      <p>Luke</p>
    </Link>
    <Outlet />
  </div>
);

export default Jedi;
