// =====================================================
//  ARQUIVO JAVASCRIPT PRINCIPAL
//  Responsável por adicionar interatividade à página
// =====================================================

/* =====================================================
   FUNÇÃO: Efeito de Scroll Suave
   
   O que faz:
   - Quando clicamos em um link do menu (ex: "Sobre")
   - A página rola suavemente até a seção correspondente
   - Em vez de pular instantaneamente
   
   Por que é importante:
   - Melhora a experiência do usuário
   - Torna a navegação mais agradável visualmente
===================================================== */

// Espera a página carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona TODOS os links que começam com # (exemplo: href="#inicio", href="#sobre")
    const links = document.querySelectorAll('a[href^="#"]');

    // Para cada link encontrado, adiciona um comportamento especial
    links.forEach(link => {

        // Quando o link for clicado...
        link.addEventListener('click', function(e) {

            // Impede o comportamento padrão (pular instantaneamente)
            e.preventDefault();

            // Pega o ID da seção (exemplo: se href="#sobre", targetId será "#sobre")
            const targetId = this.getAttribute('href');

            // Encontra a seção na página usando o ID
            const targetSection = document.querySelector(targetId);

            // Se a seção existe...
            if (targetSection) {

                // Calcula a posição da seção considerando a navbar fixa no topo
                const navbarHeight = 64; // Altura da barra de navegação (64 pixels)
                const targetPosition = targetSection.offsetTop - navbarHeight;

                // Rola a página suavemente até a posição calculada
                window.scrollTo({
                    top: targetPosition,      // Posição final
                    behavior: 'smooth'        // 'smooth' = suave, 'auto' = instantâneo
                });
            }
        });
    });
});


// =====================================================
//  FUNÇÃO: Animação de Fade In ao Scroll
//  
//  O que faz:
//  - Detecta quando elementos entram na tela durante o scroll
//  - Adiciona classe 'visible' para ativar animação
//  - Usa Intersection Observer para melhor performance
// =====================================================

// Função para observar elementos e animar quando aparecerem
function observeElements() {
    // Seleciona todos os elementos com a classe 'fade-in-element'
    const fadeElements = document.querySelectorAll('.fade-in-element');

    // Configura o observador de interseção
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento está visível na tela (intersecting)
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para ativar a animação
                entry.target.classList.add('visible');

                // Para de observar este elemento (animação acontece só uma vez)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,  // Ativa quando 10% do elemento está visível
        rootMargin: '0px 0px -50px 0px'  // Ativa um pouco antes de entrar totalmente
    });

    // Observa cada elemento encontrado
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Executa a função quando a página carregar
document.addEventListener('DOMContentLoaded', observeElements);


// =====================================================
//  DICAS PARA ADICIONAR MAIS FUNCIONALIDADES:
// =====================================================
// 
// 1. Botão "Voltar ao Topo":
//    - Criar um botão que aparece ao rolar a página
//    - Ao clicar, volta suavemente para o topo
//
// 2. Animações ao aparecer:
//    - Detectar quando uma seção aparece na tela
//    - Adicionar classes CSS para animação
//
// 3. Menu ativo:
//    - Destacar no menu qual seção está visível
//    - Mudar a cor do link conforme a seção
//
// =====================================================