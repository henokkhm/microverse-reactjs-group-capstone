// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from '../styles/GenericList.module.css';

function GenericList({ data }) {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id} className={styles.listItem}>
          {item.value}
        </li>
      ))}
    </ul>
  );
}

GenericList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GenericList;
