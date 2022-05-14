var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var foo = document.getElementById('game');
var oo = document.getElementById('over');



function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

function start(){
    
    setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        let result = document.getElementById("scoreSpan").innerHTML = Math.floor(counter/80);

        if(start) {
            counter++;
        }

        if(blockLeft<=70 && blockLeft>20 && characterTop>=130){
            block.style.animation = "none";
            oo.style.display = 'block';
            clearInterval(result);
            document.getElementById("res").innerHTML = result;
        }           
    }, 10);

   if(foo.style.display == '' || foo.style.display == 'none'){
        foo.style.display = 'block';
   }
   else {
        foo.style.display = 'none';
}

}


function restart() {
    location.reload();
}