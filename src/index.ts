import fetchUser from "./githubAPI";

(async () => {
  const userData = await fetchUser('crypt096');
  document.querySelector('h1').innerHTML = JSON.stringify(userData);
})();