"use strict";

const gImageList = [];
// var gElCanvas = document.querySelector("canvas");
var gctx 

function onInit() {
    gctx = document.querySelector("canvas").getContext("2d");
    setImageList();
}
function setImageList(){
    const imageContainer = document.querySelector(".image-container");
    for (let i = 1; i <=18 ; i++){
        gImageList.push({ src: `meme-imgs (square)/${i}.jpg`, alt: `photo ${i}` });
    }
    console.log(gImageList);
gImageList.forEach((image , idx) => {
      const imgElement = document.createElement("img");
      imgElement.onclick = () => {
        onImageClick(idx);
      };
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      imgElement.classList.add("meme-image");
    
      imageContainer.appendChild(imgElement);
    })
    
}

function onImageClick(index){
    console.log(index);
    showModal(); 
}


function showModal(){
    const modal = document.querySelector('canvas');
    const blackScreen = document.querySelector('.black-screen');
    const closeBtn = document.querySelector('.close-btn');
    modal.style.display = "block";
    blackScreen.style.display = "block";
    closeBtn.style.display = "block";
    closeBtn.addEventListener('click', closeModal);

}

function closeModal(){
    const modal = document.querySelector('canvas');
    const blackScreen = document.querySelector('.black-screen');
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.style.display = "none";
    modal.style.display = "none";
    blackScreen.style.display = "none";
}