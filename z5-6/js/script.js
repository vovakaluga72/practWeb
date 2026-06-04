const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
[...popoverTriggerList].forEach((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

const toastElement = document.getElementById('liveToast');
const toastButton = document.getElementById('showToast');

if (toastElement && toastButton) {
  const toast = new bootstrap.Toast(toastElement);
  toastButton.addEventListener('click', () => toast.show());
}

document.querySelectorAll('#feedbackModal form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const modal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
    const toast = new bootstrap.Toast(toastElement);
    modal.hide();
    toast.show();
    form.reset();
  });
});
