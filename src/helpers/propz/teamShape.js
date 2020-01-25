import PropTypes from 'prop-types';

const teamShape = PropTypes.shape({
  id: PropTypes.string,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  player3: PropTypes.string.isRequired,
  player4: PropTypes.string.isRequired,
  player5: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isWaitlist: PropTypes.bool.isRequired,
});

export default { teamShape };
