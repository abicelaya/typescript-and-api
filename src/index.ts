import fetchChistes from './fetch_chistes.js';
import generarReport from './valoracion_chistes.js';

//Definicion de tipos de datos
interface Joke {
  id: string;
  joke: string;
  status: number;
}
export interface ReportJokes {
  joke: object;
  score: number;
  date: string;
}

//Definir variables globales. Y asignamos el valor inicial
const reportJokes: ReportJokes[] = [];
let chiste = await fetchChistes();
let reportChiste = generarReport(chiste, 0, new Date());

// Acciones que pasan cuando clicko next
const buttonNext = document.querySelector('#next-joke');
buttonNext?.addEventListener('click', async e => {
  e.preventDefault();
  reportJokes.push(reportChiste);

  chiste = await fetchChistes();
  reportChiste = generarReport(chiste, 0, new Date());
  printJoke(chiste as Joke);
  console.log(reportJokes);
});

const button1 = document.querySelector('#button1');
button1?.addEventListener('click', e => {
  e.preventDefault();
  reportChiste = generarReport(chiste, 1, new Date());
});

const button2 = document.querySelector('#button2');
button2?.addEventListener('click', e => {
  e.preventDefault();
  reportChiste = generarReport(chiste, 2, new Date());
});

const button3 = document.querySelector('#button3');
button3?.addEventListener('click', e => {
  e.preventDefault();
  reportChiste = generarReport(chiste, 3, new Date());
});

function printJoke(data: Joke) {
  const jokePlaceholder = document.querySelector('#joke-random');

  if (jokePlaceholder) {
    jokePlaceholder.innerHTML = data.joke;
  }
}
printJoke(chiste as Joke);
