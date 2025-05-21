fetch("https://rickandmortyapi.com/api/characteerr")
  .then((response) => {
     (!response.ok) {
     if throw new Error(response.statusText);
    }

    return response.json();
  })
  .then((data) => {
    const charaters = data.results.slice(0, 5);
    // console.log(charaters);

    charaters.forEach((charater) =>
      console.log(
        `${charater.name}, status: ${charater.status}, especie: ${charater.species}`
      )
    );
  })
  .catch((error) => console.error(error))
  .finally(() => {
    console.log("END");
  });

setTimeout(() => {
  console.log("Pasaron 3 segundos");
}, 3000);
