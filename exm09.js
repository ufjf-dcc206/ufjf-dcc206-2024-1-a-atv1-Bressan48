function fazTarefa2(){
        return new Promise(
        function (resolve, reject) {
            setTimeout(
                function () {
                    resolve("Tarefa 2");
                },
                3000
            )
        }
    );
}

console.log("Tarefa 1");
const tarefa2 = fazTarefa2();
tarefa2.then(
    function (valor){
        console.log(valor);
    }
);
console.log("Tarefa 3")