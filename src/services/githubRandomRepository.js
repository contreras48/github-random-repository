import { fetchRepos } from "../api/github";

export async function getRandomRepo(language) {
  const repos = await fetchRepos(language);

  if (!repos.length) {
    throw new Error("No se encontraron repositorios");
  }

  const randomIndex = Math.floor(Math.random() * repos.length);
  return repos[randomIndex];
}