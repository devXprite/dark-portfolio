AOS.init();

Waves.init();
Waves.attach('button, .experience .container div', ['waves-light']);

const trigger = new ScrollTrigger();
// trigger.add('[data-trigger]');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scramble() {

    let bfl = baffle('.name', {
        characters: 'abcdefghijklmnopqrstuvwxyz',
        speed: 60
    });

    bfl.start();
    await sleep(4000);
    bfl.reveal(3000);
}

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

scramble();
startTyping();