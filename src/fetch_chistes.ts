export default async function fetchChistes(): Promise<object> {
  const urlChistes: string = 'https://icanhazdadjoke.com/';
  const result = await fetch(urlChistes, {
    headers: {
      Accept: 'application/json',
    },
  });

  const joke = await result.json();

  return joke;
}
