const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach((button) => {
  button.addEventListener('click', function () {
    // Get the ID of the associated quantity element
    const quantityId = this.getAttribute('data-quantity-id');
    const quantityElement = document.getElementById(quantityId);

    // Retrieve and increment the current count
    let currentCount = parseInt(quantityElement.getAttribute('data-count'), 10);
    currentCount++;

    // Update the `data-count` attribute and displayed text
    quantityElement.setAttribute('data-count', currentCount);
    quantityElement.textContent = `Quantity: ${currentCount}`;
  });
});
