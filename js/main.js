'use strict';

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

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

    // Bento Box Stagger
    gsap.utils.toArray(".gsap-stagger").forEach((elem, i) => {
      gsap.from(elem, {
        scrollTrigger: { trigger: ".bento-grid", start: "top 80%" },
        y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: (i % 4) * 0.1
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
