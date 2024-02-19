// Create function calculateShipping that takes in a cost and returns the cost + 10 if cost is less than 40, otherwise returns the cost.

let cost = 0;

cost = document.getElementById("order-amount").value;

function calculateShipping(cost) {
  // Convert the cost to a number!
  cost = Number(cost);

  if (cost <= 40) {
    console.log("Standard shipping");
    return cost + 10;
  } else {
    console.log("Free shipping");
    return cost;
  }
}

// Create a function renderTotalCost that displays the total cost on the page.

function renderTotalCost(cost) {
  document.getElementsByClassName(
    "total-cost"
  )[0].innerHTML = `<p><strong>Total Cost:</strong> $${calculateShipping(
    cost
  )}</p>`;
}

// Add event listener to the submit button that will run the calculateShipping function and update the total cost.

document.getElementById("submit-button").addEventListener("click", () => {
  let cost = document.getElementById("order-amount").value;

  renderTotalCost(cost);
});
