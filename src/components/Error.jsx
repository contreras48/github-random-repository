import Button from "./Button.jsx"
import ErrorIcon from "./icons/ErrrorIcon.jsx";

function Repository() {
  return (
    <>
      <div className="container">
        <ErrorIcon width={48} height={48}/>
        <p className="body">
          Error fetching respositories
        </p>
      </div>
      <Button text={"Click to refresh"} role={"error"} />
    </>
  );
}

export default Repository;