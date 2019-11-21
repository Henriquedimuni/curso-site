import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {

  /* cria div contendo informações do total de animais */
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //animas os numeros de cada animal
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  /* puxa animais através do arquivo json
    e cria cada animal utilizando createAnimal
  */
  async function criarAnimais() {
    try {
      //fetch e espera resposta e transforma resposta em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      //apos a transformação de json ativa as funções para preencher
      // e animar os numeros
      animaisJSON.forEach(animal => preencherAnimais(animal)); animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
