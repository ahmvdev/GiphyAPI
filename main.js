const img = document.querySelector('img');
const button = document.querySelector('button')
const inputEl = document.querySelector('input');

function imageFetch(){
  const input = inputEl.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=API_KEY_HERE&q=${input}`; //fetching the api here and passing the input value of the input field
fetch(url, {mode:'cors'})
  .then(function(response){
      return response.json();
  })
  .then(function(response){
      img.src = response.data[9].images.original.url;
  })
  .catch(function(err){ //catches an error if there is any
      console.error('error fetching gif:', err)
  })
}

  button.addEventListener('click', imageFetch); //calling the main function here when the button is clicked