let btnPlus = document.querySelector('.plus')
let btnMin = document.querySelector('.minus')
let timer = document.querySelector('span')

function counter(timM) {
    
    switch (timM) {
        case "PLUS":
            if(timer.innerHTML >= 15) return 
                timer.innerHTML++
            break
        case "MINUS":
            if(timer.innerHTML === 0) return 
            timer.innerHTML--
            break
        default:
            console.log('error');
            break;
    }
}

btnPlus.onclick = () => {
    counter('PLUS')
}

btnMin.onclick = () => {
    counter('MINUS')
}
