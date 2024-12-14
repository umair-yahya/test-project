function renderCards() {
  const cardData = [
    {
      image: "./assets/svg/atlanta.svg",
      title: "30+ Years Serving Metro Atlanta",
      description: "We’ve been providing top-notch service at reasonable prices to businesses & homeowners since 1992.",
      noHover: false
    },
    {
      image: "./assets/svg/vision.svg",
      title: "Realize Your Vision",
      description: "Provide a photo of your exterior, we’ll deliver a custom rendering of how your new awning will look on your house.",
      noHover: false
    },
    {
      image: "./assets/svg/fabrication.svg",
      title: "Custom Fabrication",
      description: "Your Softek Awning is custom-crafted to your exact standards. Every weld and stitch is made by our expert team.",
      noHover: true
    },
    {
      image: "./assets/svg/professional.svg",
      title: "Precise, Professional",
      description: "Our hands-on installation ensures your Softek Awning is a perfect fit.",
      noHover: false
    }
  ];

  const cardsContainer = document.getElementById('cards-container');

  cardData.map((card,index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.setAttribute('key', index); 

    cardElement.innerHTML = `
      <div class="card-image">
        <object class="svg-icon" data="${card?.image}" type="image/svg+xml"></object>
      </div>
      <h3 class="title">${card?.title}</h3>
      <p class="description">${card?.description}</p>
    `;

    cardsContainer.appendChild(cardElement);
  });
}

function toggleMenu() {
  document.getElementById('overlay').classList.toggle('active');
}

function closeMenu() {
  document.getElementById('overlay').classList.remove('active');
}

function closeHamburgerOnResize() {
  if (window.innerWidth > 768) {
    document.getElementById('overlay').classList.remove('active');
  }
}


function initializeEventListeners() {
  renderCards();
  document.getElementById('hamburger-open').addEventListener('click', toggleMenu);
  document.getElementById('hamburger-close').addEventListener('click', closeMenu);
  document.getElementById('overlay-close').addEventListener('click', closeMenu);
  window.addEventListener('resize', closeHamburgerOnResize);
}

document.addEventListener('DOMContentLoaded', function () {
  initializeEventListeners();
});