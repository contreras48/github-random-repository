import FetchingIcon from "./icons/FetchingIcon.jsx"

function Loading(){
  return (
    <div>
      <div className="loading">
        <FetchingIcon fill={"#E5E1E4"} width={44} height={44} />
        <h2 className="subtitle">
          Fetching repository...     
        </h2>
      </div>
      <p className="body">Scanning open-source repositories, please wait</p>
    </div>
  ); 
}

export default Loading