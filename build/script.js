const requestJoke = async () => {
  const responseJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const responseJOSN = await responseJoke.json();
  const joke = responseJOSN.joke;
  printToConsole(joke);
};

const printToConsole = (joke) => {
  document.getElementById("joke").innerText = joke;
};

requestJoke();
