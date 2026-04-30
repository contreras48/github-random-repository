import RefreshIcon from "./icons/RefreshIcon.jsx"

function Button({icon: Icon, text, role, onClick}){
  return (
    <button className={`body button-${role}`} onClick={onClick}>
      <RefreshIcon />
      <span >{text}</span>
    </button>
  );
}

export default Button;