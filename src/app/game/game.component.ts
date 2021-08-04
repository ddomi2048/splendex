import { Component, OnInit } from '@angular/core';
import { Card } from 'src/card';
import { GameService } from '../_services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public gameService: GameService) { }

  cards: Card[] = [];
  flippedCards: Card[] = [];
  matched: number = 0;
  tries: number = 0;

  ngOnInit(): void {

  }

  flip(id: number) {
    let info = this.gameService.cards[id];
    console.log(info);


    if (info.state === 'default' && this.flippedCards.length < 2) {
      info.state = 'flipped';
      this.flippedCards.push(info);
      console.log(this.flippedCards)

    } else if (info.state === 'flipped') {
      info.state = 'default';
      this.flippedCards.pop();
    }

    if (this.flippedCards.length === 2) {
      this.check();
    }
  }

  check() {
    setTimeout(() => {
      if (this.flippedCards[0].imgSrc === this.flippedCards[1].imgSrc) {
        this.flippedCards[0].state = 'matched';
        this.flippedCards[1].state = 'matched';
        this.matched++;
        this.flippedCards = [];
      } else {
        this.flippedCards[0].state = 'default';
        this.flippedCards[1].state = 'default';
        this.flippedCards = [];
      }

      this.tries++;

      if (this.matched === this.gameService.num) {
        alert('Congratulations! You won!');
        this.tries = 0;
        this.matched = 0;
      }
    }, 1000);
  }

}
