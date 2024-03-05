alert("Boas vindas ao jogo!");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while(chute != numeroSecreto){

    chute = prompt("Escolha um número entre 1 e 10");

    // se o chute for igual ao número secerto
    if(chute == numeroSecreto){
        alert(`Você acertou! O número secreto é ${numeroSecreto} e você descobriu com ${tentativas}.`);
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}.`);
        } else{
            alert(`O número secreto é maior que ${chute}.`);
        }
        tentativas++;
    }
}
