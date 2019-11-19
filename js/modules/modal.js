export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function clickToggle(event){
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }

    function clickForaFechar(event){
        if(event.target === this){
            clickToggle(event)
        }
    }

    botaoAbrir.addEventListener('click', clickToggle);
    botaoFechar.addEventListener('click', clickToggle);
    containerModal.addEventListener('click', clickForaFechar);
}