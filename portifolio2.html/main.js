function mudarCor() {
    // Cores possíveis
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33", "#33FFF3"];
    // Escolhe uma cor aleatória do array
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    // Altera o fundo da página para a cor aleatória
    document.body.style.backgroundColor = corAleatoria;
}