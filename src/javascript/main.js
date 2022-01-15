
async function startTyping() {
    var typed = new Typed('.typing', {
        strings: [
            'Hey I am Prateek Singh.',
            'I am a student.',
            'I am a Frontend Web Developer.',
            'I am Currently looking for an intership.',
            'I am a Full Stack Web Developer.'
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

function animateHeading(el) {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 50%",
            markers: true,
            scrub: true,
            onEnter: () => {
                console.log('enter')
            },
            toggleActions: "restart pause reverse none"
        },
        fontSize: '1.65rem',
        color: '#7fff00',
    });
}


function animateIcon(el) {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 40%",
            markers: true,
            scrub: true,
            onEnter: () => {
                console.log('enter')
            },
            toggleActions: "restart pause reverse none"
        },
        rotate: '60deg',
    });
}

gsap.to('section.about img', {
    scrollTrigger: {
        trigger: 'section.about img',
        start: "top 10%",
        markers: true,
        scrub: true,
        onEnter: () => {
            console.log('enter')
        },
        toggleActions: "restart pause reverse none"
    },
    filter: 'blur(8px)',
});

(document.querySelectorAll(".headline")).forEach(element => {
    animateHeading(element)
});

(document.querySelectorAll(".fab")).forEach(element => {
    animateIcon(element)
});


async function scramble() {

    let bfl = baffle('.name', {
        characters: 'abcdefghijklmnopqrstuvwxyz',
        speed: 60
    });

    bfl.start();
    await sleep(4000);
    bfl.reveal(3000);
}

scramble();
startTyping();