const img = document.querySelector('img');
const button = document.querySelector('button')
const inputEl = document.querySelector('input');

function imageFetch(){
  const input = inputEl.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=5eY19iRx1sRUVpsfZ3WALekwrLt82JQ6&q=${input}`;
fetch(url, {mode:'cors'})
  .then(function(response){
      return response.json();
  })
  .then(function(response){
      img.src = response.data[9].images.original.url;
  })
  .catch(function(err){
      console.error('error fetching gif:', err)
  })
}

  button.addEventListener('click', imageFetch);