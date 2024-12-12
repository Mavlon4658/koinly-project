const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const pModals = ['.policy-modal', '.terms-service', '.reset-password'];

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

const alert = {
    passwordChange: () => {
        let el = document.querySelector('.password-change__alert');
        if (el && !el.classList.contains('active')) {
            el.classList.add('active');
            setTimeout(() => {
                el.classList.remove('active');
                el.classList.add('end-active');
                setTimeout(() => {
                    el.classList.remove('end-active');
                }, 400);
            }, 3000);
        }
    },
    passwordCopy: () => {
        let el = document.querySelector('.password-copy__alert');
        if (el && !el.classList.contains('active')) {
            el.classList.add('active');
            setTimeout(() => {
                el.classList.remove('active');
                el.classList.add('end-active');
                setTimeout(() => {
                    el.classList.remove('end-active');
                }, 400);
            }, 3000);
        }
    }
};

const resetPasswordBtn = document.querySelector('.reset-passowrd__btn');
const passwordGenerate = document.querySelector('.password-generate');
const copyPasswordBtn = document.querySelector('.password-copy__btn');
const backLogin = document.querySelector('.back-login');

if (resetPasswordBtn) {
    resetPasswordBtn.onclick = e => {
        e.preventDefault();
        alert.passwordChange();
        passwordGenerate.classList.add('active');
    }
}

if (copyPasswordBtn) {
    copyPasswordBtn.onclick = e => {
        e.preventDefault();
        alert.passwordCopy();
        const temp = document.createElement("input")
        temp.type = "text"
        temp.value = copyPasswordBtn.querySelector('span').textContent;

        document.body.appendChild(temp)
        temp.select()
        document.execCommand("Copy")
        document.body.removeChild(temp)
    }
}

if (backLogin) {
    backLogin.onclick = () => {
        document.querySelector('.reset-password .p-modal__close').onclick();
    }
}