document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
  }

  const searchForm = document.querySelector('#job-search');
  const jobCards = [...document.querySelectorAll('.job-card[data-tags]')];
  const searchMessage = document.querySelector('.search-message');
  let activeFilter = 'Todas as vagas';

  const filterJobs = () => {
    if (!jobCards.length) return;
    const formData = searchForm ? new FormData(searchForm) : new FormData();
    const query = String(formData.get('query') || '').trim().toLocaleLowerCase('pt-BR');
    const location = String(formData.get('location') || '');
    let visibleCount = 0;

    jobCards.forEach((card) => {
      const searchableText = `${card.textContent} ${card.dataset.tags}`.toLocaleLowerCase('pt-BR');
      const matchesQuery = !query || searchableText.includes(query);
      const matchesLocation = !location || card.dataset.neighborhood === location;
      const matchesFilter = activeFilter === 'Todas as vagas'
        || activeFilter === 'Perto de mim'
        || card.dataset.tags.includes(activeFilter);
      const visible = matchesQuery && matchesLocation && matchesFilter;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (searchMessage) {
      searchMessage.textContent = visibleCount ? '' : 'Nenhuma vaga encontrada com esses filtros. Tente outra busca.';
    }
  };

  if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      filterJobs();
      document.querySelector('#vagas')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.filter-chip').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.filter-chip.is-active')?.classList.remove('is-active');
      button.classList.add('is-active');
      activeFilter = button.dataset.filter;
      filterJobs();
    });
  });

  document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => {
      activeFilter = card.dataset.category;
      document.querySelectorAll('.filter-chip').forEach((button) => button.classList.remove('is-active'));
      filterJobs();
    });
  });

  document.querySelectorAll('.save-job').forEach((button) => {
    button.addEventListener('click', () => {
      const isSaved = button.classList.toggle('is-saved');
      button.setAttribute('aria-pressed', String(isSaved));
      button.setAttribute('aria-label', isSaved ? 'Remover vaga salva' : 'Salvar vaga');
      button.textContent = isSaved ? '♥' : '♧';
    });
  });

  document.querySelectorAll('[data-toggle-password]').forEach((button) => {
    button.addEventListener('click', () => {
      const input = document.getElementById(button.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
      button.setAttribute('aria-label', input.type === 'password' ? 'Mostrar senha' : 'Ocultar senha');
    });
  });

  document.querySelectorAll('.account-tabs button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelector('.account-tabs button.is-active')?.classList.remove('is-active');
      button.classList.add('is-active');
    });
  });

  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    const password = form.querySelector('[name="password"]');
    const confirmation = form.querySelector('[name="confirm-password"]');

    if (password && confirmation) {
      confirmation.addEventListener('input', () => {
        confirmation.setCustomValidity(
          confirmation.value && confirmation.value !== password.value
            ? 'As senhas não correspondem.'
            : ''
        );
      });
      password.addEventListener('input', () => {
        if (confirmation.value) {
          confirmation.dispatchEvent(new Event('input'));
        }
      });
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const feedback = form.querySelector('.form-feedback');
      if (feedback) feedback.textContent = form.dataset.successMessage || 'Pronto! Esta demonstração é apenas visual e não envia dados.';
    });
  });
});
