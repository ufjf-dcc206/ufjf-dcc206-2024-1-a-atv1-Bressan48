function fazTarefa2() {
    setImediate(() => {
        return "Tarefa 2";
        }
    );
}

console.log("Tarefa 1");
const valor = fazTarefa2();
console.log(valor);
console.log("Tarefa 3");