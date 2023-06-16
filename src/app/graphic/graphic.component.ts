import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent implements OnInit {
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
      img: '/assets/graphic-design/desktop/imageChange.jpg',
      name: 'Tim Brown',
      description:
        'A book cover designed for Tim Brown’s new release, ‘Change’',
    },
    {
      img: '/assets/graphic-design/desktop/imageBoxedWater.jpg',
      name: 'boxed water',
      description: 'A simple packaging concept made for Boxed Water',
    },
    {
      img: '/assets/graphic-design/desktop/imageScience.jpg',
      name: 'Science!',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
    },
  ];
}
