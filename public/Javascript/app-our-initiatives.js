let sideNav = document.querySelector('.sidenav');
let menuBtn = document.querySelector('.menu-btn');
let banner = document.querySelector('#banner');


let counter = 1;
let count = 1;

menuBtn.onclick = () =>{

    if(sideNav.style.width == '20rem')
        {
            sideNav.style.width = '0';
            menuBtn.src = 'imgs/menu.png';
            menuBtn.style.backgroundColor = " rgba(255, 20, 147 ,0.2) " ;

        }
    else{
            sideNav.style.width = '20rem';
            menuBtn.src = 'imgs/close.png';
            menuBtn.style.backgroundColor = " transparent" ;
        }
    
}

if(sideNav.style.width == '20rem')
    {
        banner.addEventListener('click' , () =>{
            sideNav.style.width = '0';
            menuBtn.src = 'imgs/menu.png';
        })
    }


