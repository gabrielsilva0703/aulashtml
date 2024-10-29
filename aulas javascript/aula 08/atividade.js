const calcular = () => {
  let altura = Number(document.querySelector(`#altura`).value);
  let peso = Number(document.querySelector(`#peso`).value);
  let res = document.querySelector("p");

  let imc = peso / (altura * altura);
  res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
};

// const calcular = () => {
//     let altura = Number(document.querySelector(`#altura`).value);
//     let peso = Number(document.querySelector(`#peso`).value);
//     let res = document.querySelector('p');

//     let imc = peso / (altura * altura);
//     res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
// };

// const calcularIMC = () => {
//     let altura = Number(document.querySelector(`#altura`).value);
//     let peso = Number(document.querySelector(`#peso`).value);
//     let res = document.querySelector('#resultado');

//     // Verifica se altura e peso são válidos
//     if (altura <= 0 || peso <= 0) {
//         res.innerHTML = "Por favor, insira valores válidos.";
//         return;
//     }

//     let imc = peso / (altura * altura);
//     res.innerHTML = imc.toFixed(2);
// };
