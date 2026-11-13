// Copy only snippet text, preserving whitespace and excluding controls.
document.querySelectorAll('pre > code').forEach((code) => {
  const controls = document.createElement('div');
  controls.className = 'code-controls';
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Copy code';
  const status = document.createElement('span');
  status.setAttribute('role', 'status');
  controls.append(status, button);
  code.parentElement.before(controls);

  button.addEventListener('click', async () => {
    const text = code.textContent;
    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      // Local files and some browsers do not expose the Clipboard API.
      const field = document.createElement('textarea');
      field.value = text;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      field.setAttribute('readonly', '');
      document.body.append(field);
      field.select();
      try { copied = document.execCommand('copy'); } catch { /* Report below. */ }
      field.remove();
      button.focus();
    }
    status.textContent = copied ? 'Copied!' : 'Copy unavailable. Select the code and copy manually.';
  });
});
