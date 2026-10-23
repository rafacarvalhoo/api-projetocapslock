
async function cadastrar() {
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

    try {
        let resposta = await fetch("http://localhost:3000/ordens", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ordem)
        });

        let mensagem = await resposta.text();

        if (resposta.ok) {
        await consultarOrdens();

            document.getElementById("cliente").value = "";
            document.getElementById("descricao").value = "";
            document.getElementById("tecnico").value = "";

            alert(mensagem);
        } 
        
    } catch (erro) {
        alert("Não foi possível conectar ao servidor!");
    }
}


async function consultarOrdens() {
    let resposta = await fetch("http://localhost:3000/ordens");

    let ordens = await resposta.json();

    document.getElementById("resultado").innerHTML = "";

    for (let ordem of ordens) {
        document.getElementById("resultado").innerHTML +=
            "Cliente: " + ordem.cliente +
            "<br>Serviço: " + ordem.descricao +
            "<br>Técnico: " + ordem.tecnico +
            "<br><br>";
    }
}