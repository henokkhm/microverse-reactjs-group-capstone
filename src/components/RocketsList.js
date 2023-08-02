import { useSelector } from 'react-redux';

function RocketsList() {
  const { rocketsList } = useSelector((store) => store.rockets);

  return (
    <div>
      <h3>RocketsList Component</h3>
      <pre>{JSON.stringify(rocketsList, null, 2)}</pre>
    </div>
  );
}

export default RocketsList;
