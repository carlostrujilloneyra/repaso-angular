import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public emitNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  addCharacter(): void {
    if (this.character.name.length === 0) return;

    this.emitNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
