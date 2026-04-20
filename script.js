const images=document.querySelectorAll(".gallery img");
const modal=document.getElementById("modal");
const modalImg=document.getElementById("modalImg");
const closeBtn=document.getElementById("close");
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");
let currentIndex=0;
images.forEach((img, index)=>{
    img.addEventListener("click", ()=>{
        modal.style.display="block";
        modalImg.src=img.src;
        currentIndex=index;
    });
});
closeBtn.onclick=()=>{
    modal.style.display="none";
};
nextBtn.onclick=()=>{
    currentIndex = (currentIndex +1)% images.length;
    modalImg.src= images[currentIndex].src;
};
prevBtn.onclick=()=>{
    currentIndex =(currentIndex-1+images.length)% images.length;
    modalImg.src=images[currentIndex].src;
};
