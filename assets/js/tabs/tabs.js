const tabButtons = document.querySelectorAll('#nav-tab button');

tabButtons.forEach((button) => {
  const tabTrigger = new bootstrap.Tab(button);

  button.addEventListener('mouseenter', () => {
    tabTrigger.show();
  });
});
