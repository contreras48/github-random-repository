import IconLabel from "./Icon_label.jsx";
import StarIcon from "./icons/StarIcon.jsx"
import ForkIcon from "./icons/ForkIcon.jsx"
import ClockIcon from "./icons/ClockIcon.jsx"
import CricleIcon from "./icons/CircleIcon.jsx"
import Button from "./Button.jsx"

function Repository( { avatarUrl, title, userName, description, language, starCount, forkCount, } ){
  return (
    <>
      <div className="container">
      <div className="repository-user">
        <img src={avatarUrl} alt="avatar" />
        <div>
          <h3 className="title-repository">
            {title}
          </h3>
          <span className="caption">
            {`${userName} / ${title}`}
          </span>
        </div>
      </div>
      <div className="repository-descrption">
        <p className="body">
          {description}
        </p>
      </div>
      <div className="repository-details">
        <div className="stats">
          <IconLabel icon={CricleIcon} label={language} languaje={true} />
          <IconLabel icon={StarIcon} label={starCount}/>
          <IconLabel icon={ForkIcon} label={forkCount}/>
        </div>
        {/* <IconLabel icon={ClockIcon} label="Update 2 days ago"/> */}
      </div>
    </div>
    <Button text={"Click to refresh"} role={"primary"}/>
    </>
  );
}

export default Repository;