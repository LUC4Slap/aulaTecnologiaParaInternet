var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log(imc);



var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var imc = peso / (altura * altura);

  tdImc.textContent = imc;
}
var a = function nome() {

	var tabela = document.querySelector("#tabela-pacientes")
	var novaLinha = tabela.insertRow()
	var novoNome = novaLinha.insertCell()
	var novoPeso = novaLinha.insertCell()
	var novaAltura = novaLinha.insertCell()
	var novaGordura = novaLinha.insertCell()
	var novoImc = novaLinha.insertCell()
	
} 
