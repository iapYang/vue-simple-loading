import 'babel-polyfill';

import '../style/demo.scss';

import PictureLoader from './plugin/pictureLoader';
import Platform from './plugin/platform';
import Slider from './plugin/slider';
import Util from './plugin/util';
import EntranceListener from './plugin/entranceListener';

// import IScroll from 'iscroll';

const body = document.body;
let slider;


PictureLoader.timeout = 1000 * 60;

function generateStruct() {
    window.slider = slider = new Slider({
        container: document.getElementById('slider'), // dom
        prevBtn: document.getElementById('btn-prev'), // dom
        nextBtn: document.getElementById('btn-next'), // dom
        indicator: document.getElementById('indicator'), // dom
        // loop: false,
        dragable: false,
        currentIndex: 0,
        speed: 800, // ms
        interactiveSpeed: 300, // ms
        interactiveDistance: 100, // px
        ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)', // string
        onChangeStart: (i, next) => {
            // console.log('==========', i, next);
        },
        onChangeEnd: (i, prev) => {
            console.log('==========', i, prev);
        },
    });

    Array.from(document.getElementsByClassName('scroll-wrapper')).forEach((el, i) => {
        // window.iscroll = new IScroll(el, {
        //
        // });
    });
}

function registerEvents() {
    body.addEventListener('touchmove', () => {
        event.preventDefault();
    });

    document.getElementById('btn-go').addEventListener('click', () => {
        const value = document.getElementById('page').value;

        slider.slideTo(value);
    }, false);

    document.getElementById('prepend-slide').addEventListener('click', () => {
        const dom = Util.parseDom('<li></li>');

        slider.prependSlide(dom);
    }, false);

    document.getElementById('append-slide').addEventListener('click', () => {
        const dom = Util.parseDom('<li></li>');

        slider.appendSlide(dom);
    }, false);

    document.getElementById('remove-slide').addEventListener('click', () => {
        const value = document.getElementById('page').value;

        slider.removeSlide(value);
    });

    Array.from(document.getElementById('slider').querySelectorAll('button')).forEach((el, i) => {
        el.addEventListener('click', e => {
            if (slider.updating) return;

            alert(i);
        });
    });


    new EntranceListener({
        el: document.getElementById('dv2'),
        offset: 500,
        enter() {
            this.classList.add('active');
        },
        leave() {
            this.classList.remove('active');
        },
    });

    new EntranceListener({
        el: document.getElementById('dv4'),
        offset: 500,
        enter() {
            this.classList.add('active');
        },
        leave() {
            this.classList.remove('active');
        },
    });
}

function init() {
    generateStruct();
    registerEvents();

    new PictureLoader({
        className: 'preload',
    }).load({
        done: (image, count, total) => {
            // console.log('==========', image, (count / total * 100) + '%');

            if (Platform.isIE) {
                setTimeout(() => {
                    image.removeAttribute('width', '');
                    image.removeAttribute('height', '');
                }, 10);
            }
        },
        end: () => {
        },
    });
}


window.addEventListener('load', init, false);
