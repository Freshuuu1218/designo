import { Component } from '@angular/core';

@Component({
  selector: 'app-locations-mini',
  templateUrl: './locations-mini.component.html',
  styleUrls: ['./locations-mini.component.scss'],
})
export class LocationsMiniComponent {
  locations = [
    {
      name: 'canada',
      img: '/assets/shared/desktop/illustrationCanada.svg',
    },
    {
      name: 'australia',
      img: '/assets/shared/desktop/illustrationAustralia.svg',
    },
    {
      name: 'United kingdom',
      img: '/assets/shared/desktop/illustrationUnitedKingdom.svg',
    },
  ];
}
