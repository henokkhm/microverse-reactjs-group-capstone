import { useSelector } from 'react-redux';

function Rockets() {
  const { rocketsList } = useSelector((store) => store.rockets);

  return (
    <section>
      <h2>Rockets</h2>
      <div>Rockets page content</div>
      <pre>{JSON.stringify(rocketsList, null, 2)}</pre>
    </section>
  );
}

export default Rockets;
