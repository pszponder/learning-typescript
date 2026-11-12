(() => {
  const key = 'typescript-course-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  let button;

  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch { /* Local files or privacy settings may disable storage. */ }

  function apply() {
    const theme = preference || (system.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    if (button) button.textContent = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  // Run in the head so the saved theme is applied before content is painted.
  apply();
  system.addEventListener('change', apply);
  window.addEventListener('storage', (event) => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    apply();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const controls = document.createElement('div');
    controls.className = 'theme-controls';
    button = document.createElement('button');
    button.type = 'button';
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch { /* Keep the toggle usable without storage. */ }
      apply();
    });
    controls.append(button);
    document.body.prepend(controls);
    apply();
  });
})();
