let load = () => {
    let div = document.createElement("div");
    div.id = 'div'+1;
    div.classList.add('blockdiv');
    div.classList.add('animate__animated');
    div.classList.add('animate__backOutUp');
    div.style.left = '30%';
    div.style.animationDelay = '0.1s';

    
    document.body.appendChild(div);
}