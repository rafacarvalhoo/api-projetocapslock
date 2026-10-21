function cadastrar() {
    let cliente = document.getElementById("cliente").value;
    let descricao = document.getElementById("descricao").value;
    let tecnico = document.getElementById("tecnico").value;

    document.getElementById("resultado").innerHTML =
        "Cliente: " + cliente +
        "<br>Serviço: " + descricao +
        "<br>Técnico: " + tecnico;
}