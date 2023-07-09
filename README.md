# invoice-builder
This project is an invoice generator that allows users to input items, costs, and quantities to create a printable invoice. It also includes features such as removing items, calculating totals, and rendering user details.

<h2>Usage</h2>
To use this invoice generator, follow these steps:

- Clone or download this repository to your local machine.
- Open the index.html file in a web browser.
- Fill out the required fields in the user details section.
- Use the input fields to add items, costs, and quantities to the invoice.
- Click the "Add" button to add the item to the invoice.
- To remove an item, click the "remove" link next to the item in the invoice.
- Once all the items are added, click the "Submit" button to render the user details and display the invoice.
- To print the invoice, click the "Print" button. This will hide unnecessary elements and open the browser's print dialogue.

<h2>Features</h2>

**Adding Items**
Enter the item name, currency, cost, and quantity in the input fields.
Click the "Add" button to add the item to the invoice.
The added items will be displayed in the item list with their respective costs and quantities.

**Removing Items**
Each item in the invoice has a "remove" link next to it.
Click the "remove" link to remove the corresponding item from the invoice.
The item will be removed from the item list, and the totals will be recalculated.

**Calculating Totals**
The total cost for each item is calculated by multiplying the price and quantity.
The total amount for all items is displayed at the bottom of the invoice.
The tax amount is calculated based on the total amount and the tax percentage.
The taxed total amount (including tax) is displayed as the final total.

**Rendering User Details**
Fill out the required fields in the user details section.
The user details will be rendered on the invoice when the form is submitted.
The user details section will be hidden, and the invoice will be displayed.

**Printing the Invoice**
Click the "Print" button to print the invoice.
The unnecessary elements, such as the submit button and input fields, will be hidden.
The print dialogue of the browser will open, allowing you to print the invoice.

**Technologies Used**
- HTML
- CSS
- JavaScript
