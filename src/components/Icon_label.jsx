function IconLabel({ icon: Icon, label, languaje = false }){
  return (
    <div className="icon-label">
      <Icon className="icon" fill={languaje && "#ffff00"} />
      <span className={`caption ${languaje && "variant"}`}>{label}</span>
    </div>
  );
}

export default IconLabel;






















