import { useState } from "react"

import Search from "./components/Search.jsx"
import Empty from "./components/Empty.jsx"

function App() {
const [status, setStatus] = useState("empty")

  return (
    <>
      <header className="header">
        <h1 className="title">Github Repository Finder</h1>
        <div>
          <h2 className="subtitle">Find your next repository</h2>
          <p className="body">Discover curated repository across your favorite stacks with technical precision</p>
        </div>
      </header>
      <Search />
      {status === "empty" && <Empty /> }
    </>
  )
}

export default App
