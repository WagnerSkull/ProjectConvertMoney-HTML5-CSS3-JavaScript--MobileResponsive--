const button = document.getElementById(`convert-button`)

//Mapeando o Select para fazer as alterações de Dólar para EURO.
const select = document.getElementById(`currency-select`)


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
    }).format(inputReais)



    //Formatando o valor do dólar pra fica correto os números.
    currencyValueText.innerHTML = new Intl.NumberFormat(`en-US`, {
        style: `currency`,
        currency: `USD`,
    }).format(inputReais / dolar);
};

//Função Change Currency, função responsavel por troca Dólar pra EURO.
changeCurrency = () => {
    const currencyName = document.getElementById(`currency-name`)
//Const da troca da bandeira EUA - EURO
const currencyImg = document.getElementById(`currency-img`)

//O if esta trocando o nome embaixo da bandeira depois que e selecionado no SELECT.
if(select.value === `US$ Dólar Americano`){
    currencyName.innerHTML = `Dólar Americano`
    //Trocando a img da Bandeira Euro pela Americana
    currencyImg.src = "./img/EstadosUnidos.png"
} 

//O if esta trocando o nome embaixo da bandeira depois que e selecionado no SELECT.
    if(select.value === `€ Euro`){
        currencyName.innerHTML = `€ Euro`
        //Trocando a img da Bandeira americana pela do EURO
        currencyImg.src = "./img/Euro.png"
    } 
}


//Ouvidor de evento, quando o botão e acionado, ele chama a função. 
button.addEventListener(`click`, convertValues)

//Ouvidor de evento do Select, nesse esta pegando o valor de change,Toda vez que alterar o valor ela chama a função.
select.addEventListener(`change`, changeCurrency)