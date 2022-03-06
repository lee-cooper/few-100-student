import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonDetail } from '../../models';

@Component({
  selector: 'app-pokemon-team-member',
  templateUrl: './pokemon-team-member.component.html',
  styleUrls: ['./pokemon-team-member.component.scss'],
})
export class PokemonTeamMemberComponent {
  @Input() pokemonTeamMember!: PokemonDetail | null;
  @Output() removeFromTeam: EventEmitter<PokemonDetail> =
    new EventEmitter<PokemonDetail>();

  removePokemonFromTeam(pokemonToRemove: PokemonDetail): void {
    this.removeFromTeam.emit(pokemonToRemove);
  }
}
