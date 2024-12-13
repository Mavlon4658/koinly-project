const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const pModals = ['.policy-modal', '.terms-service', '.reset-password', '.add-wallet', '.wallet-modal'];

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
    }

    if (mClose) {
        mClose.onclick = () => closeModal();
        mBg.onclick = () => closeModal();
    }
})

const walletModalOpen = document.querySelectorAll('.add-wallet .add-wallet__list a');
const walletModal = document.querySelector('.wallet-modal');
const addWalletModal = document.querySelector('.add-wallet');

if (walletModalOpen.length) {
    walletModalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            addWalletModal.querySelector('.p-modal__close').onclick();
            walletModal.classList.add('active');
        }
    })
}

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
    },
    walletNotFound: () => {
        let el = document.querySelector('.wallet-notfound__alert');
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
    walletKey: () => {
        let el = document.querySelector('.key__alert');
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

let walletSearchBtn = document.querySelector('.wallet__search_btn');

if (walletSearchBtn) {
    walletSearchBtn.onclick = () => {
        alert.walletNotFound();
    }
}

const walletModalSwp = new Swiper('.wallet-modal .swiper', {
    slidesPerView: 1,
    effect: 'fade',
})

const walletPhraseList = document.querySelectorAll('.wallet-modal__phrase_list li');
const walletPhraseBtns = document.querySelectorAll('.wallet-modal__phrase_btns li input');

if (walletPhraseBtns.length) {
    walletPhraseBtns.forEach((el, elID) => {
        if (el.checked && elID == 0) {
            walletPhraseList.forEach((list, listID) => {
                if (listID >= 12) {
                    list.classList.add('hidden');
                } else {
                    list.classList.remove('hidden');
                }
            })
        }
        if (el.checked && elID == 1) {
            walletPhraseList.forEach(list => {
                list.classList.remove('hidden');
            })
        }

        el.oninput = () => {
            if (elID == 0) {
                walletPhraseList.forEach((list, listID) => {
                    if (listID >= 12) {
                        list.classList.add('hidden');
                    } else {
                        list.classList.remove('hidden');
                    }
                })
            }
            if (elID == 1) {
                walletPhraseList.forEach(list => {
                    list.classList.remove('hidden');
                })
            }
        }
    })
}

const walletDropdown = document.querySelector('.wallet-modal__key .dropdown');
const walletDropdownBtn = document.querySelector('.wallet-modal__key .dropdown_btn');
const walletDropdownList = document.querySelector('.wallet-modal__key .dropdown_list');
const walletDropdownListItem = document.querySelectorAll('.wallet-modal__key .dropdown_list__btn');
const walletKeyInp = document.querySelector('.wallet-modal__key .form_inp');
const walletKeyBtn = document.querySelector('.wallet-modal__key .btn-blue');

if (walletDropdown) {
    walletDropdownBtn.onclick = () => {
        walletDropdownList.style.maxHeight = walletDropdownList.style.maxHeight ? null : walletDropdownList.scrollHeight + 'px';
    }
    
    walletDropdownListItem.forEach(el => {
        el.onclick = () => {
            walletDropdownBtn.classList.add('selected');
            walletDropdownBtn.querySelector('.dropdown_btn__value img').setAttribute('src', el.querySelector('img').getAttribute('src'));
            walletDropdownBtn.querySelector('.dropdown_btn__value p').textContent = el.querySelector('p').textContent;
            walletDropdownList.style.maxHeight = null;
            walletKeyInp.classList.add('active');
        }
    })

    walletKeyBtn.onclick = () => {
        alert.walletKey();
    }
}

const phraseBtn = document.querySelector('.wallet-modal .phrase-btn');
const keyBtn = document.querySelector('.wallet-modal .key-btn');

if (phraseBtn) {
    phraseBtn.onclick = () => {
        walletModalSwp.slideTo(1);
    }
}

if (keyBtn) {
    keyBtn.onclick = () => {
        walletModalSwp.slideTo(2);
    }
}