import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
});

export default { playerShape };
