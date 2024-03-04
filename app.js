alert("Boas vindas ao jogo!");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("Escolha um numero entre 1 e 10");

// se o chute for igual ao número secerto
if(chute == numeroSecreto){
    alert(`Você acertou! O número secreto é ${numeroSecreto}`);
} else {
    alert("Você errou!");
}
