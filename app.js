alert("Boas vindas ao jogo!");
let numeroMaximo = prompt("Insira o valor máximo que o número secreto pode chegar.");
console.log(numeroMaximo);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if(chute == numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}.`);
        } else{
            alert(`O número secreto é maior que ${chute}.`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou! O número secreto é ${numeroSecreto} e você descobriu com ${tentativas} ${palavraTentativa}.`);
// if(tentativas > 1){
//     alert(`Você acertou! O número secreto é ${numeroSecreto} e você descobriu com ${tentativas} tentativas.`);
// } else{
//     alert(`Você acertou! O número secreto é ${numeroSecreto} e você descobriu com ${tentativas} tentativa.`);
// }
