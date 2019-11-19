//navegação por tab

export default function navegacaoLista(){
    const tabmenu = document.querySelectorAll('[data-tabmenu] li');
    const tabcontent = document.querySelectorAll('[data-tabcontent] section');
    tabcontent[0].classList.add('ativo')
    function activeTab(index){
        tabcontent.forEach(section => {
            section.classList.remove('ativo','show-down','show-right')
        })
        const direcao = tabcontent[index].dataset.anime
        tabcontent[index].classList.add('ativo', direcao)
    }
    tabmenu.forEach((item,index) => {
        item.addEventListener('click', ()=> {
            activeTab(index)
        })
    })    
}

