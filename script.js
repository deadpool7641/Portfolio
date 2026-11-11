/**
 * Malle Ganesh Portfolio — Interactive Behaviors & Architecture Data
 */

const PROJECT_DETAILS = {
  iitplanet: {
    eyebrow: 'RANKERS LAB // SHIPPED FLAGSHIP ECOSYSTEM',
    title: 'IITPlanet — Digital Education & Mentoring Platform',
    summary:
      'Architected and launched www.iitplanet.com as the sole full-stack engineer, delivering an end-to-end product-based digital education ecosystem.',
    architecture: [
      'Custom facial and signature verification systems authenticating students and securing live assessments.',
      'Automated AI class scheduler integrated directly with Zoho Meeting and WhatsApp APIs for live classes, mentor bookings, and notifications.',
      'Secure payment wall with structured tiered subscription flows handling instant bookings for 1:1 and group mentoring packages.',
      'Role-based dashboards providing parents and students real-time visibility into attendance, project completion, and test scores.'
    ],
    stack: ['Full-Stack Web', 'Facial & Signature Auth', 'AI Scheduler', 'Zoho Meeting API', 'WhatsApp API', 'Payment Wall'],
    link: 'https://www.iitplanet.com',
    linkLabel: 'Open Live Platform'
  },
  'iot-ids': {
    eyebrow: 'CONFIDENTIAL R&D // DIGITAL FORENSICS & SECURITY',
    title: 'Hybrid PyTorch IoT Network Intrusion Detection',
    summary:
      'Confidential, leakage-safe PyTorch classification system built for advanced multi-class IoT network intrusion detection.',
    architecture: [
      'Residual Tabular MLP branch paired with an Autoencoder for latent anomaly feature extraction.',
      '1D Convolutional Neural Network (1D CNN) and Bidirectional LSTM (BiLSTM) stages capturing sequential network traffic patterns.',
      'Strict leakage-safe data preprocessing and evaluation pipeline preventing train-test contamination.',
      'Achieved over 99% classification accuracy across 34 distinct attack classes.'
    ],
    stack: ['PyTorch', 'Residual Tabular MLP', 'Autoencoder', '1D CNN', 'BiLSTM', 'Digital Forensics'],
    link: null,
    linkLabel: null
  },
  'da-stgt': {
    eyebrow: 'CONFIDENTIAL R&D // DISASTER RESPONSE & TRAFFIC',
    title: 'DA-STGT: Disaster-Aware Spatio-Temporal Graph Transformer',
    summary:
      'Confidential predictive model designed to forecast urban traffic congestion during emergencies such as flooding and road blockages.',
    architecture: [
      'Graph Transformer architecture modeling spatial road network connectivity across urban intersections.',
      'Temporal attention layers capturing rapid traffic propagation shifts during sudden disaster events.',
      'Trained and evaluated in Google Colab on the TrafficTab23 dataset to learn spatial and temporal patterns simultaneously.'
    ],
    stack: ['Graph Transformers', 'Spatio-Temporal ML', 'TrafficTab23', 'Google Colab', 'Python'],
    link: null,
    linkLabel: null
  },
  'legal-ai': {
    eyebrow: 'BACKEND & AI ENGINEERING // ENTERPRISE RAG',
    title: 'Enterprise Legal AI Platform',
    summary:
      'High-performance backend infrastructure and web workspace enabling accurate enterprise-grade legal document analysis.',
    architecture: [
      'Asynchronous FastAPI backend paired with a Next.js frontend workspace for rapid document ingestion and querying.',
      'FAISS dense vector database powering Retrieval-Augmented Generation (RAG) across large legal corpora.',
      'Optimized chunking and vector retrieval pipeline drastically reducing lookup latency while improving AI contextual accuracy.'
    ],
    stack: ['FastAPI', 'Next.js', 'FAISS Vector Store', 'RAG Architecture', 'Python'],
    link: 'https://github.com/deadpool7641',
    linkLabel: 'View GitHub Profile'
  },
  auramed: {
    eyebrow: 'HEALTH & MEDICAL ANALYTICS // FULL-STACK ML',
    title: 'AuraMed — Medical Prediction Dashboard',
    summary:
      'Comprehensive MERN-stack medical prediction dashboard leveraging modern hybrid machine learning architectures to evaluate patient histories.',
    architecture: [
      'MERN full-stack web architecture (MongoDB, Express.js, React.js, Node.js) with secure API routes.',
      'Modern hybrid ML ensemble combining top-tier predictive models into a unified inference pipeline.',
      'Processes structured patient histories and renders responsive diagnostic charts for clinical decision support.'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Hybrid ML Ensemble'],
    link: 'https://github.com/deadpool7641',
    linkLabel: 'View GitHub Profile'
  },
  fraudguard: {
    eyebrow: 'MACHINE LEARNING ENGINEERING // FINTECH SECURITY',
    title: 'FraudGuard — Credit Card Fraud Detection',
    summary:
      'Production-ready machine learning pipeline built to detect fraudulent transactions under extreme class imbalance.',
    architecture: [
      'Random Forest classification pipeline tuned specifically for heavily skewed fraud-to-legitimate transaction ratios.',
      'Clean preprocessing and feature transformation stages bundled for reproducible inference.',
      'Efficient model serialization via joblib enabling seamless drop-in integration into deployment services.'
    ],
    stack: ['Python', 'Random Forest', 'Scikit-learn', 'Joblib', 'Class Imbalance Handling'],
    link: 'https://github.com/deadpool7641',
    linkLabel: 'View GitHub Profile'
  },
  'recon-scanner': {
    eyebrow: 'SECURITY ENGINEERING // OFFENSIVE RECONNAISSANCE',
    title: 'Recon-Scanner — Automated Vulnerability Engine',
    summary:
      'Custom Python network scanning utility mimicking enterprise offensive security reconnaissance workflows.',
    architecture: [
      'Automated port, service, and host discovery engine engineered in Python.',
      'Automated vulnerability mapping workflow enabling rapid identification of system exposures.',
      'Designed to strengthen endpoint security posture against common external attack vectors.'
    ],
    stack: ['Python', 'Automated Reconnaissance', 'VAPT', 'Network Security', 'Linux'],
    link: 'https://github.com/deadpool7641/Recon-Scanner',
    linkLabel: 'Open Repository'
  },
  'mobility-suite': {
    eyebrow: 'MOBILITY & FEATURE TRACKING // ANDROID & CV',
    title: 'Kalman Traffic Tracker & Encrypted Android Suite',
    summary:
      'Combined computer vision tracking research and production mobile engineering across transportation and secure communications.',
    architecture: [
      'Computer vision tracking modules utilizing Kalman filters for algorithmic traffic feature tracking.',
      'Production-ready Android vehicle booking application built with Java, PHP, and MongoDB featuring secure payment gateway integration.',
      'End-to-end encrypted Android chatting applications engineered in Kotlin using cryptographic security principles.'
    ],
    stack: ['Kotlin (E2EE)', 'Java', 'PHP', 'MongoDB', 'Kalman Filters', 'ECC', 'Payment Gateways'],
    link: 'https://github.com/deadpool7641',
    linkLabel: 'View GitHub Profile'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderAndNav();
  initSpotlightCards();
  initInspectorTabs();
  initProjectFilters();
  initProjectModal();
  initCommandPalette();
  initCopyTriggers();
  initContactForm();
  initScrollReveal();
});

/* ==========================================================================
   Theme Toggle (Dark / Light)
   ========================================================================== */
function initTheme() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('mg-portfolio-theme');

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('mg-portfolio-theme', theme);
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'dark' ? '#07090f' : '#f8fafc');
    }
  };

  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
  } else {
    applyTheme('dark');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      showToast(`Switched to ${next} mode`);
    });
  }
}

/* ==========================================================================
   Header Scroll State, ScrollSpy & Mobile Menu
   ========================================================================== */
function initHeaderAndNav() {
  const header = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  const onScroll = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 16);
    }

    const scrollPos = window.scrollY + 130;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* ==========================================================================
   Mouse-Tracking Spotlight Glow on Cards
   ========================================================================== */
function initSpotlightCards() {
  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

/* ==========================================================================
   Hero Interactive System Inspector Tabs
   ========================================================================== */
function initInspectorTabs() {
  const tabs = document.querySelectorAll('.inspector-tab');
  const panels = document.querySelectorAll('.inspector-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });

      panels.forEach((panel) => {
        const match = panel.id === `panel-${target}`;
        panel.classList.toggle('active', match);
        panel.hidden = !match;
      });
    });
  });
}

/* ==========================================================================
   Project Category Filters
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));

      cards.forEach((card) => {
        const categories = (card.dataset.category || '').split(/\s+/);
        const visible = filter === 'all' || categories.includes(filter);
        card.classList.toggle('hidden-card', !visible);
        if (visible) {
          card.classList.add('is-visible');
        }
      });
    });
  });
}

/* ==========================================================================
   Project Architecture Modal
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');
  const triggers = document.querySelectorAll('.modal-trigger');
  let lastFocused = null;

  if (!modal || !modalBody) return;

  const closeModal = () => {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  const openModal = (projectId) => {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    lastFocused = document.activeElement;
    modalBody.innerHTML = '';

    const eyebrow = document.createElement('span');
    eyebrow.className = 'modal-eyebrow';
    eyebrow.textContent = data.eyebrow;

    const title = document.createElement('h3');
    title.id = 'modal-title';
    title.textContent = data.title;

    const lead = document.createElement('p');
    lead.className = 'modal-lead';
    lead.textContent = data.summary;

    const archSec = document.createElement('div');
    archSec.className = 'modal-section';
    const archHeading = document.createElement('h4');
    archHeading.textContent = 'Architecture & Key Deliverables';
    const archList = document.createElement('ul');
    archList.className = 'modal-list';
    data.architecture.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      archList.appendChild(li);
    });
    archSec.append(archHeading, archList);

    const stackSec = document.createElement('div');
    stackSec.className = 'modal-section';
    const stackHeading = document.createElement('h4');
    stackHeading.textContent = 'Core Technologies';
    const pills = document.createElement('div');
    pills.className = 'tech-pills';
    data.stack.forEach((tech) => {
      const span = document.createElement('span');
      span.textContent = tech;
      pills.appendChild(span);
    });
    stackSec.append(stackHeading, pills);

    const actions = document.createElement('div');
    actions.className = 'modal-actions';
    if (data.link) {
      const ext = document.createElement('a');
      ext.href = data.link;
      ext.target = '_blank';
      ext.rel = 'noopener noreferrer';
      ext.className = 'btn btn-primary btn-sm';
      ext.innerHTML = `<span>${data.linkLabel}</span> <i class="fas fa-arrow-up-right-from-square"></i>`;
      actions.appendChild(ext);
    } else {
      const note = document.createElement('span');
      note.className = 'muted-tag';
      note.innerHTML = '<i class="fas fa-lock"></i> Source &amp; datasets protected under NDA';
      actions.appendChild(note);
    }

    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.className = 'btn btn-secondary btn-sm';
    doneBtn.textContent = 'Close';
    doneBtn.addEventListener('click', closeModal);
    actions.appendChild(doneBtn);

    modalBody.append(eyebrow, title, lead, archSec, stackSec, actions);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  };

  triggers.forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.dataset.project));
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

/* ==========================================================================
   Command Palette (Ctrl+K / Cmd+K)
   ========================================================================== */
function initCommandPalette() {
  const palette = document.getElementById('cmd-palette');
  const openBtn = document.getElementById('open-cmd');
  const input = document.getElementById('cmd-input');
  const list = document.getElementById('cmd-list');
  if (!palette || !input || !list) return;

  const commands = [
    { label: 'Go to About & Overview', tag: 'Section', icon: 'fas fa-user', action: () => jumpTo('#about') },
    { label: 'Go to Experience', tag: 'Section', icon: 'fas fa-briefcase', action: () => jumpTo('#experience') },
    { label: 'Go to Engineering Projects', tag: 'Section', icon: 'fas fa-code-branch', action: () => jumpTo('#projects') },
    { label: 'Go to Technical Arsenal', tag: 'Section', icon: 'fas fa-layer-group', action: () => jumpTo('#skills') },
    { label: 'Go to Education', tag: 'Section', icon: 'fas fa-graduation-cap', action: () => jumpTo('#education') },
    { label: 'Go to Contact', tag: 'Section', icon: 'fas fa-envelope', action: () => jumpTo('#contact') },
    { label: 'Visit IITPlanet.com (Live Product)', tag: 'External', icon: 'fas fa-globe', action: () => window.open('https://www.iitplanet.com', '_blank', 'noopener') },
    { label: 'Open GitHub Profile', tag: 'External', icon: 'fab fa-github', action: () => window.open('https://github.com/deadpool7641', '_blank', 'noopener') },
    { label: 'Open LinkedIn Profile', tag: 'External', icon: 'fab fa-linkedin-in', action: () => window.open('https://www.linkedin.com/in/malle-ganesh-2a43062ba/', '_blank', 'noopener') },
    { label: 'Copy Email (22ht1a4641@gmail.com)', tag: 'Action', icon: 'far fa-copy', action: () => copyText('22ht1a4641@gmail.com', 'Email copied') },
    { label: 'Copy Phone (+91 8978152422)', tag: 'Action', icon: 'fas fa-phone', action: () => copyText('+91 8978152422', 'Phone number copied') },
    { label: 'Toggle Dark / Light Theme', tag: 'Preference', icon: 'fas fa-circle-half-stroke', action: () => document.getElementById('theme-toggle')?.click() },
    { label: 'Print / Save Portfolio as PDF', tag: 'Action', icon: 'fas fa-print', action: () => window.print() }
  ];

  let selectedIndex = 0;
  let filtered = [...commands];

  const jumpTo = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const render = () => {
    list.innerHTML = '';
    if (filtered.length === 0) {
      const empty = document.createElement('li');
      empty.className = 'cmd-item';
      empty.textContent = 'No matching commands found.';
      list.appendChild(empty);
      return;
    }

    filtered.forEach((cmd, idx) => {
      const li = document.createElement('li');
      li.className = `cmd-item${idx === selectedIndex ? ' selected' : ''}`;
      li.setAttribute('role', 'option');
      li.innerHTML = `
        <span class="cmd-item-left"><i class="${cmd.icon}"></i><span>${cmd.label}</span></span>
        <span class="cmd-item-tag">${cmd.tag}</span>
      `;
      li.addEventListener('click', () => {
        close();
        cmd.action();
      });
      list.appendChild(li);
    });
  };

  const open = () => {
    palette.hidden = false;
    input.value = '';
    filtered = [...commands];
    selectedIndex = 0;
    render();
    input.focus();
  };

  const close = () => {
    palette.hidden = true;
  };

  if (openBtn) openBtn.addEventListener('click', open);

  palette.addEventListener('click', (e) => {
    if (e.target === palette) close();
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    filtered = commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)
    );
    selectedIndex = 0;
    render();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && filtered.length) {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filtered.length;
      render();
    } else if (e.key === 'ArrowUp' && filtered.length) {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filtered.length) % filtered.length;
      render();
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      const act = filtered[selectedIndex].action;
      close();
      act();
    } else if (e.key === 'Escape') {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      palette.hidden ? open() : close();
    } else if (e.key === 'Escape' && !palette.hidden) {
      close();
    }
  });
}

/* ==========================================================================
   Clipboard Copy & Toast Notifications
   ========================================================================== */
function initCopyTriggers() {
  document.querySelectorAll('.copy-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      copyText(btn.dataset.copy, btn.dataset.label || 'Copied to clipboard');
    });
  });
}

function copyText(value, message) {
  if (!value) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).then(
      () => showToast(`${message}: ${value}`),
      () => fallbackCopy(value, message)
    );
  } else {
    fallbackCopy(value, message);
  }
}

function fallbackCopy(value, message) {
  const ta = document.createElement('textarea');
  ta.value = value;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(`${message}: ${value}`);
  } catch {
    showToast('Copy failed — please copy manually');
  }
  document.body.removeChild(ta);
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* ==========================================================================
   Contact Form Handling (XSS-safe DOM creation + Mailto handoff)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const topic = document.getElementById('topic')?.value || 'Portfolio Inquiry';
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    const mailSubject = encodeURIComponent(`[${topic}] Message from ${name}`);
    const mailBody = encodeURIComponent(`From: ${name} (${email})\nTopic: ${topic}\n\n${message}`);
    const mailtoUrl = `mailto:22ht1a4641@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    const wrapper = document.createElement('div');
    wrapper.className = 'form-success-state';

    const icon = document.createElement('i');
    icon.className = 'fas fa-circle-check';

    const heading = document.createElement('h3');
    heading.textContent = 'Ready to Send';

    const text = document.createElement('p');
    text.textContent = `Thank you, ${name}. Launch your email client below to dispatch this message directly to Malle Ganesh, or copy 22ht1a4641@gmail.com.`;

    const actions = document.createElement('div');
    actions.className = 'form-success-actions';

    const mailBtn = document.createElement('a');
    mailBtn.href = mailtoUrl;
    mailBtn.className = 'btn btn-primary btn-sm';
    mailBtn.innerHTML = '<i class="fas fa-envelope-open-text"></i> <span>Open Email Client</span>';

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'btn btn-secondary btn-sm';
    copyBtn.textContent = 'Copy Email Address';
    copyBtn.addEventListener('click', () => copyText('22ht1a4641@gmail.com', 'Email copied'));

    actions.append(mailBtn, copyBtn);
    wrapper.append(icon, heading, text, actions);

    form.replaceWith(wrapper);
    showToast('Message prepared!');
  });
}

/* ==========================================================================
   Scroll Reveal Observer
   ========================================================================== */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.delay || 0);
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
}
