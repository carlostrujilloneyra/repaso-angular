/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public emitDeleteCharacter: EventEmitter<string> = new EventEmitter();

  // public emitDeleteCharacter = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10,
    },
  ];

  handleDeleteCharacter(name: string): void {
    this.emitDeleteCharacter.emit(name);
  }
}
