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


document.querySelector('#banner').style.backgroundImage = " linear-gradient(  rgba(0,0,0,0) ,rgba(119 ,219 ,219 , 0.5)  ) ,linear-gradient(rgba(255, 20, 147 ,0.5) ,  rgba(0,0,0,0)) , url('imgs/slider"+ count +".jpeg')";

document.querySelector('#banner').style.transition = "background-image 2s ease-in-out ";


setInterval( () =>{
    document.querySelector('#banner').style.backgroundImage = " linear-gradient(  rgba(0,0,0,0) ,rgba(119 ,219 ,219 , 0.5)  ) ,linear-gradient(rgba(255, 20, 147 ,0.5) ,  rgba(0,0,0,0)) , url('imgs/slider"+ count +".jpeg')";   
    count++;
    if(count == 4)
    {
        count = 1;
    }
}, 3000)

