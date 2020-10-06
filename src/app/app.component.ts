import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Black-Bough-Deparmental-Store';

  constructor() { }

  ngOnInit(): void {
    this.loadScript('assets/js/jquery-3.3.1.min.js');
    this.loadScript('assets/js/jquery-ui.min.js');
    this.loadScript('assets/js/jquery.countdown.min.js');
    this.loadScript('assets/js/jquery.nice-select.min.js');
    this.loadScript('assets/js/jquery.zoom.min.js');
    this.loadScript('assets/js/jquery.dd.min.js');
    this.loadScript('assets/js/jquery.slicknav.js');
    this.loadScript('assets/js/owl.carousel.min.js');
    this.loadScript('assets/js/main.js');
  }


  public loadScript(url) {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }
}
