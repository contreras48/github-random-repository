import IconLabel from "./Icon_label.jsx";
import StarIcon from "./icons/StarIcon.jsx"
import ForkIcon from "./icons/ForkIcon.jsx"
import ClockIcon from "./icons/ClockIcon.jsx"
import CricleIcon from "./icons/CircleIcon.jsx"
import Button from "./Button.jsx"

function Repository(){
  const userIcon = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";
  return (
    <>
      <div className="container">
      <div className="repository-user">
        <img src="userIcon" alt="" />
        <div>
          <h3 className="title-repository">
          driver.js
          </h3>
          <span className="caption">
            kamranahmedse / driver.js
          </span>
        </div>
      </div>
      <div className="repository-descrption">
        <p className="body">
          A light-weight, no-dependency, vanilla JavaScript engine to drive the user's focus across the page. Highly customizable and supports all major browsers.
        </p>
      </div>
      <div className="repository-details">
        <div className="stats">
          <IconLabel icon={CricleIcon} label={"JavaScript"} languaje={true} />
          <IconLabel icon={StarIcon} label="1.8k"/>
          <IconLabel icon={ForkIcon} label="1.2k"/>
        </div>
        <IconLabel icon={ClockIcon} label="Update 2 days ago"/>
      </div>
    </div>
    <Button text={"Click to refresh"} role={"primary"}/>
    </>
  );
}

export default Repository;