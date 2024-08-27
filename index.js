const nav = document.querySelector('nav');
const div = document.querySelector('.main');


window.addEventListener('scroll', () => {
    if(window.scrollY < 100){
        nav.style.position='static';
        nav.style.backgroundColor = "black";
        nav.style.transition = "1s";
    }
    // if(window.scrollY > 200){
    //     nav.style.position='fixed';
    //     nav.style.backgroundColor = "CornflowerBlue";
    //     nav.style.transition = "1s";
    // }
    if(window.scrollY > 200){
        nav.style.backgroundColor='OrangeRed';
        nav.style.transition = "1s";
        nav.style.position='fixed';

    }
    if(window.scrollY > 300){
        div.style.backgroundColor='red';
        nav.style.position='fixed';
        div.style.transition = "0.5s";
    }
    if(window.scrollY > 400){
        div.style.backgroundColor='green';
        nav.style.position='fixed';
        div.style.transition = "0.5s";
    }   
    if(window.scrollY > 500){
        div.style.backgroundColor='blue';   
        nav.style.position='fixed';
        div.style.transition = "0.5s";
    }
    if(window.scrollY > 600){
        div.style.backgroundColor='yellow';
        nav.style.position='fixed';
        div.style.transition = "0.5s";
    }
    if(window.scrollY > 700){
        div.style.backgroundColor='black';
        nav.style.position='fixed';
        div.style.transition = "0.5s";
    }

});