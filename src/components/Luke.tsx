import React from 'react';
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom';

const Luke: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [redirectToEmpire, setRedirectToEmpire] = React.useState(false);

  // const handleClick = () => navigate('/empire');
  const handleClick = () => setRedirectToEmpire(true);

  console.log(location);
  console.log(params);
  return (
    <div>
      <p>This is the LUKE {params.someotherstuff} page</p>
      <button onClick={handleClick}>Navigate to Empire</button>
      {redirectToEmpire ? <Navigate to='/empire' state={{ fromRoute: location }} /> : null}
    </div>
  );
};

export default Luke;
