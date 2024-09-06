import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    setInterval( () => {
      const carouselElement = document.querySelector('#blog-carousel');
      if(carouselElement) {
        (window as any).$(`#blog-carousel`).carousel('next');
      }
    }, 20000)
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
