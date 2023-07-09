const textSection = `
<form id="invoiceForm">
<div class="form-headline">
<h2>Build Your Invoice</h2>
<p>Invoice Your Way to Success: Fill the form out below to get started!</p>
</div>
<fieldset class="fieldset-1">
    <legend>Invoice Information</legend>
    <label for="invoiceNumber">Invoice Number:</label>
    <input type="text" id="invoiceNumber" name="invoiceNumber" placeholder="e.g. 001" required />

    <label for="businessName">Business Name:</label>
    <input type="text" id="businessName" name="businessName" placeholder="e.g. Bob's Burgers" required />

    <label for="issueDate">Issue Date:</label>
    <input type="date" id="issueDate" name="issueDate"  required />

    <label for="dueDate">Due Date:</label>
    <input type="date" id="dueDate" name="dueDate"  required />

    <label for="taxPercentage">Tax (VAT)%:</label>
    <input
      type="number"
      id="taxPercentage"
      name="taxPercentage"
      min="0"
      max="100"
      step="0.01"
      placeholder="e.g. 20"
      required
    />

    <label for="vatNumber">VAT Number:</label>
    <input type="text" id="vatNumber" name="vatNumber" placeholder="e.g. DE123456789" />

    <label for="bankName">Your Bank Name:</label>
    <input type="text" id="bankName" name="bankName" placeholder="e.g. TSB" />

    <label for="accountNumber">Your Bank Account Number:</label>
    <input type="number" id="accountNumber" name="accountNumber" placeholder="e.g. 55743513" />

    <label for="sortNumber">Your Bank Sort Number:</label>
    <input type="text" id="sortNumber" name="sortNumber" placeholder="e.g. 01-02-03" />

</fieldset>

<fieldset class="fieldset-2">
  <legend>Correspondent Information</legend>
  <label for="correspondentName">Name:</label>
  <input
    type="text"
    id="correspondentName"
    name="correspondentName"
    placeholder="your name here"
    required
  />

  <label for="correspondentStreet">Street Name:</label>
  <input
    type="text"
    id="correspondentStreet"
    name="correspondentStreet"
    placeholder="your street here"
    required
  />

  <label for="correspondentCity">City:</label>
  <input
    type="text"
    id="correspondentCity"
    name="correspondentCity"
    placeholder="your city here"
    required
  />

  <label for="correspondentPostcode">Postcode:</label>
  <input
    type="text"
    id="correspondentPostcode"
    name="correspondentPostcode"
    placeholder="your postcode here"
    required
  />

  <label for="correspondentEmail">Email:</label>
  <input
    type="email"
    id="correspondentEmail"
    name="correspondentEmail"
    placeholder="your email here"
    required
  />

  <label for="correspondentTelephone">Telephone:</label>
  <input
    type="tel"
    id="correspondentTelephone"
    name="correspondentTelephone"
    placeholder="your phone-number here"
    required
  />
</fieldset >
<!-- recipient info -->
<fieldset class="fieldset-3">
  <legend>Recipient Information</legend>

  <label for="recipientBusiness">Business Name:</label>
  <input type="text" id="recipientBusiness" name="recipientBusiness"
  placeholder="recipient business name" required />


  <label for="recipientName">Name:</label>
  <input type="text" id="recipientName" name="recipientName"
  placeholder="recipient name" required />

  <label for="recipientStreet">Street Name:</label>
  <input
    type="text"
    id="recipientStreet"
    name="recipientStreet"
    placeholder="recipient street"
    required
  />

  <label for="recipientCity">City:</label>
  <input type="text" id="recipientCity" name="recipientCity" 
  placeholder="recipient city" required />

  <label for="recipientPostcode">Postcode:</label>
  <input
    type="text"
    id="recipientPostcode"
    name="recipientPostcode"
    placeholder="recipient postcode"
    required
  />
</fieldset>

<input type="submit" value="Submit" id="submit-form-button" />
</form>
`;

function renderUserDetails() {
  const invoiceNumber = document.getElementById("invoiceNumber");
  const businessName = document.getElementById("businessName");

  const taxPercentage = document.getElementById("taxPercentage");
  const correspondentName = document.getElementById("correspondentName");
  const correspondentStreet = document.getElementById("correspondentStreet");
  const correspondentCity = document.getElementById("correspondentCity");
  const correspondentPostcode = document.getElementById(
    "correspondentPostcode"
  );
  const correspondentEmail = document.getElementById("correspondentEmail");
  const correspondentTelephone = document.getElementById(
    "correspondentTelephone"
  );
  const recipientName = document.getElementById("recipientName");
  const recipientStreet = document.getElementById("recipientStreet");
  const recipientCity = document.getElementById("recipientCity");
  const recipientPostcode = document.getElementById("recipientPostcode");
  const bankName = document.getElementById("bankName");
  const accountNumber = document.getElementById("accountNumber");
  const sortNumber = document.getElementById("sortNumber");

  const formattedIssueDate = moment(issueDate.value).format("DD/MM/YYYY");
  const formattedDueDate = moment(dueDate.value).format("DD/MM/YYYY");
  // change date format

  issueDate.value = formattedIssueDate;
  dueDate.value = formattedDueDate;

  const userDetails = document.getElementById("user-details");
  userDetails.innerHTML = `

      <div class="flex">
        <div>
          <p>Invoice Number: ${invoiceNumber.value}</p>
        </div>
        <div>
          <p>Issued By: ${businessName.value}</p>
        </div>
      </div>
      
      <div class="flex">
        <div>
        <p>Issue Date: ${formattedIssueDate}</p>
        
        </div>
        <div class="due-date-border">
          <p><strong>Due Date: <span class="due-date-style"> ${formattedDueDate}</span></strong></p>
         
        </div>
      </div>

      <div class="flex">
          <section class="user-flex">
            <h4>Correspondent Address: </h4>
            <p>${correspondentName.value}</p>
            <p>${correspondentStreet.value}</p>
            <p>${correspondentCity.value}</p>
            <p>${correspondentPostcode.value}</p>
            <p>${correspondentEmail.value}</p>
            <p>${correspondentTelephone.value}</p>
          </section>

          <section class="user-flex">
            <h4>Recipient Address: </h4>
           <p>${recipientBusiness.value}</p>
            <p>${recipientName.value}</p>
            <p>${recipientStreet.value}</p>
            <p>${recipientCity.value}</p>
            <p>${recipientPostcode.value}</p>
          </section>
      </div>

          <section class="flex-bottom">
              <section class="flex-bottom-left-col">
                <p>Tax (VAT): ${taxPercentage.value}%</p>
                <h4>Please Pay: </h4>
                <p>Bank Name: ${bankName.value}</p>
                <p>Account Number: ${accountNumber.value}</p>
                <p>Sort Code: ${sortNumber.value}</p>
          </section>

          <div>
          <p>VAT Number: ${vatNumber.value}</a></p>
          </div>
      </div>
    `;

  document.querySelector("#business-name-insert").innerHTML = `
  ${businessName.value}
  `;
}
export { textSection, renderUserDetails };
