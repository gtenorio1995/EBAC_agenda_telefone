// SCOPO GLOBAL
let linhas = "";
const arrayNome = [];
const arrayTelefone = [];

// CAPTURAR FORMULARIO E RESETAR O EVENTO SUBMIT
const form = document.getElementById("form-cadastro");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // CAPTURAR CAMPOS DE INSERÇÃO
  const inputNome = document.getElementById("nome-contato");
  const inputTelefone = document.getElementById("telefone-contato");

  // VERFICAÇÃO DE DADOS EXISTENTES
  if (arrayTelefone.includes(inputTelefone.value)){
    alert(`O telefone: ${inputTelefone.value} informado, já existe no nosso banco de dados. Por favor digite um novo número`);
  }else{
    // INSERIR DADOS COM METODO PUSH
    arrayNome.push(inputNome.value);
    arrayTelefone.push(inputTelefone.value);
  
    // ADICIONAR LINHAS A TABELA
    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";
  
    linhas += linha;
  }

  // CAPTURAR O CORPO DA TABELA E INSERIR LINHA
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
});
