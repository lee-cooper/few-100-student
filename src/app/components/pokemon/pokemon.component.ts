import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonList, PokemonListItem } from './models';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  // Observables push multiple values over time when subscribed to
  // - See Observables --> https://rxjs.dev/guide/observable
  pokemonList$!: Observable<PokemonList>;
  pokemonDetail$!: Observable<PokemonDetail>;

  currentPokemonTeam: PokemonDetail[] = [];

  // Pokemon service is injected into the component via dependency injection.
  // - See Dependency Injection in Angular --> https://angular.io/guide/dependency-injection
  constructor(private pokemonService: PokemonService) {}

  // Angular Lifecycle Hook that is called after Angular has initialized all data bound properties
  // - See NgOnInit docs --> https://angular.io/api/core/OnInit
  // - See Angular Lifecycle Hooks --> https://angular.io/guide/lifecycle-hooks
  ngOnInit(): void {
    this.requestPokemonList();
  }

  requestPokemonList(): void {
    // Pokemon service returns an observable of Pokemon List from the Poke API
    // and assigns it to the Observable on this component. That value is then passed down
    // to the child component
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

  // Called by the event emitter, requests pokemon detail data following
  // after receiving an event emitted from the child component 'pokemon-list'
  requestPokemonDetail(pokemonListItem: PokemonListItem): void {
    this.pokemonDetail$ = this.pokemonService.getPokemonDetail(
      pokemonListItem.url
    );
  }

  addPokemonToTeam(pokemonToAdd: PokemonDetail): void {
    if (this.currentPokemonTeam.length !== 6) {
      this.currentPokemonTeam = [...this.currentPokemonTeam, pokemonToAdd];
    }
  }

  removePokemonFromTeam(pokemonToRemove: PokemonDetail): void {
    const indexToRemove = this.currentPokemonTeam.indexOf(pokemonToRemove, 0);
    this.currentPokemonTeam.splice(indexToRemove, 1);
  }
}
