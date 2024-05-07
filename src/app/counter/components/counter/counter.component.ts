import { Component } from '@angular/core';

// Este decorador hace que mi clase Counter se transforme en un componente
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public counter: number = 10;

  handleIncrement(): void {
    this.counter += 1;
  }

  handleResetCounter(): void {
    this.counter = 10;
  }

  handleDecrement(): void {
    this.counter -= 1;
  }

  constructor() {}
}
