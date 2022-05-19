var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var foo = document.getElementById('game');
var oo = document.getElementById('over');

var ctx = document.getElementById("canvas").getContext("2d"),
    canvasTemp = document.createElement("canvas"),
    scrollImg = new Image(),
    tempContext = canvasTemp.getContext("2d"),
    imgWidth = 0,
    imgHeight =0,
    imageData = {},
    canvasWidth = 500,
    canvasHeight = 200,
    scrollVal = 0,
    speed =2;

    scrollImg.src = "animation/cloud.png";
    scrollImg.onload = loadImage;

    function loadImage(){
        imgWidth = scrollImg.width,
        imgHeight = scrollImg.height;
        canvasTemp.width = imgWidth;
        canvasTemp.height =  imgHeight;    
        render();                
    }
    

    function render(){
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
    
        if(scrollVal >= canvasWidth){
            scrollVal = 0;
        }
    
        scrollVal+=speed;                   
        ctx.drawImage(scrollImg,canvasWidth-scrollVal,0,scrollVal,imgHeight, 0, 0, scrollVal,imgHeight);
        ctx.drawImage(scrollImg,scrollVal,0,imgWidth, imgHeight);
        ctx.drawImage(scrollImg,-scrollVal,0,imgWidth, imgHeight);
        ctx.drawImage(scrollImg,canvasWidth-scrollVal,0,imgWidth, imgHeight);
    
        setTimeout(function(){render();},10);
    }


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
        //let block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
        let result = document.getElementById("scoreSpan").innerHTML = Math.floor(counter/10);

        if (result == 50) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.9s infinite linear, fly 0.3s infinite";
              }, 500);           
        }
        if (result == 100) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.8s infinite linear, fly 0.3s infinite";
              }, 500);           
        }
        if (result == 200) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.7s infinite linear, fly 0.3s infinite";
              }, 500);           
        }
        if (result == 300) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.6s infinite linear, fly 0.3s infinite";
              }, 500);           
        }
        if (result == 400) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.5s infinite linear, fly 0.3s infinite";
              }, 500);           
        }
        if (result == 500) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.4s infinite linear, fly 0.3s infinite";
              }, 500);           
        }
        if (result == 1000) {
            block.style.animation = "none";
            block.style.background = "url('animation/rBird.png')";
            block.style.left = "480px";
            block.classList.remove("animate"); 
            void block.offsetWidth; 
            block.classList.add("animate");
            setTimeout(function(){
                block.style.animation = "block 0.36s infinite linear";
              }, 500);           
        }

        if(start) {
            counter++;
            character.classList.add("anima");           
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