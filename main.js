let arrayImage = [
  {
    img: "/PsdToHtml/img/slide-1.png",
  },
  {
    img: "/PsdToHtml/img/slide-2.png",
  },
  {
    img: "/PsdToHtml/img/slide-3.png",
  },
];

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let imgHero = document.querySelector('#hero-img');

let currentImg =0;

window.addEventListener("DOMContentLoaded", (event) => {
   showImage();

})
 prev.addEventListener('click',()=>{
     currentImg--;
     if(currentImg = 0){
         currentImg =2;
     }
     showImage(currentImg)
 });
 next.addEventListener('click',()=>{
    currentImg++;
    if(currentImg >=2){
        currentImg=0;
    }
    showImage(currentImg)
});

function showImage(){
    const item  = arrayImage[currentImg];
     imgHero.src= item.img;
}
setInterval(()=>{
    currentImg ++;
    if(currentImg ===3){
        currentImg=0;
    }
    showImage(currentImg);
},5000)