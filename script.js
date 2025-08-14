  function adicionarTarefa () {
    //let mensagem = "Tarefa adicionada com sucesso";
    

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim();
    //document.getElementById("mensagem").textContent = tarefa;

     // valida se está vazio
    if (tarefa === "") {
        mensagem.textContent = "⚠️ Escreva a sua tarefa!"
        mensagem.style.color = "red";
        return;
    }

    // cria nova tarefa
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")

    novaTarefa.textContent = tarefa
    
    listaTarefas.appendChild(novaTarefa)
    // mensagem de sucesso
    mensagem.textContent = "✅ Tarefa adicionada com sucesso!";
    mensagem.style.color = "green";

    // limpa o input
    inputTarefa.value = "";
    inputTarefa.focus();

}
