//Accordion list

export default function accordionList() {
    const listaDt = document.querySelectorAll('[data-accordion] dt');
    if (listaDt) {
        listaDt[0].classList.add('ativo');
        listaDt[0].nextElementSibling.classList.add('ativo');

        listaDt.forEach(titulo => {
            titulo.addEventListener('click', activeAccordion)
        })
    }
}
function activeAccordion() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

