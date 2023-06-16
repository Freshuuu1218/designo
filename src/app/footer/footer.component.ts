import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faFacebookSquare,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}
  url: string = '';
  ngOnInit(): void {
    this.url = this.router.url;
  }
  screen: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screen = event.target.innerWidth;
  }
  facebook = faFacebookSquare;
  youtube = faYoutube;
  twitter = faTwitter;
  pinterest = faPinterest;
  instagram = faInstagram;
}
