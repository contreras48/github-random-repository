const BASE_URL = "https://api.github.com";

export async function fetchRepos(language) {
  const response = await fetch(
    `${BASE_URL}/search/repositories?q=language:${language}&sort=stars&order=desc`
  );

  if (!response.ok) {
    throw new Error("Error al obtener repositorios");
  }

  const data = await response.json();
  return data.items;
}