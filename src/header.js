class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
  <div class="container">
    <a class="navbar-brand" href="index.html"
      ><img
        src="images/logo-transparent.png"
        alt=""
        class="navbar-logo img-fluid"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="about.html">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact us</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="services.html"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="sales.html">Sales</a></li>
            <li>
              <a class="dropdown-item" href="management.html">Management</a>
            </li>
            <li>
              <a class="dropdown-item" href="rentals.html">Rentals</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
  }
}

customElements.define("header-component", Header);
