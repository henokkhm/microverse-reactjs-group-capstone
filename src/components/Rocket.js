import PropTypes from 'prop-types';

function Rocket({ name, description, imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt={`${name} rocket`} />
      <div>
        <h3 className={styles.rocketName}>{name}</h3>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Rocket;
