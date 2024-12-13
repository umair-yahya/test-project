export function renderCards() {
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

  const changeSvgColor = (paths, color) => {
    paths.forEach(path => path.setAttribute('fill', color));
  };

  cardData.map(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    cardElement.innerHTML = `
      <div class="card-image">
        <object class="svg-icon" data="${card.image}" type="image/svg+xml"></object>
      </div>
      <h3 class="title">${card.title}</h3>
      <p class="description">${card.description}</p>
    `;

    cardsContainer.appendChild(cardElement);

    const svgIcon = cardElement.querySelector('.svg-icon');
    svgIcon.addEventListener('load', () => {
      const svgDoc = svgIcon.contentDocument;
      const paths = svgDoc.querySelectorAll('path');
      const defaultColor = '#0095DA';
      const hoverColor = '#ffffff';

      changeSvgColor(paths, defaultColor);

      if (!card.noHover) {
        cardElement.addEventListener('mouseover', () => changeSvgColor(paths, hoverColor));
        cardElement.addEventListener('mouseout', () => changeSvgColor(paths, defaultColor));
      }
    });
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

document.addEventListener('DOMContentLoaded', function () {
  renderCards();

  const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    const closeBtn = document.querySelector('.closebtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    window.addEventListener('resize', closeHamburgerOnResize);
});