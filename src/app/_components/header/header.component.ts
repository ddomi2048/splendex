import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }


  url: string = ''

  ngOnInit(): void {
      this.display();
  }

  display() {
    setTimeout(() => {
      this.url = this.route.url;
    }, 10);
    if (this.url !== '/home') {
      return true;
    } else {
      return false;
    }
  }

}
