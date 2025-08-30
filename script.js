document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('infi-list');
  let itemCount = 0;

  // Function to add items
  function addItems(number) {
    for (let i = 1; i <= number; i++) {
      const li = document.createElement('li');
      li.textContent = `Item ${itemCount + i}`;
      list.appendChild(li);
    }
    itemCount += number;
  }

  // Add initial 10 items
  addItems(10);

  // Infinite scroll: add 2 items when reaching the bottom
  list.addEventListener('scroll', () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addItems(2);
    }
  });
});

