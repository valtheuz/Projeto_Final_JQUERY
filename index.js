let proximoId = 1;

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  let v1 = parseFloat(document.getElementById("v1").value);
  let v2 = parseFloat(document.getElementById("v2").value);
  let v3 = parseFloat(document.getElementById("v3").value);

  if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
    mostrarAlerta2("Por favor, preencha todos os campos com números válidos.");
    return;
  }

  let numeros = [v1, v2, v3].sort((a, b) => a - b);
  let alerta1 = document.getElementById("alerta1");
  alerta1.textContent = `Números em ordem crescente: ${numeros.join(", ")}`;
  alerta1.classList.remove("d-none");

  let media = (v1 + v2 + v3) / 3;
  mostrarAlerta2(`A média dos valores é: ${media.toFixed(2)}`);

  let soma = 0;
  for (let i = 1; i <= v2; i++) {
    soma += i;
  }

  let alerta3 = document.getElementById("alerta3");
  alerta3.textContent = `Soma acumulada de 1 até ${v2}: ${soma}`;
  alerta3.classList.remove("d-none");
});

function mostrarAlerta2(mensagem) {
  let alerta2 = document.getElementById("alerta2");
  alerta2.textContent = mensagem;
  alerta2.classList.remove("d-none");
}
