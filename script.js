let transition = document.querySelector('.btn');
let right_side = document.querySelector('.right-side');
let images_container= document.querySelector('.images-container')


axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    let json = response.data.results;
    console.log(json)
    images_container.innerHTML = ''
    for(let i = 0; i < 3; i++){
      images_container.innerHTML += `<img class="img${i}" src="images/${json[i].cover_art}"></img>`
    }
  })
