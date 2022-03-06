import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon-detail.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  @Input() selectedPokemon!: PokemonDetail | null;
  @Output() addToTeam: EventEmitter<PokemonDetail> =
    new EventEmitter<PokemonDetail>();

  addPokemonToTeam(pokemonToAdd: PokemonDetail): void {
    this.addToTeam.emit(pokemonToAdd);
  }
}
