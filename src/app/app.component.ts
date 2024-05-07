import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Hola a todos';

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
