import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 45;

  changeNameHero(): void {
    this.name = 'spiderman';
  }

  changeAgeHero(): void {
    this.age = 25;
  }

  // Propiedad:
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Método:
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
}
