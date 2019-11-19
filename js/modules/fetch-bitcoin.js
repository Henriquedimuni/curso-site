export default function initFetchBitcoin() {

}

fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(json => {
        const btcPreco = document.querySelector('.btc-preco')
        const bitcoinSell = json.BRL.sell
        //dividindo pelo total para ter o numero em reais,neste caso estamos querendo pegar 1000 reais em bitcoin
        btcPreco.innerText = (1000 / bitcoinSell).toFixed(4)        
    })
    .catch(erro => {
        console.log(Error(erro))
    })