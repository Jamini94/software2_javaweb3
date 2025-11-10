'use strict';

const trigger = document.getElementById('trigger');
const targetImg = document.getElementById('target');

const originalSrc = targetImg.src;

trigger.addEventListener('mouseover', () => {
    targetImg.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', () => {
    targetImg.src = originalSrc;
});
