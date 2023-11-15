const $buttons = document.querySelectorAll('.js-btn')
$image = document.querySelector('.js-image')

$buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const image = e.target.dataset.image,
        sound = e.target.dataset.sound,
        audio = new Audio(sound)

        audio.play()
        $image.setAttribute('src', image)
    }
})