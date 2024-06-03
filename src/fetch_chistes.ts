interface Data {
  id: string;
  joke: string;
  status: number;
}

function printJoke(data: Data) {
  const jokePlaceholder = document.querySelector('#joke-random');

  if (jokePlaceholder) {
    jokePlaceholder.innerHTML = data.joke;
  }
}

export default function fetchChistes(): void {
  const urlChistes: string = 'https://icanhazdadjoke.com/';
  fetch(urlChistes, {
    headers: {
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => printJoke(data));
}
