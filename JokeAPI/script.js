const api ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist&type=single";

$("a").click(function(){
newJoke();
$('.load').attr('id', 'loading-mask')
setTimeout(function(){ $('.load').removeAttr('id', 'loading-mask') }, 800);
});

function newJoke(){
$.getJSON(api, function(data) {
  $("h1").text(data.joke)
  // console.log(data)
})
}

