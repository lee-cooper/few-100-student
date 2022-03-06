import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonList, PokemonListItem } from '../../models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  /*
    @Input()

    Decorator that marks a class field as an input property and supplies configuration metadata. 
    The input property is bound to a DOM property in the template. During change detection, 
    Angular automatically updates the data property with the DOM property's value.

    In a nutshell, this is what allows a parent component to property bind to a child component property.

    See @Input() - https://angular.io/api/core/Input
  */
  @Input() pokemonList!: PokemonList | null;

  /*
    @Output()

    Decorator that marks a class field as an output property and supplies configuration metadata. 
    The DOM property bound to the output property is automatically updated during change detection.

    In a nutshell, we use EventEmitters to allow the child to communicate with the parent component when a certain
    event happens. 

    See @Output() - https://angular.io/api/core/Output
    See Event Emitters - https://angular.io/guide/event-binding#custom-events-with-eventemitter
  */

  @Output() emitSelectedPokemon: EventEmitter<PokemonListItem> =
    new EventEmitter();

  selectedPokemon!: PokemonListItem;

  // This is the function called from the template following the (click) event
  selectPokemon(pokemonListItem: PokemonListItem): void {
    this.selectedPokemon = pokemonListItem;
    this.emitSelectedPokemon.emit(pokemonListItem);
  }
}
