import PropTypes from "prop-types";
import GradeTable from "./grade-table/grade-table";

export default function UserSections({ users }) {
  return (
    <>
      {users.map((user) => {
        return (
          <section
            key={user._id}
            className="flex flex-col items-center gap-y-2"
          >
            <h2>{user.name}</h2>
            <GradeTable grades={user.grades} />
          </section>
        );
      })}
    </>
  );
}

UserSections.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      grades: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          earned: PropTypes.number.isRequired,
          possible: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
