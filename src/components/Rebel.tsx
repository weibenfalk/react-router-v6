import { useSearchParams } from 'react-router-dom';

const Rebel: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('ship'));
  console.log(searchParams.get('baseLocation'));

  const handleClick = () => setSearchParams({ ship: 'x-wing', baseLocation: 'hoth' });

  return (
    <div>
      <p>This is the REBEL page</p>
      <button onClick={handleClick}>Set search params</button>
    </div>
  );
};

export default Rebel;
