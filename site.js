document.querySelectorAll('.filters').forEach(group => {
  group.hidden = false;
  group.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const selected = button.dataset.filter;
    group.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    let count = 0;
    document.querySelectorAll('.publication[data-topics]').forEach(item => {
      item.hidden = selected !== 'all' && !item.dataset.topics.split(' ').includes(selected);
      if (!item.hidden) count++;
    });
    document.getElementById('publication-status').textContent = `${count} publications shown.`;
  });
});
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
