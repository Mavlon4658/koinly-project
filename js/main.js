const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const pModals = ['.policy-modal'];

pModals.forEach(cls => {
    const m = document.querySelector(cls);
    const mBg = document.querySelector(`${cls} .p-modal__bg`);
    const mClose = document.querySelector(`${cls} .p-modal__close`);
    const mOpen = document.querySelectorAll(`${cls}__open`);

    const closeModal = () => {
        m.classList.remove('active');
        m.classList.add('end-active');
        setTimeout(() => {
            m.classList.remove('end-active');
            bodyVisible();
        }, 400);
    }

    if (mOpen.length) {
        mOpen.forEach(el => {
            el.onclick = e => {
                e.preventDefault();
                m.classList.add('active');
                bodyHidden();
            }
        })

        mClose.onclick = () => closeModal();
        mBg.onclick = () => closeModal();
    }
})