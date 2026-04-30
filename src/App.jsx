import { startTransition, useEffect, useState } from "react"

import Search from "./components/Search.jsx"
import Empty from "./components/Empty.jsx"
import Loading from "./components/Loading.jsx"
import Repository from "./components/Repository.jsx"
import Error from "./components/Error.jsx"
import { getRandomRepo } from "./services/githubRandomRepository.js"

function App() {
  const [status, setStatus] = useState("empty");
  const [value, setValue] = useState("")
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    if (value === "") return

    setStatus("loading");
    getRandomRepo(value).then(
      repo => {
        setRepository(repo);
        setStatus("load");
      })
      .catch(
        error => {
          console.error(error);
          setStatus("error")
        }
      )
  }, [value]);

  return (
    <>
      <header className="header">
        <h1 className="title">Github Repository Finder</h1>
        <div>
          <h2 className="subtitle">Find your next repository</h2>
          <p className="body">Discover curated repository across your favorite stacks with technical precision</p>
        </div>
      </header>
      <Search value={value} onChange={setValue} />
      {status === "empty" && <Empty />}
      {status === "loading" && <Loading />}
      {status === "load" && <Repository avatarUrl={repository.owner.avatar_url} title={repository.name} userName={repository.owner.login} description={repository.description} language={value} starCount={repository.stargazers_count} forkCount={repository.forks_count} />}
      {status === "error" && <Error />}
    </>
  )
}

export default App
