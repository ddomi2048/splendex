import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public gameService: GameService) { }

  selectedNum: string = '';
  num: number = parseInt(this.selectedNum);


  ngOnInit(): void {
    this.selectedNum = '0';
  } 

  start() {
    let num: number = parseInt(this.selectedNum);
    this.gameService.generateCards(num);
  }
}
