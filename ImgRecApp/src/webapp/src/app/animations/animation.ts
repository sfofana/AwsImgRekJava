import { keyframes, style } from "@angular/animations";

export const pulse = [
    style({transform: 'scale3d(1, 1, 1)', offset: 0}),
    style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
    style({transform: 'scale3d(1, 1, 1)', offset: 1})
]

export const fadeInLeft = [
    style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
    style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
]

export const fadeInRight = [
    style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
    style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
]

export const flipInY = [
    style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', offset: 0}),
    style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', offset: 0.4}),
    style({transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', offset: 0.6}),
    style({transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8}),
    style({transform: 'perspective(400px)', offset: 1})
]

export const heartBeat = [
    style({transform: 'scale(1)', offset: 0}),
    style({transform: 'scale(1.3)', offset: 0.14}),
    style({transform: 'scale(1)', offset: 0.28}),
    style({transform: 'scale(1.3)', offset: 0.42}),
    style({transform: 'scale(1)', offset: .70})
]

export const slideInUp = [
    style({transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0}),
    style({transform: 'translate3d(0, 0, 0)', offset: 1})
]

export const zoomIn = [
    style({opacity: 0, transform: 'scale3d(0, 0, 0)', offset: 0}),
    style({opacity: 1, offset: 1})
]

export const bounce = [
    style({transform: 'translate3d(0, 0, 0)', offset: .2}),
    style({transform: 'translate3d(0, -15px, 0) scaleY(1.1)', offset: .4}),
    style({transform: 'translate3d(0, -15px, 0) scaleY(1.1)', offset: .43}),
    style({transform: 'translate3d(0, 0, 0)', offset: .53}),
    style({transform: 'translate3d(0, -7px, 0) scaleY(1.05)', offset: .7}),
    style({transform: 'translate3d(0, 0, 0) scaleY(0.95)', offset: .8}),
    style({transform: 'translate3d(0, -4px, 0) scaleY(1.02)', offset: .9}),
]

export const shake = [
    style({transform: 'translate3d(-10px, 0, 0)', offset: .1}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .2}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .3}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .4}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .5}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .6}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .7}),
    style({transform: 'translate3d(10px, 0, 0)', offset: .8}),
    style({transform: 'translate3d(-10px, 0, 0)', offset: .9})
]
