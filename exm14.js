fetch("http://localhost:8880")
    .then((resp) => resp.json())
    .then((json) => console.dir(json));