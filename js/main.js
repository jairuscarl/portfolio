// ============================================================
// PORTFOLIO — Main JavaScript
// Theme toggle, certificate modal, scroll animations
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ─── Theme Toggle ──────────────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const themeIcon = themeToggle?.querySelector('i');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);
  if (themeIcon) {
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  }

  themeToggle?.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (themeIcon) {
      themeIcon.className = next === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
  });

  // ─── Certificate Modal ─────────────────────────────────────
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.getElementById('modalClose');

  // View buttons open modal
  document.querySelectorAll('.cert-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = btn.getAttribute('data-src');
      const title = btn.getAttribute('data-title');
      if (modal && modalImg) {
        modalImg.src = imgSrc;
        modalImg.alt = title || 'Certificate';
        if (modalTitle) modalTitle.textContent = title || '';
        modal.classList.add('is-open');
        body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  function closeModal() {
    if (modal) {
      modal.classList.remove('is-open');
      body.style.overflow = '';
    }
  }

  closeBtn?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
      closeModal();
    }
  });

  // ─── Scroll Animations (Intersection Observer) ────────────
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ─── Mobile Nav Close on Link Click ───────────────────────
  const navCheckbox = document.getElementById('nav-toggle-cb');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navCheckbox?.checked) navCheckbox.checked = false;
    });
  });

  // ─── Skills Grid Population ──────────────────────────────
  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) {
    const skills = [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'TypeScript', icon: 'fab fa-js' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'Next.js', icon: 'fab fa-react' },
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-server' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'Git', icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'Tailwind CSS', icon: 'fab fa-css3' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'Firebase', icon: 'fas fa-fire' },
      { name: 'REST APIs', icon: 'fas fa-plug' }
    ];

    skills.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon}"></i></div>
        <span class="skill-name">${skill.name}</span>
      `;
      skillsGrid.appendChild(card);
    });

    // Observe skill cards for staggered animation
    const skillCards = skillsGrid.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      obs.observe(card);
    });
  }

});