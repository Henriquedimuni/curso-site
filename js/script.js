import navegacaoLista from './modules/navegacaoPorTab.js';
import accordionList from "./modules/accordionList.js";
import ScrollSuave from "./modules/scrollSuave.js";
import initAnimacaoScroll from "./modules/scrollAnime.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollsuave = new ScrollSuave('[data-menu="menu"] [href^="#"]');
scrollsuave.init();

initAnimacaoScroll();
accordionList();
navegacaoLista();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

