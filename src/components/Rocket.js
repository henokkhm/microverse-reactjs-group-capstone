import PropTypes from 'prop-types';

function Rocket({ name, type, imgUrl }) {
  return (
    <div>
      <div>{name}</div>
      <div>{type}</div>
      <img src={imgUrl} alt={`${name} rocket`} />
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Rocket;
