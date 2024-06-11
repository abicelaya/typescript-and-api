import {ReportJokes} from './index';

export default function generarReport(
  chiste: object,
  score: number,
  fecha: Date
): ReportJokes {
  return {joke: chiste, score: score, date: fecha.toISOString()};
}
