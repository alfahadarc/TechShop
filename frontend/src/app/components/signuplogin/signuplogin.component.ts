import { Component, OnInit } from '@angular/core';
import { Container, ISourceOptions, Main } from 'tsparticles';

@Component({
  selector: 'app-signuplogin',
  templateUrl: './signuplogin.component.html',
  styleUrls: ['./signuplogin.component.css'],
})
export class SignuploginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  id = 'tsparticles';
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: '#ecfafc',
      },
      opacity: 0.6,
    },
    backgroundMask: {
      composite: 'destination-out',
      cover: {
        color: '#fff',
        opacity: 1,
      },
      enable: false,
    },
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    duration: 0,
    fps_limit: 60,
    interactivity: {
      detect_on: 'window',
      events: {
        onclick: { enable: true, mode: 'push' },
        onhover: {
          enable: true,
          mode: 'repulse',
          parallax: { enable: false, force: 2, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        attract: {
          distance: 200,
          duration: 0.4,
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
      },
    },
    particles: {
      color: { value: '#cccccc' },
      line_linked: {
        color: '#cccccc',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: 'none',
        enable: true,
        out_mode: 'out',
        random: false,
        speed: 2,
        straight: false,
      },
      number: { density: { enable: true, value_area: 800 }, value: 80 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5,
      },
      shape: {
        character: {
          fill: false,
          font: 'Verdana',
          style: '',
          value: '*',
          weight: '400',
        },
        image: {
          height: 100,
          replace_color: true,
          src: 'images/github.svg',
          width: 100,
        },
        polygon: { nb_sides: 5 },
        stroke: { color: '#000000', width: 0 },
        type: 'circle',
      },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5,
      },
    },
    polygon: {
      draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      url: '',
    },
    retina_detect: true,
  };

  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // }

  // particlesInit(main: Main): void {
  //   console.log(main);

  //   // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  // }
}
