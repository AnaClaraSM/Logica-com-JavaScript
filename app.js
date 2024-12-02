alert("Boas-vindas ao jogo do Número Secreto!"); //Exibe mensagem de alerta 
// Pode usar "", '' ou  ``, mas é boa prática manter a consistência no uso.
// ";" é opcional

let numeroSecreto = 5; //Declaração e inicialização ("valoração") de variável

let chute = prompt("Digite um número de 1 a 10."); //Entrada de dados pelo usuário e armazenamento em variável

// Laço condicional Se
if (chute == numeroSecreto) /*Comparação*/ {
    // Comandos caso condição verdadeira
    // console.log("Isso aí! Você descobriu o número secreto (5)!"); //Imprime dado no console
    alert("Isso aí! Você descobriu o número secreto (5)!");
} 
// Senão
else {
    // Comandos caso condição falsa
    alert("Você errou.")
}