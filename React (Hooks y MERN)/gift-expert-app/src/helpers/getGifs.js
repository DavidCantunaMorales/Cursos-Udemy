export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=31v35beVjXYG9o18uJJuMbm7HA8qfaYr&q=${category}&limit=10`;

  const resp = await fetch(url);

  {
    /* Destructuración de la respuesta de la api */
  }
  const { data } = await resp.json();
  console.log(data);
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
