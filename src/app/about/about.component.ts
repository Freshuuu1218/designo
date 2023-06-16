import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  screen: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen = event.target.innerWidth;
  }
}
