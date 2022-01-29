var fastplay=document.querySelector("#fastandfurious");
var godplay=document.querySelector("#godfather");
var hunteplay=document.querySelector("#huntforthewilderpeople")
var menplay= document.querySelector("#meninblack3")
var sherplay=document.querySelector("#sherlockholmes2")
var videoElement=[fastplay,godplay,hunteplay,menplay,sherplay]
var PV=document.getElementById("PV")
var playBtn=document.getElementById("play_btn")
var volume=0.1
var vol_value=document.getElementById("volume")
var current=0
var seekbar=document.getElementById("bar")
var progress=document.getElementById("progress")
var PVname=["Fast and Furious","Godfather","Hunt for Wilder People","Men in Black 3","Sherlock Holmes 2"]
var ifLoop=true
var prevolume=0


var sourceList=["fastandfurious-trailer.mov","Godfather-trailer.mov","huntforthewilderpeople-trailer.mov","meninblack3-trailer.mov"
    ,"sherlockholmes2-trailer.mov"]
var imageList=['fastandfurious-poster.jpg','godfather-poster.jpg','huntforthewilderpeople-poster.jpg','meninblack3-poster.jpg','sherlockholmes2-poster.jpg']

/////////Dynamic Cration///////////////////////////////////////

for(let i=0;i<5;i++){
    let rotateList=document.createElement("div");
    rotateList.className="ListClass";
    rotateList.setAttribute("id","list"+i);
    let listPoster=document.createElement("img");
    listPoster.className="posterClass"
    listPoster.setAttribute("id","poster"+i);
    listPoster.setAttribute("src",imageList[i])
    rotateList.innerHTML=PVname[i];
    document.getElementById("List").appendChild(rotateList);
    document.getElementById("list"+i).appendChild(listPoster)
    rotateList.addEventListener("click",function(){changePV(i);
    });
}

document.getElementById("PV").src=sourceList[0];
function changePV(ii){
    if(ii>=0&&ii<sourceList.length) {
        PV.src = sourceList[ii];
        document.getElementById("playName").innerText=PVname[ii];
        console.log(PVname[ii]);
        PV.pause();
        PV.poster=imageList[ii];
        current = ii;
        document.getElementById("previous").setAttribute("src", imageList[(current - 1)])
        document.getElementById("next").src = imageList[(current + 1)];
        selectedPV(ii)
    }
    else if(ii<0){
        alert("this is the first")
    }
    else  if(ii>=sourceList.length){
        alert("this is the last")
    }
    // alert(current)
}

//////////////////////////////////////////////////////////////

let bool=false;
function video_pause(){
        if(bool==true){
            PV.pause();
            bool=false;
            playBtn.setAttribute("value","play")
        }
        else{
            PV.play();
            bool=true;
            playBtn.setAttribute("value","pause")
        }

}
PV.addEventListener("timeupdate",updatebar,false)
progress.addEventListener("click",moveseek,false)
document.getElementById("muteBtn").addEventListener("click",mute,false)

function mute(){
    if(PV.volume==0){

        document.getElementById("mute").setAttribute("src","sound.png")
        PV.volume=prevolume
        vol_value.innerText="VOLUME: "+(volume*100)+ "%"
    }
    else{
        prevolume=PV.volume;
        PV.volume=0;
        document.getElementById("mute").src="mute.png"
        vol_value.innerText="VOLUME: "+0+ "%"
    }
}
function volumeUp(){
    document.getElementById("mute").src="sound.png"
    if(PV.muted===true){
        PV.muted=false
    }
    if(volume<=0.9){
        volume= Math.floor(volume*10+1)/10
        PV.volume=volume;
    }
    else{
        volume=1;
        PV.volume=volume;
    }
    // alert(PV.volume)
    vol_value.innerText="VOLUME: "+(volume)*100 +"%"
}

function volumeDown(){
    if(PV.volume>=0.1){
    volume= Math.floor(volume*10-1)/10;
    PV.volume=volume;
    console.log(PV.volume);
    }
    else{
        PV.volume=0;
        console.log(PV.volume);
        document.getElementById("mute").src="mute.png"
    }
    // alert(PV.volume)
    vol_value.innerText="VOLUME: "+(volume*100)+ "%" //there is a bug！！！

}

// function playAll(){
//
//         current++;
//         PV.setAttribute("src",sourceList[current]);
//         PV.play();
// }
function playAll(){
    if(ifLoop==true) {
        PV.addEventListener("ended", playNext, false);
        document.getElementById("playall").value="play all: ON"
        ifLoop=false

    }
    else{
        PV.removeEventListener("ended",playNext,false)
        document.getElementById("playall").value = "play all: OFF"
        ifLoop=true
    }
}
function playNext(){

    PV.setAttribute("src",sourceList[current++])
    PV.load()
    PV.play()
    selectedPV(current)
    preview(current)
    document.getElementById("playName").innerText=PVname[current];
    console.log(current)
    if (current>=sourceList.length){
        alert("Playlist is over!")
    }
}

// to change color of the selected list
function selectedPV(id) {
    for (let i = 0; i < 5; i++) {
        document.getElementById("list" + i).style.backgroundColor="white"
        document.getElementById("list" + id).style.backgroundColor="orange"
    }
}


function preview(ii){
    if(ii>=0&&ii<sourceList.length) {
        current = ii;
        document.getElementById("previous").setAttribute("src", imageList[(current - 1)])
        document.getElementById("next").src = imageList[(current + 1)];
    }
    else if(ii<0){
        alert("this is the first")
    }
    else  if(ii>=sourceList.length){
        alert("this is the last")
    }
}


function fullscreen(){
    PV.requestFullscreen()

}

function updatebar(){
    seekbar.style.width = parseInt(((this.currentTime / PV.duration) * 100), 10) + "%";
    updateTime();
}

function moveseek(e){
    var clickPosition = (e.pageX - this.offsetLeft) / this.offsetWidth;// here this means the objective of listener;
    var clickTime = clickPosition * PV.duration;
    // move the playhead to the correct position
    PV.currentTime = clickTime;
}

function updateTime(){
    let cmin=Math.floor(PV.currentTime/60);
    let csecond=Math.floor(PV.currentTime%60);
    let dmin=Math.floor(PV.duration/60);
    let dsecond=Math.floor(PV.duration%60);
    document.getElementById("time").innerHTML="TIME: "+cmin+":"+csecond+"/"+dmin+":"+dsecond
}

document.getElementById("previous").setAttribute("src",imageList[(current-1)])
document.getElementById("next").src=imageList[(current+1)];
document.getElementById("previous").addEventListener("click",function () {changePV(current-1)

})
document.getElementById("next").addEventListener("click",function () {changePV(current+1)})

