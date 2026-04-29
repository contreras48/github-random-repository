import RefreshIcon from "./icons/RefreshIcon.jsx"

function Button({icon: Icon, text, role}){
  return (
    <button className={`body button-${role}`}>
      <RefreshIcon />
      <span >{text}</span>
    </button>
  );
}

export default Button;