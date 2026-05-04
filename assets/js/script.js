document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling navigation handling
    const navLinks = document.querySelectorAll('.nav-links a, .btn-nav, .hero-btns a');
    const navLinksContainer = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;

    // Função auxiliar para fechar o menu mobile e resetar o ícone
    const closeMobileMenu = () => {
        if (navLinksContainer && navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            if (menuIcon) menuIcon.classList.replace('fa-times', 'fa-bars');
        }
    };
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Fecha o menu mobile ao clicar em qualquer link (interno ou externo)
            closeMobileMenu();
            
            // Ajuste para o botão "Início" ir exatamente para o topo
            if (href === '#home') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            // Os demais links usarão o scroll suave nativo do CSS
        });
    });

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinksContainer.classList.toggle('active');
            if (navLinksContainer.classList.contains('active')) {
                menuIcon.classList.replace('fa-bars', 'fa-times');
            } else {
                menuIcon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Fechar o menu mobile se clicar fora dele
    document.addEventListener('click', (e) => {
        if (navLinksContainer && navLinksContainer.classList.contains('active')) {
            if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });

    // Scroll Effect on Header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(253, 251, 247, 0.98)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'rgba(253, 251, 247, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }

        // WhatsApp Floating Button Logic (Mobile Only)
        const whatsappBtn = document.querySelector('.whatsapp-float');
        const heroSection = document.getElementById('home');
        if (whatsappBtn && heroSection) {
            if (window.innerWidth <= 768) {
                // Aparece apenas após a section hero
                if (window.scrollY > heroSection.offsetHeight - 150) {
                    whatsappBtn.classList.remove('hidden-mobile');
                } else {
                    whatsappBtn.classList.add('hidden-mobile');
                }
            } else {
                // Sempre visível no desktop
                whatsappBtn.classList.remove('hidden-mobile');
            }
        }
    });
    
    // Configura o estado inicial do botão logo que carregar
    window.dispatchEvent(new Event('scroll'));

    // Image Load Effect for Portfolio
    const portfolioImages = document.querySelectorAll('.portfolio-item img');
    portfolioImages.forEach(img => {
        const handleLoad = () => {
            img.classList.add('loaded');
            setTimeout(() => {
                const skeletonContainer = img.closest('.skeleton');
                if (skeletonContainer) {
                    skeletonContainer.classList.remove('skeleton');
                }
            }, 500);
        };

        if (img.complete) {
            handleLoad();
        } else {
            img.addEventListener('load', handleLoad);
        }
    });

    // Inicializar GLightbox
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: false,
            loop: true,
            zoomable: false,
            draggable: false,
            autoplayVideos: true
        });

        let touchstartX = 0;
        let touchendX = 0;
        
        const handleGesture = () => {
            if (!document.querySelector('.glightbox-container')) return;
            if (touchendX < touchstartX - 50) lightbox.nextSlide();
            if (touchendX > touchstartX + 50) lightbox.prevSlide();
        };

        document.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        }, {passive: true});

        document.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleGesture();
        }, {passive: true});
    }

    // Inicializar AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-in-out-cubic'
        });
    }
});