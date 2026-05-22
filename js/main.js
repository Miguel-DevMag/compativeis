'use strict';

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ── Chatbot AI ── */
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendButton');

  // Knowledge base about the website
  const knowledgeBase = [
    {
      keywords: ['olá', 'oi', 'ola', 'bom dia', 'boa tarde', 'boa noite'],
      response: 'Olá! Como posso ajudar você hoje? Estou aqui para responder suas dúvidas sobre o Compatíveis.'
    },
    {
      keywords: ['o que é', 'o que e', 'como funciona', 'do que se trata', 'sobre'],
      response: 'O Compatíveis é uma metodologia exclusiva de terapia de casal que já transformou mais de 145 relacionamentos. Usamos ciência comportamental para diagnosticar e resolver os padrões que estão sabotando sua relação.'
    },
    {
      keywords: ['márcio', 'marcio', 'terapeuta', 'quem é', 'quem e'],
      response: 'Márcio é especialista em relacionamentos e formado em Análise Corporal. Ele tem mais de 3.960 horas de atendimento e já ajudou mais de 3.000 casais.'
    },
    {
      keywords: ['método', 'metodo', 'metodologia', '3 rs', '3r', 'reconhecer', 'resolver', 'reconectar'],
      response: 'A metodologia dos 3 Rs consiste em: 1) Reconhecer os problemas reais da relação, 2) Resolver os conflitos de maneira saudável com comunicação não-violenta, e 3) Reconectar emocionalmente, recuperando a admiração, carinho e intimidade que foram perdidos.'
    },
    {
      keywords: ['programa', 'o que inclui', 'entregáveis', 'conteúdo', 'acesso'],
      response: 'O programa completo oferece: 5 trilhas de transformação gravadas, 24 encontros ao vivo por ano com Márcio, e acesso a uma comunidade segura na plataforma Ciclo.'
    },
    {
      keywords: ['preço', 'valor', 'custo', 'quanto custa', 'investimento'],
      response: 'O investimento para acessar a metodologia completa é de R$ 2.000, com garantia incondicional de 7 dias.'
    },
    {
      keywords: ['garantia', 'devolução', 'devolver'],
      response: 'Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, pode solicitar o reembolso.'
    },
    {
      keywords: ['inscrever', 'inscrição', 'aplicar', 'como me inscrevo', 'quero participar'],
      response: 'Para se inscrever, clique no botão "Aplicar Agora" ou "Garantir Minha Vaga" no site. Você será direcionado para o formulário de inscrição.'
    },
    {
      keywords: ['depoimentos', 'relatos', 'casos de sucesso', 'histórias'],
      response: 'Você pode ver relatos reais de casais que transformaram seus relacionamentos na seção "Relatos" do site. Há vídeos emocionantes de pessoas como Daniela & Jean, Aline, Thiago & Rafaela, e muitos outros!'
    },
    {
      keywords: ['contato', 'falar com', 'atendimento humano', 'suporte humano'],
      response: 'Atualmente, você pode entrar em contato através do formulário de inscrição. Se precisar de algo mais específico, recomendo clicar no botão "Aplicar Agora" para iniciar o processo.'
    },
    {
      keywords: ['obrigado', 'obrigada', 'agradeço', 'valeu', 'brigado', 'brigada'],
      response: 'De nada! Fico feliz em ter ajudado. Se precisar de mais alguma coisa, é só perguntar!'
    }
  ];

  // Default response
  const defaultResponse = 'Desculpe, não entendi exatamente sua pergunta. Você pode perguntar sobre o método, o Márcio, o programa, o preço ou os depoimentos!';

  // Function to add message to chat
  function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'message user-message' : 'message bot-message';

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = isUser ? '<i class="ph-fill ph-user"></i>' : '<i class="ph-fill ph-robot"></i>';

    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `<p>${text}</p>`;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    chatMessages.appendChild(messageDiv);

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Function to find best response
  function findResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    for (const item of knowledgeBase) {
      for (const keyword of item.keywords) {
        if (lowerMessage.includes(keyword)) {
          return item.response;
        }
      }
    }
    return defaultResponse;
  }

  // Function to send message
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, true);
      chatInput.value = '';

      // Simulate thinking
      setTimeout(() => {
        const response = findResponse(message);
        addMessage(response, false);
      }, 600);
    }
  }

  // Event listeners
  sendButton.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  /* ── Loader ── */
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initGSAPAnimations();
  }, 2800);

  /* ── Navbar ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ── Mobile Menu ── */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  
  if (hamburger && navMenu && menuOverlay) {
    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
  }

  /* ── Smooth Scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ── Magnetic Buttons (Física UI) ── */
  const magneticElements = document.querySelectorAll('.magnetic-wrap');

  magneticElements.forEach(wrap => {
    const target = wrap.querySelector('.magnetic-target');

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.4;

      gsap.to(target, {
        x: x,
        y: y,
        duration: 0.6,
        ease: "power3.out"
      });
    });

    wrap.addEventListener('mouseleave', () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });

  /* ── Swiper.js (Testimonials Carousel) ── */
  const swiper = new Swiper('.testimonials-swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: -20,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  /* ── GSAP Custom Animations (Masterclass) ── */
  function initGSAPAnimations() {

    // Hero Editorial Entrance
    const heroTl = gsap.timeline();

    // Image scale & fade mask
    heroTl.from(".hero-img", { scale: 1.1, filter: "grayscale(100%) blur(5px)", duration: 2.5, ease: "power2.out" }, 0);

    // Badge & Desc
    heroTl.from(".gsap-fade", { y: 20, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out" }, 0.5);

    // Sculptural Title (Line by line)
    heroTl.from(".gsap-text-line", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.out",
      rotation: 2,
      transformOrigin: "left top"
    }, 0.2);

    // Fade Up Elements
    gsap.utils.toArray(".gsap-fade-up").forEach(elem => {
      gsap.from(elem, {
        scrollTrigger: { trigger: elem, start: "top 85%" },
        y: 50, opacity: 0, duration: 1.2, ease: "power3.out"
      });
    });

    // Bento Box & Methodology Steps Stagger
    gsap.utils.toArray(".gsap-stagger").forEach((elem, i) => {
      gsap.from(elem, {
        scrollTrigger: { trigger: elem.closest('.bento-grid, .methodology-steps'), start: "top 80%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: i * 0.15
      });
    });

    // Parallax Images
    gsap.utils.toArray(".parallax-img").forEach(img => {
      gsap.to(img, {
        scrollTrigger: { trigger: ".about-gallery", start: "top bottom", scrub: 1 },
        y: (i, el) => -80 * parseFloat(el.parentElement.dataset.speed || 1),
        ease: "none"
      });
    });

    // Vertical Timeline Progress
    const progressFill = document.querySelector(".vt-progress-fill");
    if (progressFill) {
      gsap.to(progressFill, {
        scrollTrigger: { trigger: ".vertical-timeline", start: "top 70%", end: "bottom 50%", scrub: 1 },
        height: "100%",
        ease: "none"
      });
    }

    // Program Grid
    gsap.utils.toArray(".gsap-stagger-program").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: ".program-grid", start: "top 80%" },
        y: 60, opacity: 0, duration: 1, delay: i * 0.15, ease: "expo.out"
      });
    });
  }

  /* ── Custom Video Player Lazy Load ── */
  document.querySelectorAll('.custom-video-player').forEach(player => {
    const overlay = player.querySelector('.video-overlay');
    const src = player.dataset.src;

    if (overlay && src) {
      overlay.addEventListener('click', () => {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.setAttribute('playsinline', '');

        player.innerHTML = '';
        player.appendChild(video);
        video.play();
      });

      overlay.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') overlay.click();
      });
    }
  });

  /* ── Counters ── */
  gsap.utils.toArray("[data-counter]").forEach(el => {
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.suffix || "";
    gsap.to({ val: 0 }, {
      val: target,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 95%" },
      onUpdate: function () {
        el.innerText = Math.round(this.targets()[0].val).toLocaleString('pt-BR') + suffix;
      }
    });
  });

});