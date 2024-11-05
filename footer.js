class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  <div class="container p-4">
    <section class="">
      <div class="row">
        <div class="col-md-4">
          <h6 class="text-center text-uppercase mb-4 font-weight-bold">
            Company
          </h6>
          <p>
            <a class="text-white">Privacy Policy</a>
          </p>
          <p>
            <a class="text-white">Contact Us</a>
          </p>
        </div>

        <div class="col-md-4">
          <h6 class="text-center text-uppercase mb-4 font-weight-bold">
            Contact
          </h6>
          <p>📧 hello@murciavillas.com</p>
          <p></p>
          <p>
            <i class="fas fa-phone mr-3"></i> + 34 625 140 635 <br />(WhatsApp)
          </p>
          <p><i class="fas fa-phone mr-3"></i> + 44 7709 026098</p>
        </div>

        <div class="col-md-4">
          <h6 class="text-center text-uppercase mb-4 font-weight-bold">
            Murcia Villas
          </h6>
          <p>For all your Spanish property needs</p>
        </div>
      </div>
    </section>
  </div>

  <div class="text-center p-3" style="background-color: #2772db">
    © 2024 Copyright:
    <a class="text-white" href="https://yourspanishpropertysolutions.com/"
      >yourspanishpropertysolutions.com</a
    >
  </div>`;
  }
}

customElements.define("footer-component", Footer);
