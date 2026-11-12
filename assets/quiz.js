document.querySelectorAll('[data-quiz]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const choice = form.querySelector('input:checked');
    const output = form.querySelector('[role="status"]');
    output.textContent = choice ? choice.dataset.feedback : 'Choose an answer first.';
  });
});
