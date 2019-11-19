export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-section]');
    function animaScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;

            if (isSectionVisible) {
                section.classList.add('ativo');
            }            
        })
    }
    const windowMetade = window.innerHeight * 0.6;
    animaScroll();
    window.addEventListener('scroll', animaScroll)
}