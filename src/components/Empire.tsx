import { useLocation } from 'react-router-dom';

const Empire: React.FC = () => {
  const location = useLocation();
  console.log(location);
  return <div>Empire</div>;
};

export default Empire;
