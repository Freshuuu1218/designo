import { Component } from '@angular/core';

@Component({
  selector: 'app-home-extras',
  templateUrl: './home-extras.component.html',
  styleUrls: ['./home-extras.component.scss'],
})
export class HomeExtrasComponent {
  extras = [
    {
      img: '/assets/home/desktop/illustrationPassionate.svg',
      name: 'passionate',
      text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
      img: '/assets/home/desktop/illustrationResourceful.svg',
      name: 'resourceful',
      text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    },
    {
      img: '/assets/home/desktop/illustrationFriendly.svg',
      name: 'friendly',
      text: 'Each We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    },
  ];
}
