var zero=document.querySelector("#zero")
var one=document.querySelector("#one")
var two=document.querySelector("#two")
var three=document.querySelector("#three")
var four=document.querySelector("#four")
var five=document.querySelector("#five")
var six=document.querySelector("#six")
var seven=document.querySelector("#seven")
var eight=document.querySelector("#eight")
var nine=document.querySelector("#nine")
var back="cardback.jpg"




var ct=document.getElementById("ct")//get click time contend
var matcht=document.getElementById("match")

var objective=[zero,one,two,three,four,five,six,seven,eight,nine]
var cardname=['godfather-poster.jpg','huntforthewilderpeople-poster.jpg'
    ,'fastandfurious-poster.jpg','meninblack3-poster.jpg','sherlockholmes2-poster.jpg']
var cardid=[0,0,1,1,2,2,3,3,4,4]
var flag=[true,true,true,true,true,true,true,true,true,true]

cardid.sort(function(){return Math.random() >=0.5 ?1:-1;})  //this code is for shuffering images

// alert (cardname[cardid[0]])


var count=0
var match=0
var compare
var pretarget
var preeva


function flip(target, name,eva){
    if (flag[eva]==true) {
        target.setAttribute("src", cardname[name])
        count++
        if ((count % 2 == 0) && (count != 0)) { // justify the click time is odds or even


            if (compare != name) { // to compare 2 images equal or not,if not do this;
                setTimeout(function () {
                    easyflip(target, name)

                }, 300)
                pretarget.setAttribute("src", back)
                flag[preeva]=true
            }
            else {
                match++
                matcht.innerHTML = "match times: "+match
                document.getElementById("calBar").style.width = parseInt(((match / 5) * 100), 10) + "%";
                if (match==5){
                    setTimeout( pop,300)
                   setTimeout( restart,300)

                }


                flag[eva] = false
                target.style.opacity=0.5
                pretarget.style.opacity=0.5


            }
        }
        else {
                compare = name
                pretarget = target
                flag[eva]=false
                preeva=eva
        }
        ct.innerText = "click times:"+count

    }
    else {}
}
function easyflip(target, name){
    target.setAttribute("src",back)
}


function  pop(){
    alert("WINNER!")
}
/////////////////This is Restart Part//////////////////////
function restart(shuffle){
    if(shuffle==1)
        {cardid.sort(function(){return Math.random() >=0.5 ?1:-1;})}
    count=0
    match=0
    matcht.innerHTML = "match times: "+match
    ct.innerText ="click times： " +count
    flag=[true,true,true,true,true,true,true,true,true,true]

    zero.setAttribute("src",back)
    one.setAttribute("src",back)
    two.setAttribute("src",back)
    three.setAttribute("src",back)
    four.setAttribute("src",back)
    five.setAttribute("src",back)
    six.setAttribute("src",back)
    seven.setAttribute("src",back)
    eight.setAttribute("src",back)
    nine.setAttribute("src",back)

    zero.style.opacity=1
    one.style.opacity=1
    two.style.opacity=1
    three.style.opacity=1
    four.style.opacity=1
    five.style.opacity=1
    six.style.opacity=1
    seven.style.opacity=1
    eight.style.opacity=1
    nine.style.opacity=1

}

/////////////////////////////////////////////

zero.addEventListener("click",function () {flip(zero,cardid[0],0)},false);

one.addEventListener("click",function () {flip(one,cardid[1],1)},false);

two.addEventListener("click",function () {flip(two,cardid[2],2)},false);

three.addEventListener("click",function () {flip(three,cardid[3],3)},false);

four.addEventListener("click",function () {flip(four,cardid[4],4)},false);

five.addEventListener("click",function () {flip(five,cardid[5],5)},false);

six.addEventListener("click",function () {flip(six,cardid[6],6)},false);

seven.addEventListener("click",function () {flip(seven,cardid[7],7)},false);

eight.addEventListener("click",function () {flip(eight,cardid[8],8)},false);

nine.addEventListener("click",function () {flip(nine,cardid[9],9)},false);

///////////////////change opacity//////////////////
//  function change(){
//      document.getElementById("zero").style.opacity=0.5
//      alert("hello")
//  }// this part is for testing opacity
