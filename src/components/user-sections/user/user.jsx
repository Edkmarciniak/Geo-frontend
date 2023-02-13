import PropTypes from "prop-types";

export default function User({ user }) {
  return (
    <section key={user._id}>
      <h2>{user.name}</h2>
    </section>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
