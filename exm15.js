async function leDados(){
    const resp = await fetch("http://localhost:8880")
    const json = await resp.json();
    console.dir(json);
}

leDados();