import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetail } from '../../models';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.scss'],
})
export class PokemonTeamComponent {
  @Input() currentPokemonTeam: PokemonDetail[] = [];
  @Output() removeFromTeam: EventEmitter<PokemonDetail> =
    new EventEmitter<PokemonDetail>();

  removePokemonFromTeam(pokemonToRemove: PokemonDetail): void {
    this.removeFromTeam.emit(pokemonToRemove);
  }
}
