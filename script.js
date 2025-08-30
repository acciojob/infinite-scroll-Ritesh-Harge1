//your code here!

// Select the list
const list = document.getElementById('list');

// Keep track of the total number of items
let itemCount = 10;

// Function to add items to the list
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

// Add scroll event listener
list.addEventListener('scroll', () => {
  // Check if user scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // Add 2 more items
  }
});
