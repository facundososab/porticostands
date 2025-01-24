const empresas = [
  {
    name: 'COSTAN Epta',
    images: [
      'img/stands/costan/costan1.jpg',
      'img/stands/costan/costan2.jpg',
      'img/stands/costan/costan3.jpg',
      'img/stands/costan/costan4.jpg',
    ],
  },
  {
    name: 'DPM',
    images: [
      'img/stands/dpm/dpm1.jpg',
      'img/stands/dpm/dpm2.jpg',
      'img/stands/dpm/dpm3.jpg',
      'img/stands/dpm/dpm4.jpg',
      'img/stands/dpm/dpm5.jpg',
    ],
  },
  {
    name: 'MSR',
    images: [
      'img/stands/msr/msr1.jpg',
      'img/stands/msr/msr2.jpg',
      'img/stands/msr/msr3.jpg',
    ],
  },
  {
    name: 'La cumbre',
    images: [
      'img/stands/lacumbre/lacumbre1.jpg',
      'img/stands/lacumbre/lacumbre2.jpg',
      'img/stands/lacumbre/lacumbre3.jpg',
      'img/stands/lacumbre/lacumbre4.jpg',
    ],
  },
  {
    name: 'GAMA Italy',
    images: [
      'img/stands/gama/gama1.jpg',
      'img/stands/gama/gama2.jpg',
      'img/stands/gama/gama3.jpg',
      'img/stands/gama/gama4.jpg',
      'img/stands/gama/gama5.jpg',
      'img/stands/gama/gama6.jpg',
    ],
  },
  {
    name: 'Agimed',
    images: [
      'img/stands/agimed/agimed3.jpg',
      'img/stands/agimed/agimed2.jpg',
      'img/stands/agimed/agimed1.jpg',
      'img/stands/agimed/agimed4.jpg',
      'img/stands/agimed/agimed5.jpg',
    ],
  },
  {
    name: 'CGA',
    images: [
      'img/stands/cga/cga3.jpg',
      'img/stands/cga/cga1.jpg',
      'img/stands/cga/cga2.jpg',
      'img/stands/cga/cga4.jpg',
    ],
  },
  {
    name: 'P&G',
    images: [
      'img/stands/procter/procter2.jpg',
      'img/stands/procter/procter1.jpg',
      'img/stands/procter/procter3.jpg',
    ],
  },
  {
    name: 'Futura',
    images: [
      'img/stands/futura/futura4.jpg',
      'img/stands/futura/futura2.jpg',
      'img/stands/futura/futura3.jpg',
      'img/stands/futura/futura1.jpg',
    ],
  },
  {
    name: 'PRIORE Agropartes',
    images: ['img/stands/priore/priore2.jpg', 'img/stands/priore/priore1.jpg'],
  },
  {
    name: 'RHI MAGNESITA',
    images: ['img/stands/rhi/rhi1.jpg', 'img/stands/rhi/rhi2.jpg'],
  },
  {
    name: 'ZIMMER BIOMET',
    images: [
      'img/stands/zimmer/zimmer1.jpg',
      'img/stands/zimmer/zimmer2.jpg',
      'img/stands/zimmer/zimmer3.jpg',
    ],
  },
  {
    name: 'BIOPAS Laboratories',
    images: ['img/stands/biopas/biopas1.jpg', 'img/stands/biopas/biopas2.jpg'],
  },
  {
    name: 'ENGORMAX',
    images: [
      'img/stands/engormax/engormax1.jpg',
      'img/stands/engormax/engormax2.jpg',
    ],
  },
  {
    name: 'Aremat',
    images: [
      'img/stands/aremat/aremat4.jpg',
      'img/stands/aremat/aremat1.jpg',
      'img/stands/aremat/aremat2.jpg',
      'img/stands/aremat/aremat3.jpg',
    ],
  },
  {
    name: 'BURPLAZA',
    images: [
      'img/stands/burplaza/burplaza2.jpg',
      'img/stands/burplaza/burplaza1.jpg',
    ],
  },
  {
    name: 'CASASCO',
    images: [
      'img/stands/casasco/casasco2.jpg',
      'img/stands/casasco/casasco1.jpg',
      'img/stands/casasco/casasco3.jpg',
    ],
  },
  {
    name: 'CRAVERI',
    images: [
      'img/stands/craveri/craveri2.jpg',
      'img/stands/craveri/craveri1.jpg',
      'img/stands/craveri/craveri3.jpg',
      'img/stands/craveri/craveri4.jpg',
    ],
  },
  {
    name: 'Gador',
    images: ['img/stands/gador/gador2.jpg', 'img/stands/gador/gador1.jpg'],
  },
]

function createStandCard(empresa, index) {
  const card = document.createElement('div')
  card.classList.add('stand-card')

  card.innerHTML = `
    <img src="${empresa.images[0]}" alt="${
    empresa.name
  }" class="m-0 stand-card-image" data-bs-toggle="modal" data-bs-target="#standModal-${index}">
    <aside class="stand-card-info-mobile">
        <h3 class="stand-card-title">${empresa.name}</h3>
    </aside>
    <aside class="stand-card-info">
        <h3 class="stand-card-title p-2">${empresa.name}</h3>
    </aside>

    <!-- Modal -->
    <div class="modal fade" id="standModal-${index}" tabindex="-1" aria-labelledby="standModalLabel-${index}" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="standModalLabel-${index}">${
    empresa.name
  }</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ${createCarousel(empresa, index)}
          </div>
        </div>
      </div>
    </div>
  `

  return card
}

function createCarousel(empresa, index) {
  const carouselItems = empresa.images
    .map(
      (image, i) => `
    <div class="carousel-item ${i === 0 ? 'active' : ''}">
      <img src="${image}" class="d-block w-100" alt="${empresa.name} - Image ${
        i + 1
      }">
    </div>
  `
    )
    .join('')

  return `
    <div id="standCarousel-${index}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="false">
      <div class="carousel-inner">
        ${carouselItems}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#standCarousel-${index}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#standCarousel-${index}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `
}

function loadStands() {
  const standsContainer = document.getElementById('stands')
  empresas.forEach((empresa, index) => {
    standsContainer.appendChild(createStandCard(empresa, index))
  })
}

document.addEventListener('DOMContentLoaded', function () {
  loadStands()
})
