import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>
  <button type="button" (click)="increaseBy(1)">+1</button>
  <button type="button" (click)="resetCounter()">reset</button>
  <button type="button" (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  title = 'Contador Personalizado';
  counter: number = 10;


  increaseBy(numeroIncrementar: number): void {
    this.counter += numeroIncrementar;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  constructor() { }


}
