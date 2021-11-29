import { Routes, Route, Link } from 'react-router-dom';
import Jedi from './components/Jedi';
import Empire from './components/Empire';
import Rebel from './components/Rebel';
import Yoda from './components/Yoda';
import Luke from './components/Luke';
import Nothing from './components/Nothing';

const App: React.FC = () => (
  <>
    <div>
      <Link to='jedi'>
        <p>Jedi Page</p>
      </Link>
      <Link to='empire'>
        <p>Empire Page</p>
      </Link>
      <Link to='rebel'>
        <p>Rebel Page</p>
      </Link>
    </div>
    <Routes>
      <Route path='jedi' element={<Jedi />}>
        <Route index element={<Yoda />} />
        <Route path='yoda' element={<Yoda />} />
        <Route path='luke' element={<Luke />}>
          <Route path=':someotherstuff' element={<Luke />} />
        </Route>
        <Route path='*' element={<Nothing />} />
      </Route>
      <Route path='empire' element={<Empire />} />
      <Route path='rebel' element={<Rebel />} />
    </Routes>
  </>
);

export default App;
