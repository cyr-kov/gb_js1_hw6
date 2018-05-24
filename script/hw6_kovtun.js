var images=["06475c490af96ca45702b2b1295c1932","0835e5ed55f1f5290a9b615fcedf2256","2cdab0e25dc2636413e9f1a2b5f2a691",
    "34c5c6cc3592567580caff1e1c1a7bf1","3e01aad7aeda641d1ead92deb63f35c6","53ca22185bff4553939899bc5a4ad54d",
    "5609b144345cbe22fc345ef1c0febc84","5a1411bf73e1a78d0de36049ea52d55f","63df882ffbcbb1bfcd45b34b6f6e395f",
    "6872def1ad6f603710775dd5fa7ba8f9","852f248d31553419794eef4e6b034e8f","979331c7c968b6757eb05f4234d8e5ec",
    "9b89b221395c797ac7a09108ad048a7e","b5f0ac84498991d39342ec6373c69337","bae6fe7ce4996dcff587aacf9e083114",
    "d7917f67ae62a9b8f5d3a3bb207aac47"]
var currentPicture=0;

function showBigPicture(){
    var thumbs=document.getElementById("thumbs");
    var placeWidth=document.getElementsByClassName("slider")[0].clientWidth;
    var count=Math.round(placeWidth/(130+20));
    for (var i=0;i<count;i++){
        var div=document.createElement("div");
        div.className="thumb";
        var a=document.createElement("a");
        a.style.display="block";
        a.href="#";
        var z=images[i];
        a.id=z;
        a.onclick=function(){
                setBigImg(this.id);
        };
        var img=document.createElement("img");
        img.src="images/thumbs/"+images[i]+"_sm.jpg";
        //img.onerror=alert('No image found');
        if (i==(count-1)) {
            div.style.marginRight="";
        }
        a.appendChild(img);
        div.appendChild(a);
        thumbs.appendChild(div);
    }
}

function setBigImg(src){
    place=document.getElementById("place");
    place.src="images/"+src+".jpg";
    currentPicture=images.indexOf(src);
    console.log(images.indexOf(src));
}

function slideRight(){
    if (currentPicture < images.length-1) {
        currentPicture++;
        place = document.getElementById("place");
        place.src = "images/" + images[currentPicture] + ".jpg";
    }
}

function slideLeft(){
    if (currentPicture >0){
        currentPicture--;
        place=document.getElementById("place");
        place.src="images/"+images[currentPicture]+".jpg";
    }
}