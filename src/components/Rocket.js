import PropTypes from 'prop-types';

function Rocket({ name, description, imgUrl }) {
  return (
    <div>
      <div>{name}</div>
      <div>{description}</div>
      <img src={imgUrl} alt={`${name} rocket`} />
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Rocket;
