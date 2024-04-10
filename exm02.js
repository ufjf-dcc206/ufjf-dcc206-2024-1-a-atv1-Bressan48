tarefa1();
setImmediate(tarefa2);
tarefa3();

function tarefa1() {
    console.log("Tarefa 1");
}
function tarefa2() {
    console.log("Tarefa 2 : Início");
    for (let i = 0; i < 1e10; o++) {}
    console.log("Tarefa 2 : Fim");
}
function tarefa3() {
    console.log("Tarefa 3");
}
