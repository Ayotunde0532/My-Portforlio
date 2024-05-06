const btn = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-container > nav");


function navigation (){
    // alert("clicked")
    // nav.style.display='block';
    if(nav.style.display == 'block'){
        nav.style.display = 'none';
        btn.src = 'src="./images/images/icon-hamburger.svg';
    }else{
        nav.style.display = 'block';
        btn.src = './images/images/icon-close.svg' ;
    }

}
btn.addEventListener('click',navigation)
