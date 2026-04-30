import Button from "./Button.jsx";
import Select from "./Select.jsx";

function Search ( { value, onChange }){
  return (
    <div className="container">
      <Select value={value} onChange={onChange} />
    </div>
  );
}

export default Search;