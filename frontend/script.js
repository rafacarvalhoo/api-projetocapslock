let ordens = [];

function cadastrar() {
    let cliente = document.getElementById("cliente").value;
    let descricao = document.getElementById("descricao").value;
    let tecnico = document.getElementById("tecnico").value;

    if (cliente == "" || descricao == "" || tecnico == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let ordem = {
        cliente: cliente,
        descricao: descricao,
        tecnico: tecnico
    };

    ordens.push(ordem);

    document.getElementById("resultado").innerHTML +=
        "Cliente: " + cliente +
        "<br>Serviço: " + descricao +
        "<br>Técnico: " + tecnico +
        "<br><br>";

    document.getElementById("cliente").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("tecnico").value = "";
}