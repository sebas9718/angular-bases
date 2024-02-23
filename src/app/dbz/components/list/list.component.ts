import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  deleteCharacter( id?: string ): void {
    if( !id ) return;
    this.onDeleteCharacter.emit( id );
  }
}
