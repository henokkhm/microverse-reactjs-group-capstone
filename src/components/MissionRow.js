import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import style from '../styles/MissionsTable.module.css';
import { toggleMissionJoined } from '../redux/missions/missionsSlice';

function Button({
  title, onReserve, className, id,
}) {
  return (
    <button
      id={id || ''}
      type="button"
      onClick={onReserve}
      className={className}
    >
      {title}
    </button>
  );
}
Button.propTypes = { title: PropTypes.string.isRequired };
Button.propTypes = { onReserve: PropTypes.func.isRequired };
Button.propTypes = { className: PropTypes.string.isRequired };
Button.propTypes = { id: PropTypes.string.isRequired };

function MissionRow({
  id, name, description, isJoined,
}) {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(toggleMissionJoined({ id }));
  };

  return (
    <tr key={id}>
      <td className={style.title}>{name}</td>
      <td className={style.desc}>{description}</td>
      <td className={style.stutus_update}>
        <span className={isJoined ? style.member : style.nmember}>
          {isJoined ? 'Active Member' : 'Not a member'}
        </span>
      </td>
      <td className={style.stutus_update}>
        <Button
          id={id}
          title={isJoined ? 'Leave mission' : 'Join Mission'}
          className={isJoined ? style.btn : style.joind}
          onReserve={() => handleClick(id)}
        />
      </td>
    </tr>
  );
}

MissionRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isJoined: PropTypes.bool.isRequired,
};

export default MissionRow;
