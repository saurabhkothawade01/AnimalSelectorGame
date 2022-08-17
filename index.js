let AnimalImage = new Array("1.jpg", "2.jpg", "3.jpg");
let AnimalName = new Array("cat", "dog", "horse");
let score = 0;

function startGame() {
    let animImage = document.getElementById("animImage");
    let animName = document.getElementById("animName");

    let lenImage = AnimalImage.length;
    let lenName = AnimalName.length;

    let ranName = Math.floor(lenName*Math.random());
    let ranImage = Math.floor(lenImage*Math.random());

    animImage.src = AnimalImage[ranImage];
    animName.innerHTML = AnimalName[ranName];

    ranHeight = Math.floor(Math.random() *  1350 );
    ranWidth = Math.floor(Math.random() *  490 ); 

    animImage.style.left = ranHeight+"px";
    animImage.style.top = ranWidth+"px";

    ref = setTimeout(startGame, 2000);
}

function selectAnim() {
    let animName = document.getElementById("animName");
    let sc = document.getElementById("sc");
    let animImage = document.getElementById("animImage");
    let blinking = document.getElementById("blinking");

    let refImage = animImage.src;
    let redName = animName.innerHTML;

    if(refImage.substr(-5) == "1.jpg" && redName == "dog") {
        score++;
        sc.innerHTML = score;
    }

    else if(refImage.substr(-5) == "2.jpg" && redName == "cat") {
        score++;
        sc.innerHTML = score;
    }

    else if(refImage.substr(-5) == "3.jpg" && redName == "horse") {
        score++;
        sc.innerHTML = score;
    }

    else {
        sc.innerHTML = "Score";
        clearTimeout(ref);
        blinking.innerHTML = "Game Over!!! <br />"+"Total Score "+score;
        animImage.src = "";
        score = 0;
    }
}