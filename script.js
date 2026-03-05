//Evento para preencher os inputs
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector("body");
    const card = document.getElementById("card");
    const btnDesc = document.querySelector(".btnDesc");
    const descricao = document.querySelector(".descricao-texto");
    const modoNoturno = document.getElementById("modoNoturno");
    const btnNome = document.querySelector(".btnNome");
    const novoNome = document.querySelector(".attNome");
    const nome = document.getElementById("span-nome");
    btnNome.addEventListener("click", () =>{
        const inputNome = novoNome.value;
        if(inputNome !="" && isNaN(inputNome)){
            nome.textContent = inputNome;
            novoNome.value ="";
        }
        else{
            alert("Nome inválido!")
        }
                
    })
    const attDesc = document.querySelector(".attDesc");
    btnDesc.addEventListener("click", () =>{
        const inputDesc = attDesc.value;
        const descricao = document.querySelector(".descricao-texto");
        if(inputDesc !="" && isNaN(inputDesc)){
            descricao.textContent = inputDesc;
            attDesc.value = "";

        }
        else{
            alert("Descrição inválida!")
        }
    })
    modoNoturno.addEventListener("click", () =>{
        modoNoturno.classList.toggle("modoNoturno-noturno");
        card.classList.toggle("card-noturno");
        body.classList.toggle("body-noturno");
        btnNome.classList.toggle("btn-noturno");
        btnDesc.classList.toggle("btn-noturno");
        descricao.classList.toggle("descricao-noturno");
        nome.classList.toggle("span-noturno");
})
})