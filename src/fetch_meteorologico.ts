export default async function fetchMeteorologico(): Promise<object> {
  const urlTiempo: string =
    'http://api.weatherapi.com/v1/current.json?key=7c2e8bc47a3a44c5b2395214241206&q=barcelona';
  const result = await fetch(urlTiempo, {
    headers: {
      Accept: 'application/json',
    },
  });

  const tiempo = await result.json();
  console.log(tiempo);
  return tiempo;
}
