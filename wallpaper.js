document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
      const file = button.getAttribute('data-file');
      const link = document.createElement('a');
      link.href = file;
      link.download = file;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  