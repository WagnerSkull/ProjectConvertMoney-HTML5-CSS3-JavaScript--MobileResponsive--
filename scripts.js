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

    //Formatando o valor do Real, colocando em baixo da bandeira a forma correta. com pontos e virgúlas.
    realValueText.innerHTML = new Intl.NumberFormat(`pt-BR`, {
        style: `currency`,
        currency: `BRL`,
    }).format(inputReais);



    //Formatando o valor do dólar pra fica correto os números.
    currencyValueText.innerHTML = new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency: `USD`,
    }).format(inputReais / dolar);

};
//Ouvidor de evento, quando o botão e acionado, ele chama a função. 
button.addEventListener(`click`, convertValues)