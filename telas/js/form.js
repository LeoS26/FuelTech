// Obtém o botão do formulário
var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event) {

    event.preventDefault();

    // Captura o formulário
    var form = document.querySelector("#frmContato");

    // Verifica se o usuário preencheu e-mail ou telefone
    if (form.email.value == "" && form.telefone.value == "") {

        alert("Por favor, preencha um e-mail e/ou telefone para que possa retornar o seu contato.");

    } else {

        // Monta o texto de retorno
        var msgRetorno = form.nomesobrenome.value + ", agradecemos o seu contato!<br><br>Vamos avaliar suas considerações e retornaremos em breve.";

        // Abre a div de retorno
        document.getElementById("formRetorno").style.display = "block";

        // Mostra o texto de retorno
        document.getElementById("textoRetorno").innerHTML = msgRetorno;

        // Fecha o formulário
        document.getElementById("formulario").style.display = "none";

        return;
    }

});