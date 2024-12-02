// Boas vindas
alert("Boas-vindas ao jogo do Número Secreto!");

let numeroSecreto = parseInt((Math.random() * 100) + 1); //Gera um número aleatório entre 1 e 100
console.log("Número Secreto: " + numeroSecreto);
let chute; //Armazena o número informado pelo usuário - inicia vazio
let tentativas = 1; //Armazena as tentativas de acerto - inicia em 1


// Enquanto o chute for diferente do n.s.
while (chute != numeroSecreto) {
    // Solicita a entrada do usuário
    chute = prompt("Digite um número de 1 a 100.");

    console.log(`Chute: ${chute}`);
    console.log("Comparação dos valores: " + (chute == numeroSecreto));

    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // Interrompe o loop
        break;
    }
    // Senão (Caso o chute não seja igual ao número secreto)
    else {
        // Se o chute for maior que o número secreto
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
            console.log("chute > numeroSecreto");
        }
        else {
            alert(`O número secreto é maior que ${chute}.`);
            console.log("chute < numeroSecreto");
        }

        // Alerta de erro
        // alert(`Você errou. O número secreto era ${numeroSecreto}, mas você respondeu ${chute}. :(`);

        // Soma uma tentativa
        tentativas++;
    }
}
// Ao sair do loop -> Quando o chute for igual ao n.s.
// Alerta de acerto
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);