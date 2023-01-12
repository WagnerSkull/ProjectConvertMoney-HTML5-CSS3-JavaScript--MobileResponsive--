const button = document.getElementById(`convert-button`)

//Definição do valor do dólar
const dolar = 5.2

const convertValues = () => {
    //puxando o valor digitado no input valor
const inputReais = document.getElementById(`input-real`).value

//Colocando o valor digitado no input no valor embaixo da bandeira
const realValueText = document.getElementById(`real-value-text`)

//Colocando o valor no dólar resultado.
const currencyValueText = document.getElementById(`currency-value-text`)

//Só ta jogando o valor do input no valor embaixo da bandeira.
realValueText.innerHTML = inputReais

//Jogando o valor no dólar
currencyValueText.innerHTML = inputReais / dolar

}
//Ouvidor de evento, quando o botão e acionado, ele chama a função. 
button.addEventListener(`click` , convertValues)