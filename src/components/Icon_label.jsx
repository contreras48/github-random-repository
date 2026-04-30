import { languageColors } from "../utils/languages.js";

function IconLabel({ icon: Icon, label, languaje = false }){
  const color = languaje ? languageColors[label] : "";

  return (
    <div className="icon-label">
      <Icon className="icon" fill={languaje && `${color}`} />
      <span className={`caption ${languaje && "variant"}`}>{label}</span>
    </div>
  );
}

export default IconLabel;






















