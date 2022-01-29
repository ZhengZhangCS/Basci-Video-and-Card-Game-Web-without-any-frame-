var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");
var queries = new Array(img1, img2, img3, img4);
var tempObject;

var hScore = document.getElementById("score");
var targetImg1 = "gameResources/1.jpg";
var targetImgs = new Array("gameResources/1.jpg","gameResources/2.jpg","gameResources/1.jpg","gameResources/2.jpg");
var blankImg = ("gameResources/blank.jpg");

var clickTimes = 0;
var score = 0;
var tempImg;

//Set listeners
img1.addEventListener("click", function(){changeImg(img1)}, false);
img1.addEventListener("click", function(){setTimeout("checkImg(img1)", 300)}, false);

img2.addEventListener("click", function(){changeImg(img2)}, false);
img2.addEventListener("click", function(){setTimeout("checkImg(img2)", 300)}, false);

img3.addEventListener("click", function(){changeImg(img3)}, false);
img3.addEventListener("click", function(){setTimeout("checkImg(img3)", 300)}, false);

img4.addEventListener("click", function(){changeImg(img4)}, false);
img4.addEventListener("click", function(){setTimeout("checkImg(img4)", 300)}, false);


//Method that get the corresponding query index.
function getCor(i){
    for(n = 0; n < queries.length; n++){
       if (i.getAttribute("id") == queries[n].getAttribute("id")){
           return n;
       }
    }
}

//Change the img from ? to target img.
function changeImg(i){
    i.setAttribute("src", targetImgs[getCor(i)]);
    clickTimes += 1;
    if (clickTimes == 0 || clickTimes % 2 != 0){
        getTempImg(i);
        tempObject = i;
    }
    
}

//Check the two img are the same, if not, converes the img (back to ?)
function checkImg(i){
    // alert(clickTimes);
    if(checkTimes()){
        if(i.getAttribute("src") == tempImg){
            // alert(clickTimes);
            score += 100;
            hScore.innerHTML = "Score: " + score;
        }
        else {
            i.setAttribute("src", blankImg);
            tempObject.setAttribute("src", blankImg);

        }
    }
}

//Help method 
function getTempImg(i){
    tempImg = i.getAttribute("src");
}

//Help method
function checkTimes(){
    var isEven = false;
    if (clickTimes % 2 == 0){
        isEven = true;
    }
    return isEven;
}

//Product random number [n,m]
function randomNum(minNum, maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1, 10);
        break;
        case 2:
            return parseInt(Math.random()*(maxNum - minNum + 1) + minNum, 10);
        break;
            default:
                return 0;
            break;
    }
}

//Refresh
function refreshImgs(){
    img1.setAttribute("src", blankImg);
    img2.setAttribute("src", blankImg);
    img3.setAttribute("src", blankImg);
    img4.setAttribute("src", blankImg);

    for (var i = 1; i < targetImgs.length; i++) {
        var random = Math.floor(Math.random() * (i + 1));
        [targetImgs[i], targetImgs[random]] = [targetImgs[random], targetImgs[i]];
    }
}


//Randomly choose a img and delete the img.
// function selectImg(imgs){
//     return imgs.splice(randomNum(0,imgs.length - 1), 1);
// }


