export const fetchGif = (query) => {
  return $.ajax({
    url: `https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=mnBC8r24dXN2jEHJLALbD3sBGVbllahA`
  });
};
