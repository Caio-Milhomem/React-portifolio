
export function initializeActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveSection() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 300; // Ajuste o offset conforme necessário
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                // Remove a classe "active" de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                // Obtenha o link de navegação correspondente e adicione a classe "active"
                const correspondingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Adicione o ouvinte de evento de rolagem para atualizar a seção ativa na rolagem
    window.addEventListener('scroll', updateActiveSection);

    // Chame a função uma vez para definir a seção ativa inicial
    updateActiveSection();

    // Retorne uma função para remover o ouvinte de evento na limpeza
    return () => {
        window.removeEventListener('scroll', updateActiveSection);
    };
}