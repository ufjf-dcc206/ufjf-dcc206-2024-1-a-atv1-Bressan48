function fazTarefa1(){
    return new Promise(
    function (resolve, reject) {
        setTimeout(
            function () {
                resolve("Tarefa 1");
            },
            2000
        )
    }
);
}

function fazTarefa2(){
    return new Promise(
    function (resolve, reject) {
        setTimeout(
            function () {
                resolve("Tarefa 2");
            },
            1000
        )
    }
);
}

function fazTarefa3(){
    return new Promise(
    function (resolve, reject) {
        setTimeout(
            function () {
                resolve("Tarefa 3");
            },
            500
        )
    }
);
}

async function fazTudo(){
    const r1 = await fazTarefa1();
    const r2 = await fazTarefa2();
    const r3 = await fazTarefa3();
    console.log(r1,r2,r3);
}

console.log("INICIO");
fazTudo(0);
console.log("FIM");    