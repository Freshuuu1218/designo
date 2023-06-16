import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  preventDefault(e: any) {
    e.preventDefault();
  }
  // window screen size
  screen: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen = event.target.innerWidth;
  }
  // mobile menu display
  display: boolean = false;
  displayMenu() {
    this.display = !this.display;
    if (this.display) {
      window.addEventListener('touchmove', this.preventDefault, false);
    } else {
      window.removeEventListener('touchmove', this.preventDefault, false);
    }
  }
  hideMenu() {
    this.display = false;
  }
}
