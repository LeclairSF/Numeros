
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
  alert("Por favor, digite números válidos.");
} else {

  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero1 / numero2;
  const restoDivisao = numero1 % numero2;
  const isPar = soma % 2 === 0;

  alert(`Soma: ${soma}`);
  alert(`Subtração: ${subtracao}`);
  alert(`Multiplicação: ${multiplicacao}`);
  alert(`Divisão: ${divisao}`);
  alert(`Resto da divisão: ${restoDivisao}`);
  alert(`A soma é ${isPar ? 'par' : 'ímpar'}`);
  
  if (numero1 === numero2) {
    alert("Os números são iguais.");
  } else {
    alert("Os números são diferentes.");
  }
}