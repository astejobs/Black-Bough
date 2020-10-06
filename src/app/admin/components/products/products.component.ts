import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
    //this.loadScript('assets/js/mdb.min.js');
    //this.loadScript('assets/js/popper.min.js');
  }


  /* public loadScript(url) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  } */

}
