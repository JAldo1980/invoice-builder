const popupRender = (document.getElementById("popup-render").innerHTML = `

<div class="popup-wrapper">
<h2>Introducing "Invoice-It-Up ⬆"</h2>
<h4>
  The ultimate software for creating your own business invoices!
</h4>

<p>
  Say goodbye to boring and tedious invoice creation, and hello to a
  more efficient and enjoyable invoicing experience.
</p>

<p>
  With Invoice-It-Up, you can create a professional-looking invoice
  in minutes. You can also save your information for future use,
  making invoicing a breeze.
</p>

<p>
  <strong>
    But that's not all! You don't need to be a tech expert to use
    it.
  </strong>
</p>

<p>So what are you waiting for?</p>

<p>
  Try Invoice-It-Up today and simplify your invoicing process, while
  adding a little bit of fun and personality to your business
  transactions!
</p>
<div class="popup-btn-box">
  <button class="popup-btn" id="popupBtn">Create!</button>
</div>
</div>
`);

document.getElementById("popupBtn").addEventListener("click", function () {
  document.getElementById("form-area").style.display = "block";
  document.getElementById("popup-render").classList.add("hide");
});

export { popupRender };
