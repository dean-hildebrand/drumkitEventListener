
var numberOfButtons = document.querySelectorAll('.drum').length

for (var i = 0; i < numberOfButtons; i++) {

var audio = new Audio('./sounds/tom-1.mp3')
document.querySelectorAll('.drum')[i].addEventListener("click", function(){
  audio.play()
})
}
