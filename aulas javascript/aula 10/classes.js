class materialescolar {
constructor(caderno,caneta,lapis,borracha,apontador) {
this.caderno = caderno
this.caneta = caneta
this.lapis = lapis
this.borracha = borracha
this.apontador = apontador
}}


let materialescolar1 = new materialescolar(
    "caderno surfista", "caneta bic preta", "lapis fabercastel", "borracha normal", "apontador normal tbm"
)


console.log(materialescolar1);


// class Pessoa {
//     // O construtor é chamado quando uma nova instância é criada
//     constructor(nome, idade) {
//       this.nome = nome;
//       this.idade = idade;
//     }
  
//     // Método que retorna uma saudação
//     cumprimentar() {
//       console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
//     }
  
//     // Método que faz a pessoa envelhecer
//     envelhecer() {
//       this.idade += 1;
//       console.log(`${this.nome} agora tem ${this.idade} anos.`);
//     }
//   }
  
//   // Criando uma instância da classe
//   const pessoa1 = new Pessoa('João', 30);
  
//   // Chamando métodos da instância
//   pessoa1.cumprimentar(); // Olá, meu nome é João e eu tenho 30 anos.
//   pessoa1.envelhecer();   // João agora tem 31 anos.
  