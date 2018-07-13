let wrapper = document.querySelector('.scrolling-wrapper');
let track_display = document.querySelector('.container');
let clear = document.querySelector('#clear')
let submit = document.querySelector('#submit')

axios.get('https://lit-fortress-6467.herokuapp.com/object')
  .then(response => {
    var json = response.data.results;
    console.log(json)
    for(let i = 0; i < json.length; i++){
      wrapper.innerHTML += `<img class="imgs ${json[i].cover_art}" src="images/${json[i].cover_art}"></img>`
    }
  })

wrapper.addEventListener('click', function() {
  const className = event.target.className
  axios.get('https://lit-fortress-6467.herokuapp.com/object')
    .then(response => {
      console.log(className)
      var json = response.data.results;
      for(let i = 0; i < json.length; i++){
        console.log(`imgs ${json[i].cover_art}`)
        if(className == `imgs ${json[i].cover_art}`){
          track_display.innerHTML += `<p>${json[i].title}</p>`
        }
      }
    }
  )
})


clear.addEventListener('click', function(){
  track_display.innerHTML = ''
})



submit.addEventListener('click', function(){
  alert('Your tracks were submitted.')
})
