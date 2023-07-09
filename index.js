import { textSection, renderUserDetails } from "./user-form.js";

import { popupRender } from "./popup.js";

// Add a print button to your HTML
const printButton = document.getElementById("print-button");
printButton.addEventListener("click", printPage);

// Function to print the page
function printPage() {
  document.querySelector(".send-invoice-btn").classList.add("hide");
  document.querySelector(".send-invoice-btn").style.display = "none";
  document.querySelector(".item-input-box").style.display = "none";
  // remove "remove-item"
  document.querySelectorAll(".remove-item").forEach((item) => item.remove());
  window.print();
}

document.getElementById("form-area").innerHTML = textSection;

const addInputsBtn = document.getElementById("add-inputs-btn");
// output variables
const itemOutput = document.getElementById("item-output");
const costOutput = document.getElementById("cost-output");
const noteOutput = document.getElementById("note-output");
const totalOutput = document.getElementById("total-output");

// constructor function
function itemConstructor(item, currency, amount, quantity) {
  this.item = item;
  this.currency = currency;
  this.amount = amount;
  this.quantity = quantity;
  this.id = generateRandomID();
}

// now, I have to create an array to store the objects
let items = [];

// EVENT LISTENER
addInputsBtn.addEventListener("click", function () {
  // here, I collect the input values...
  const item = document.querySelector("#input-item").value;
  const currency = document.querySelector("#currency-select-box").value;
  const amount = document.querySelector("#input-currency").value;
  const quantity = document.querySelector("#input-quantity").value;

  // now, I create a new object using the above constructor function - pushing the new object to the array...
  const newItem = new itemConstructor(item, currency, amount, quantity);
  items.push(newItem);

  let totalUnitCosts = 0;
  items.forEach(function (item) {
    totalUnitCosts += item.amount * item.quantity;
  });

  // now I render the inputs to the specified html elements
  itemOutput.innerHTML = items
    .map(function (item) {
      const totalItemCost = item.amount * item.quantity;
      return `
        <div class="item-flex" id="${item.id}">
          <div class="item-holder">${item.item} <p class="remove-item">remove</p></div> 
          <div class="qty-text">${item.quantity}</div>
          <div class="item-cost-text">${item.currency} ${item.amount}</div>
          <div>${item.currency} ${totalItemCost}</div>
        </div>`;
    })
    .join("");

  // Add event listener to all "remove" buttons

  itemOutput.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-item")) {
      const parentElement = event.target.closest(".item-flex");
      const itemId = parentElement.getAttribute("id");

      // remove the item from the items array
      items = items.filter(function (item) {
        return item.id !== itemId;
      });

      // update the rendered HTML after object removed
      itemOutput.innerHTML = items
        .map(function (item) {
          const totalItemCost = item.amount * item.quantity;
          return `
            <div class="item-flex" id="${item.id}">
              <div class="item-holder">${
                item.item
              } <p class="remove-item">remove</p></div> 
              <div class="qty-text">${item.quantity}</div>
              <div class="item-cost-text">${
                item.currency
              } ${item.amount.toFixed(1)}</div>
              <div>${item.currency} ${totalItemCost.toFixed(1)}</div>
            </div>`;
        })
        .join("");
    }
  });

  // once input has been rendered, I need to CLEAR out the input fields
  document.getElementById("input-item").value = "";
  document.getElementById("input-currency").value = "";
  document.getElementById("input-quantity").value = "";

  let totalAmount = 0;
  items.forEach(function (item) {
    totalAmount += item.amount * item.quantity;
  });

  let taxAmount = totalAmount * (taxPercentage.value / 100);

  let totalTaxedAmount = totalAmount + taxAmount;

  totalOutput.innerHTML = `
    <div class="total-amount-box">
      <div class="total-amount-el"><strong>${currency} ${totalTaxedAmount.toFixed(
    2
  )}</strong></div>

    <div>
  `;

  // render note
  noteOutput.innerHTML = `
    <p>We accept cash, credit card, or PayPal</p>
  `;
});
// END OF EVENT LISTENER

// function to generate random ID
function generateRandomID() {
  let id = "";
  const characters = "0123456789abcdef";

  for (let i = 0; i < 32; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }

  return id;
}

// EVENT LISTENER FOR FORM SUBMIT
document
  .getElementById("submit-form-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const form = document.getElementById("invoiceForm");
    if (form.checkValidity()) {
      console.log("it works!!");
      document.querySelector(".inner-container").style.display = "block";
      renderUserDetails();

      form.style.display = "none";

      // save user form inputs to local storage
    } else {
      alert("Please fill out all required fields.");
    }
  });
