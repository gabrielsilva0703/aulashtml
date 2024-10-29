// const mudarCor = () => {
//     let elementoDiv = document.querySelector('#div1');
//     elementoDiv.style.backgroundColor = 'red';
// };


const mudarCor = () => {
    let elementoDiv = document.querySelector('#div1');
    elementoDiv.style.backgroundColor = 'red';
};

// Adicionando o evento de mouse
let elementoDiv = document.querySelector('#div1');
elementoDiv.addEventListener('mouseenter', mudarCor);
