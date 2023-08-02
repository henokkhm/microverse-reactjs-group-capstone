// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Button({
  title, onReserve, className, id,
}) {
  return (
    <button id={id || ''} type="button" onClick={onReserve} className={className}>
      {title}
    </button>
  );
}
Button.propTypes = { title: PropTypes.string.isRequired };
Button.propTypes = { onReserve: PropTypes.func.isRequired };
Button.propTypes = { className: PropTypes.string.isRequired };
Button.propTypes = { id: PropTypes.string.isRequired };
export default Button;
