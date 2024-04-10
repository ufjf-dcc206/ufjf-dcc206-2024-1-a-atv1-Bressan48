import http from 'node:http';

const PORTA = 8080;
const server = http.createServer(trataRequisicao);

server.listen(PORTA);
console.log(`Servidor ouvindo na porta http://127.0.0.1:${PORTA}`);
    
function trataRequisicao(requisicao, resposta) {
    for (let i = 0; i < 10; i++) {
    resposta.white("<h1>Olá, mundo!</h1>")
    }
    resposta.end();
}