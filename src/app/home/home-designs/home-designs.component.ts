import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-designs',
  templateUrl: './home-designs.component.html',
  styleUrls: ['./home-designs.component.scss'],
})
export class HomeDesignsComponent {
  arrow = faChevronRight;
  designs = [
    {
      name: 'web design',
      path: 'web-design',
    },
    {
      name: 'app design',
      path: 'app-design',
    },
    {
      name: 'graphic design',
      path: 'graphic-design',
    },
  ];
}
