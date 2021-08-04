import { Injectable } from '@angular/core';
import { Card } from 'src/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  imgUrl: string[] = [
    "../../assets/img/angular.png",
    "../../assets/img/d3.png",
    "../../assets/img/jenkins.png",
    "../../assets/img/postcss.png",
    "../../assets/img/react.png",
    "../../assets/img/redux.png",
    "../../assets/img/sass.png",
    "../../assets/img/splendex.png",
    "../../assets/img/ts.png",
    "../../assets/img/webpack.png"
  ]
  
  cards: Card[] = [];
  shuffled: Card[] = [];
  num: number = 0;

  generateCards(number: number) {
    this.cards = [];
    this.num = number;
    for (let i = 0; i < number; i++) {
      const cardData: Card = {
        imgSrc: this.imgUrl[i],
        state: 'default',
        id: 0
      };

      cardData.id = i * 2;
      this.cards.push({ ...cardData });
      cardData.id = i * 2 + 1;
      this.cards.push({ ...cardData });
    }
    
    this.shuffled = this.shuffle(this.cards);
    console.log(this.shuffled)
  }

  shuffle(arr: any[]): any[] {
    return arr.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

}
