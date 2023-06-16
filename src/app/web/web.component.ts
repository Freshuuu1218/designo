import { Component, OnInit } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
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
      img: '/assets/web-design/desktop/imageExpress.jpg',
      name: 'express',
      description: 'A multi-carrier shipping website for ecommerce businesses',
    },
    {
      img: '/assets/web-design/desktop/imageTransfer.jpg',
      name: 'transfer',
      description:
        'Site for low-cost money transfers and sending money within seconds',
    },
    {
      img: '/assets/web-design/desktop/imagePhoton.jpg',
      name: 'photon',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
    },
    {
      img: '/assets/web-design/desktop/imageBuilder.jpg',
      name: 'builder',
      description:
        'Connects users with local contractors based on their location',
    },
    {
      img: '/assets/web-design/desktop/imageBlogr.jpg',
      name: 'blogr',
      description:
        'Blogr is a platform for creating an online blog or publication',
    },
    {
      img: '/assets/web-design/desktop/imageCamp.jpg',
      name: 'camp',
      description:
        'Get expert training in coding, data, design, and digital marketing',
    },
  ];
}
