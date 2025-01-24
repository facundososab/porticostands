const empresas = [
  {
    name: 'COSTAN Epta',
    images: [
      'img/stands/costan/costan1.JPG',
      'img/stands/costan/costan2.JPG',
      'img/stands/costan/costan3.JPG',
      'img/stands/costan/costan4.jpg',
    ],
  },
  {
    name: 'DPM',
    images: [
      'img/stands/dpm/dpm1.JPG',
      'img/stands/dpm/dpm2.JPG',
      'img/stands/dpm/dpm3.JPG',
      'img/stands/dpm/dpm4.JPG',
      'img/stands/dpm/dpm5.JPG',
    ],
  },
  {
    name: 'MSR',
    images: [
      'img/stands/msr/msr1.JPG',
      'img/stands/msr/msr2.JPG',
      'img/stands/msr/msr3.JPG',
    ],
  },
  {
    name: 'La cumbre',
    images: [
      'img/stands/lacumbre/lacumbre1.JPG',
      'img/stands/lacumbre/lacumbre2.JPG',
      'img/stands/lacumbre/lacumbre3.JPG',
      'img/stands/lacumbre/lacumbre4.JPG',
    ],
  },
  {
    name: 'GAMA Italy',
    images: [
      'img/stands/gama/gama1.JPG',
      'img/stands/gama/gama2.JPG',
      'img/stands/gama/gama3.JPG',
      'img/stands/gama/gama4.JPG',
      'img/stands/gama/gama5.JPG',
      'img/stands/gama/gama6.JPG',
    ],
  },
  {
    name: 'Agimed',
    images: [
      'img/stands/agimed/agimed3.JPG',
      'img/stands/agimed/agimed2.JPG',
      'img/stands/agimed/agimed1.JPG',
      'img/stands/agimed/agimed4.JPG',
      'img/stands/agimed/agimed5.JPG',
    ],
  },
  {
    name: 'CGA',
    images: [
      'img/stands/cga/cga3.JPG',
      'img/stands/cga/cga1.JPG',
      'img/stands/cga/cga2.JPG',
      'img/stands/cga/cga4.JPG',
    ],
  },
  {
    name: 'P&G',
    images: [
      'img/stands/procter/procter2.JPG',
      'img/stands/procter/procter1.JPG',
      'img/stands/procter/procter3.JPG',
    ],
  },
  {
    name: 'Futura',
    images: [
      'img/stands/futura/futura4.JPG',
      'img/stands/futura/futura2.JPG',
      'img/stands/futura/futura3.JPG',
      'img/stands/futura/futura1.JPG',
    ],
  },
  {
    name: 'PRIORE Agropartes',
    images: ['img/stands/priore/priore2.JPG', 'img/stands/priore/priore1.JPG'],
  },
  {
    name: 'RHI MAGNESITA',
    images: ['img/stands/rhi/rhi1.JPG', 'img/stands/rhi/rhi2.JPG'],
  },
  {
    name: 'ZIMMER BIOMET',
    images: [
      'img/stands/zimmer/zimmer1.JPG',
      'img/stands/zimmer/zimmer2.JPG',
      'img/stands/zimmer/zimmer3.JPG',
    ],
  },
  {
    name: 'BIOPAS Laboratories',
    images: ['img/stands/biopas/biopas1.JPG', 'img/stands/biopas/biopas2.JPG'],
  },
  {
    name: 'ENGORMAX',
    images: [
      'img/stands/engormax/engormax1.JPG',
      'img/stands/engormax/engormax2.JPG',
    ],
  },
  {
    name: 'Aremat',
    images: [
      'img/stands/aremat/aremat4.JPG',
      'img/stands/aremat/aremat1.JPG',
      'img/stands/aremat/aremat2.JPG',
      'img/stands/aremat/aremat3.JPG',
    ],
  },
  {
    name: 'BURPLAZA',
    images: [
      'img/stands/burplaza/burplaza2.JPG',
      'img/stands/burplaza/burplaza1.JPG',
    ],
  },
  {
    name: 'CASASCO',
    images: [
      'img/stands/casasco/casasco2.JPG',
      'img/stands/casasco/casasco1.JPG',
      'img/stands/casasco/casasco3.JPG',
    ],
  },
  {
    name: 'CRAVERI',
    images: [
      'img/stands/craveri/craveri2.JPG',
      'img/stands/craveri/craveri1.JPG',
      'img/stands/craveri/craveri3.JPG',
      'img/stands/craveri/craveri4.JPG',
    ],
  },
  {
    name: 'Gador',
    images: ['img/stands/gador/gador2.JPG', 'img/stands/gador/gador1.JPG'],
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
