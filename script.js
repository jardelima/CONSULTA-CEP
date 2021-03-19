const btnConsulta = document.querySelector(".btn");
const container = document.querySelector(".container");
const responseContainer = document.querySelector(".endereco");
const inputCep = document.querySelector(".inputCep");

btnConsulta.addEventListener("click", consultaCep);

async function consultaCep() {
    const cep = inputCep.value.replace("-", "");
    const cepAPI = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const responseCEP = await cepAPI.json();
    const div = document.createElement("div");
    responseContainer.appendChild(div);

    div.innerHTML =
        `<p class="dados">CEP: ${responseCEP.cep}</p>
         <p class="dados">LOGRADOURO: ${responseCEP.logradouro}</p>
         <p class="dados">BAIRRO: ${responseCEP.bairro}</p>
         <p class="dados">LOCALIDADE: ${responseCEP.localidade}</p>
         <p class="dados">UF: ${responseCEP.uf}</p>
        `;

    // UTILIZANDO O FETCH + THEN
    // const cepAPI = fetch(`https://viacep.com.br/ws/${cep}/json/`);
    // cepAPI.then(response => response.json())
    //     .then(endereco => {
    //         numeroCep.innerText = `CEP: ${endereco.cep}`;
    //         logradouro.innerText = `LOGRADOURO: ${endereco.logradouro}`;
    //         bairro.innerText = `BAIRRO: ${endereco.bairro}`;
    //         localidade.innerText = `LOCALIDADE: ${endereco.localidade}`;
    //         uf.innerText = `UF: ${endereco.uf}`;
    //     })
}