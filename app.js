const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.info h1');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const sizes = document.querySelector('.sizes');
const description = document.querySelector('.info h3');


container.addEventListener('mousemove',(e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/25;
    let yAxis = (window.innerHeight/2 - e.pageY)/25;
    
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    description.style.transform += "translateZ(250px)";

});

//animate in
container.addEventListener('mouseenter',(e)=>{
    card.style.transition = "none";
    //popout
    // sneaker.style.transform = `translateZ(75px) perspective(200px)`;
    title.style.transform = "translateZ(250px) perspective(200px)";
    // sneaker.style.transform = "translateX(150px)";
    
})
//animate out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0)";
})