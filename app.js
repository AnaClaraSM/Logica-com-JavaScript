alert("Boas-vindas ao jogo do Número Secreto!"); //Exibe mensagem de alerta 

let numeroSecreto = 4; //Variável para armaenar o número secreto
console.log("Número Secreto: "+ numeroSecreto); //Mostra o número secreto no console

let chute = prompt("Digite um número de 1 a 10."); //Recebe valor digitado pelo usuário
console.log(`Chute: ${chute}`);

console.log("Comparação dos valores: " + (chute == numeroSecreto));

// Se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    // Alerta de acerto
    alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto})!`);
} 
// Senão
else {
    // Alerta de erro
    alert(`Você errou. O número secreto era ${numeroSecreto}, mas você respondeu ${chute}. :(`);
}