const animatedScrollObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter')
            }
            else {
                entry.target.classList.remove('enter')
            }
        })
    }
)

export default {
    bind(el) {
        const clientWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if(clientWidth <= 500) {
            el.classList.add('beforeEnter')
            animatedScrollObserver.observe(el)
        }
    }
}