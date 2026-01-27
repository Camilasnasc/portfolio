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
