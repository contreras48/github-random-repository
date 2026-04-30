import { useState } from "react";

import { languageColors } from "../utils/languages.js";

function Select({ value, onChange }){
  const languagesOptions = Object.keys(languageColors)

return (
    <select name="languaje" className="body" value={value} onChange={e => onChange(e.target.value)}>
      <option value="">Select a lenguaje</option>
      {
        languagesOptions.map(lang => {
          return <option value={lang} key={lang}>{lang}</option>
        })
      }
    </select>
  );
}

export default Select;