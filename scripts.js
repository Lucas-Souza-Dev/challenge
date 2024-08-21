const textArea = document.querySelector(".__text-area");
const message = document.querySelector(".__message");
const dropImageEvent = document.querySelector(".__buttons")

function btnEncrypt(){
    const textEncrypt = encrypt(textArea.value);
    message.value = textEncrypt;
    textArea.value = "";
}


function encrypt(stringEncrypt) {
    let matrizCode = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
        if(stringEncrypt.includes(matrizCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCode[i][0], matrizCode[i][1]);
        }
    }

    return stringEncrypt;
}

function btnDescrypt(){
    const textDescrypt = descrypt(textArea.value);
    message.value = textDescrypt;
    textArea.value = "";
}


function descrypt(stringDescrypt) {
    let matrizCode = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDescrypt = stringDescrypt.toLowerCase();

    for(let i = 0; i < matrizCode.length; i++){
        if(stringDescrypt.includes(matrizCode[i][0])){
            stringDescrypt = stringDescrypt.replaceAll(matrizCode[i][1], matrizCode[i][0]);
        }
    }

    return stringDescrypt;
}

dropImageEvent.addEventListener('click', function() {
    message.style.backgroundImage = "none"; // Remove a imagem de fundo ao clicar
})

//função de copiar - Botão copiar
document.querySelector(".__button-copy").addEventListener('click', ( )=> {
    var text = document.querySelector(".__message").value;

    navigator.clipboard.writeText(text).then(()=>{
        alert("Texto Copiado!");
    }).catch((err)=>{
        console.error("Erro ao Copiar: ", err);
    })
})

textArea.addEventListener("input", function() {
    var input = this.value;

    // Remove letras com acentos usando uma regex
    var inputSemAcento = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Atualiza o valor do campo de entrada
    this.value = inputSemAcento;
});