const body = document.querySelector("body");

const IMG_NUMBER = 10;

/*
function handleImgLoad(){
    console.log("finshed loading");
}
*/


function paintImage(imgNumber) {
  //body.prepend("");
  
  const image = new Image();
  image.src = `Images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");//class명 지정
  //image.addEventListener("loadend",handleImgLoad);//API로 받을때 로딩걸림
  //body.prepend(image);
  body.appendChild(image)//이미지가 다른 위젯를 덮어서 안보임 prepend로 바꿈
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
  
}


init();
setInterval(init,5000);
