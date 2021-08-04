import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, public gameService: GameService) { }


  url: string = '';
  selectedNum: string = '';
  num: number = parseInt(this.selectedNum);

  ngOnInit(): void {
      this.display();
      this.selectedNum = '0';
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

  start() {
    let num: number = parseInt(this.selectedNum);
    this.gameService.generateCards(num);
  }
}
