btnStart.addEventListener("click", () => {
var numeroSecreto = parseInt(Math.random() * 500) +1;
var i = 0;
var fim = 6;
var chance = 0;
var tentativas = 0;
var numeroinvalido = 0;

alert ("Bem vindo ao jogo Mentalista !!!\nCujo objetivo é acertar um número entre 1 e 500\nVamos Começar!?" )

while(chute != numeroSecreto) 
{
  var chute = prompt("Digite um número entre 1 e 500")
    i = i + 1;
    tentativas = fim - i;
    chance = i - fim ;
    
    if(chute == null) {
    break;
    }

    if (chute == numeroSecreto) {
        alert("Parabens voce acertou o numero secreto! " + numeroSecreto + " na sua "+i+"° \nSobrando "+fim +"°");
    } 
    else if (chute > numeroSecreto) {
        alert("Voce errou Errou. o número secreto é menor que "+ chute + " \nTentativa:"+i+"° \nVoce tem "+tentativas+"° tentativa ");
    } 
    else if (chute < numeroSecreto) {
        alert("Voce errou Errou. o número secreto é maior que "+ chute + " \nTentativa: "+i+"° \nVoce tem "+ tentativas +"°tentativa");
    }
    if(chance == 0) {
        alert("Voce ja usou todas as suas 7 tentativos. O numero secreto era "+ numeroSecreto + "\nFim de jogo \nO numero secreto era: "+numeroSecreto)
        break;
    }
}
}
);
