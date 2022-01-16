async function startTyping() {
    var typed = new Typed('.typing', {
        strings: [
            'Hey I am Prateek Singh.',
            'I am a student.',
            'I am a UI/UX Designer.',
            'I am a Web Developer.',
            'I am a Grapics Designer.'
        ],
        smartBackspace: true,
        loop: true,
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 3000,
        startDelay: 1000,
    });

}

AOS.init();

Waves.init();
Waves.attach('button, .experience .container div', ['waves-light']);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function testAnimation(el) {
    $(el).textillate({
        loop: false,
        in: {
            effect: "flash"
        }
    });
}

gsap.to('section.about img', {
    scrollTrigger: {
        trigger: 'section.about img',
        start: "top 10%",
        markers: false,
        scrub: true,
        toggleActions: "restart pause reverse none"
    },
    ease: 'none',
    scale: '0.1',
    x: '-50vh',
    rotate: '360deg'
});

gsap.to('.scrollbar', {
    scrollTrigger: {
        trigger: 'body',
        start: "top 0px",
        end: "bottom 100%",
        markers: false,
        scrub: true
    },
    ease: 'none',
    width: '100%'
});

(document.querySelectorAll(".headline")).forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 50%",
            markers: false,
            scrub: true,
            toggleActions: "restart pause reverse none"
        },
        fontSize: '1.65rem',
        color: '#7fff00',
    });
});

(document.querySelectorAll(".container .fab")).forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 50%",
            markers: false,
            scrub: true,
            toggleActions: "restart pause reverse none"
        },
        rotate: '60deg'
    });
});

gsap.to('#particles > div > a > i', {
    scrollTrigger: {
        trigger: '#particles > div > a > i',
        start: "top 60%",
        markers: false,
        scrub: true,
        toggleActions: "restart pause reverse none"
    },
    opacity: 0
});

async function scramble() {

    let bfl = baffle('.name', {
        characters: 'abcdefghijklmnopqrstuvwxyz',
        speed: 60
    });

    bfl.start();
    await sleep(2000);
    bfl.reveal(3000);
}

scramble();
startTyping();