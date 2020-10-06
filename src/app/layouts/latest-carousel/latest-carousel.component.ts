import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-latest-carousel',
  templateUrl: './latest-carousel.component.html',
  styleUrls: ['./latest-carousel.component.scss']
})
export class LatestCarouselComponent implements OnInit {
  apiData: any;

  limit: number = 5; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ],
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 3,
      },
      900: {
        items: 4,
      }
    }
  }

  constructor(
    private readonly http: HttpClient,
  ) {}

  ngOnInit() {
    this.fetch()
  }


  fetch() {
    this.apiData = images;
    /* const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe(
      res => this.apiData = images,
      err => throwError(err)
    ) */
  }
}


const images = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "assets/images/5.png",
    "thumbnailUrl": "assets/images/5.png"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "assets/images/6.png",
    "thumbnailUrl": "assets/images/6.png"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "assets/images/7.png",
    "thumbnailUrl": "assets/images/7.png"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "assets/images/8.png",
    "thumbnailUrl": "assets/images/8.png"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "assets/images/33.jpg",
    "thumbnailUrl": "assets/images/33.jpg"
  }
];
