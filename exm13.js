import http from 'node:http';

const PORTA = 8080;
const server = http.createServer(trataRequisicao);

server.listen(PORTA);
console.log(`Servidor ouvindo na porta http://127.0.0.1:${PORTA}`);
    
function trataRequisicao(requisicao, resposta) {
    resposta.writeHead(200, {"Content-Type", "application/json","charset=utf-8"});
    const obj = {name: "Informação", min: 1, max: 10};
    resposta.write("<h1>Olá, mundo!</h1>");
    resposta.end();
}