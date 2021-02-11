
/* Adding java script for the burger menu */


const burgBox = document.querySelector('.burger-box');

let menuClk = false;

document.getElementById('nav-menu').style.display = 'none';
document.querySelector('#nav-menu ul').addEventListener('click',() => {setScreenOff()});

burgBox.addEventListener('click',(e) => {
    e.preventDefault();
    if(!menuClk){
        console.log(`burger activated ${menuClk}`)
        burgBox.classList.add('open');
        document.getElementById('nav-menu').style.display='block';
         document.body.style.overflowY="hidden";
        menuClk = true;
        
    }else {
       
         burgBox.classList.remove('open');
         document.getElementById('nav-menu').style.display='none';
        document.body.style.overflowY="visible";
         
         
        menuClk = false;
    }
    
});

/* ---------Javascript for burger menu ended ----------*/

function setScreenOff(){
    burgBox.classList.remove('open');
    document.getElementById('nav-menu').style.display = 'none';
    document.body.style.overflowY = "visible";
    menuClk = false;
}