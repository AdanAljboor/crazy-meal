const form = document.getElementById('order-form');
const tableBody = document.querySelector('#order-table tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const mealName = document.getElementById('meal-name').value;
  const mealPrice = document.getElementById('meal-price').value;
  const mealImage = document.getElementById('meal-image').value;

  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${mealName}</td>
    <td>$${mealPrice}</td>
    <td><img src="${mealImage}" alt="${mealName}" style="width: 80px; border-radius: 6px;" /></td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(newRow);
  form.reset();
});

tableBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-btn')) {
    const row = e.target.closest('tr');
    row.remove();
  }
});
