import { useState } from "react";

function Select({ value, onChange }){

return (
    <select name="languaje" className="body" value={value} onChange={e => onChange(e.target.value)}>
      <option value="">Select a lenguaje</option>
      <option value="JavaScript">JavaScript</option>
      <option value="Java">Java</option>
      <option value="Python">Python</option>
    </select>
  );
}

export default Select;