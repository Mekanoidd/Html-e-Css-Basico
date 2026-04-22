function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = "Olá! Isso foi exibido com JavaScript básico.";
}

function mudarCorTitulo() {
    const titulo = document.getElementById("titulo");

    if (titulo.style.color === "crimson") {
        titulo.style.color = "#0f172a";
    } else {
        titulo.style.color = "crimson";
    }
}

function adicionarItem() {
    const lista = document.getElementById("lista-nao-ordenada");
    const novoItem = document.createElement("li");
    novoItem.innerText = "Novo item adicionado com JavaScript.";
    lista.appendChild(novoItem);
}

function mostrarOuEsconderImagem() {
    const imagem = document.getElementById("imagem");

    if (imagem.style.display === "none") {
        imagem.style.display = "block";
    } else {
        imagem.style.display = "none";
    }
}