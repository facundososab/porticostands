const clientLogos = [
  { src: 'img/logo_agimed.png', alt: 'Agimed' },
  { src: 'img/logo_gama.svg', alt: 'Gama' },
  { src: 'img/logo_costan.svg', alt: 'Costan' },
  { src: 'img/logo_agrosud.png', alt: 'Agrosud' },
  { src: 'img/logo_unilever.webp', alt: 'Unilever' },
  { src: 'img/logo_p&g.svg', alt: 'Procter & Gamble' },
  { src: 'img/logo_johnson&johnson.svg', alt: 'Johnson & Johnson' },
  { src: 'img/logo_lasegunda.svg', alt: 'La Segunda Seguros' },
  { src: 'img/logo_lacumbre.png', alt: 'La Cumbre' },
  { src: 'img/logo_casasco.png', alt: 'Casasco' },
  { src: 'img/logo_gsk.png', alt: 'GSK' },
  { src: 'img/logo_craveri.png', alt: 'Craveri' },
]

function createCarouselItem(client) {
  const item = document.createElement('img')
  item.src = client.src
  item.alt = client.alt
  return item
}

function loadCarouselItems() {
  const carousel = document.querySelector('.logos')
  for (let i = 0; i < 2; i++) {
    const carouselInner = document.createElement('div')
    carouselInner.classList.add('logos-clientes')
    carousel.appendChild(carouselInner)
    clientLogos.forEach(function (client) {
      carouselInner.appendChild(createCarouselItem(client))
    })
  }
}

function sendEmails(formData) {
  // Enviar el correo a mi
  const sendToYou = emailjs.send('service_604rk54', 'template_hsaguau', {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'facundososadev@gmail.com',
    subject: 'Mensaje desde portfolio',
  })

  // Enviar el correo al remitente (informándole que su mensaje fue enviado)
  const sendToSender = emailjs.send('service_604rk54', 'template_j2wgpsq', {
    from_name: formData.name,
    from_email: 'facundososadev@gmail.com',
    to_email: formData.email, // El correo del remitente
    subject: '¡Mensaje recibido!', // Asunto del correo
    message: formData.message, // Mensaje que se le enviará al remitente
  })

  return Promise.all([sendToYou, sendToSender])
}

function validateForm() {
  const form = document.getElementById('contact-form')
  const messageTextarea = document.getElementById('message')
  const charCount = document.getElementById('charCount')
  const formSuccess = document.getElementById('form-success')
  const formError = document.getElementById('form-error')
  const formSubmitBtn = document.getElementById('submit-btn')
  const loader = document.getElementById('loader')

  messageTextarea.addEventListener('input', function () {
    const currentLength = this.value.length
    charCount.textContent = `${currentLength} / 255`
  })

  form.addEventListener(
    'submit',
    function (event) {
      event.preventDefault()
      event.stopPropagation()
      if (form.checkValidity() && messageTextarea.value.length <= 255) {
        formSubmitBtn.style.display = 'none'
        loader.style.display = 'block'
        const formData = {
          name: form.querySelector('input[id="name"]').value,
          email: form.querySelector('input[id="email"]').value,
          message: messageTextarea.value,
        }

        // Send the emails
        sendEmails(formData)
          .then(function (response) {
            loader.style.display = 'none'
            form.reset()
            charCount.textContent = '0 / 255'
            form.classList.remove('was-validated')
            formSuccess.style.display = 'block'
            formError.style.display = 'none'
            setTimeout(() => {
              formSuccess.style.display = 'none'
              formSubmitBtn.style.display = 'block'
            }, 3000)
          })
          .catch(function (error) {
            loader.style.display = 'none'
            formError.style.display = 'block'
            formSuccess.style.display = 'none'
            setTimeout(() => {
              formError.style.display = 'none'
              formSubmitBtn.style.display = 'block'
            }, 3000)
          })
      } else {
        if (messageTextarea.value.length > 255) {
          messageTextarea.setCustomValidity(
            'Message must not exceed 255 characters'
          )
        } else {
          messageTextarea.setCustomValidity('')
        }
      }

      form.classList.add('was-validated')
    },
    false
  )
}

document.addEventListener('DOMContentLoaded', () => {
  loadCarouselItems()
  validateForm()
})

//Funcionalidad de mostrar y ocultar el menu
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link')
  const navbarCollapse = document.getElementById('navbarNav')

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      // Cierra el menú
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true,
        })
        bsCollapse.hide()
      }

      // Marca la sección activa
      navLinks.forEach((nav) => nav.classList.remove('active'))
      this.classList.add('active')
    })
  })
})
