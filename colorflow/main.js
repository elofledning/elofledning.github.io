let load = () => {
    for(let i=0;i<1000;i++){
        let div = document.createElement("div");
            div.id = 'div'+1;
            div.classList.add('blockdiv');
            div.classList.add('animate__animated');
            div.classList.add('animate__backOutRight');
            div.style.top = random(80)+10+'%';
            div.style.animationDelay = '0.'+random(10)+'s';
            div.style.animationDuration = random(10)+'s';
            div.style.backgroundColor = '#'+randomColor();

        document.body.appendChild(div);
    
    }
}

let random = (number) => {
    return Math.floor(Math.random() * number);
}

let randomColor = () => Math.floor(Math.random()*16777215).toString(16);