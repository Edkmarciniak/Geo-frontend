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
    grades: PropTypes.arrayOf(
      PropTypes.exact({
        _id: PropTypes.string.isRequired,
        gradeType: PropTypes.oneOf(["exam", "quiz", "homework"]).isRequired,
        name: PropTypes.string.isRequired,
        earned: PropTypes.number.isRequired,
        possible: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};
