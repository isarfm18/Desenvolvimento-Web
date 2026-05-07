document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); 

    var matricula = document.getElementById('matricula').value;
    var senha = document.getElementById('senha').value;
    var cargo = document.getElementById('cargo').value;

    
    if (matricula === "" || senha === "" || cargo === "") {
        alert("Por favor, preencha todas as informações!"); 
    } 
    
    else if (isNaN(matricula)) {
        alert("Erro: O campo Matrícula aceita apenas números.");
    } 
   
    else {
        alert("BEM-VINDO AO SISTEMA!\n\nCargo: " + cargo + "\nID Matrícula: " + matricula + "\n\nAcesso liberado com sucesso!");
    }
};