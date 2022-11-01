const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter')
                animatedScrollObserver.unobserve(entry.target)
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