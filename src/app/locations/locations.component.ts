import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  // window screen size
  screen: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen = event.target.innerWidth;
  }

  locations = [
    {
      imgDesktop: '/assets/locations/desktop/imageMapCanada.png',
      imgTablet: '/assets/locations/tablet/imageMapCanada.png',
      country: 'Canada',
      address: {
        name: 'Designo Central Office',
        street: '3886 Wellington Street',
        city: 'Toronto, Ontario M9C 3J5',
      },
      phone: '+1 253-863-8967',
      mail: 'contact@designo.co',
    },
    {
      imgDesktop: '/assets/locations/desktop/imageMapAustralia.png',
      imgTablet: '/assets/locations/tablet/imageMapAustralia.png',
      country: 'Australia',
      address: {
        name: 'Designo AU Office',
        street: '19 Balonne Street',
        city: 'New South Wales 2443',
      },
      phone: '(02) 6720 9092',
      mail: 'contact@designo.au',
    },
    {
      imgDesktop: '/assets/locations/desktop/imageMapUnitedKingdom.png',
      imgTablet: '/assets/locations/tablet/imageMapUk.png',
      country: 'United Kingdom',
      address: {
        name: 'Designo UK Office',
        street: '13 Colorado Way',
        city: 'Rhyd-y-fro SA8 9GA',
      },
      phone: '078 3115 1400',
      mail: 'contact@designo.uk',
    },
  ];
}
