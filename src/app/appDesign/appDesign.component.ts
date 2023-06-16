import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-design',
  templateUrl: './appDesign.component.html',
  styleUrls: ['./appDesign.component.scss'],
})
export class AppDesignComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  arrow = faChevronRight;
  designs = [
    {
      img: '/assets/app-design/desktop/imageAirfilter.jpg',
      name: 'airfilter',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
    },
    {
      img: '/assets/app-design/desktop/imageEyecam.jpg',
      name: 'eyecam',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
    },
    {
      img: '/assets/app-design/desktop/imageFaceit.jpg',
      name: 'Faceit',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
    },
    {
      img: '/assets/app-design/desktop/imageTodo.jpg',
      name: 'todo',
      description:
        'A todo app that features cloud sync with light and dark mode',
    },
    {
      img: '/assets/app-design/desktop/imageLoopstudios.jpg',
      name: 'loopstudios',
      description: 'A VR experience app made for Loopstudios',
    },
  ];
}
