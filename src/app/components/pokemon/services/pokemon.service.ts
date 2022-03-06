import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonDetail, PokemonList } from '../models';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  rootUrl = 'https://pokeapi.co/api/v2';

  // HttpClient service is injected into the component via dependency injection.
  // - See Dependency Injection in Angular --> https://angular.io/guide/dependency-injection
  // - See Angular HttpClient docs --> https://angular.io/api/common/http/HttpClient
  constructor(private httpClient: HttpClient) {}

  getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(
      `${this.rootUrl}/pokemon/?limit=151` // String interpolation!
    );
  }

  getPokemonDetail(url: string): Observable<PokemonDetail> {
    return this.httpClient.get<any>(url).pipe(
      map(
        (response) =>
          ({
            id: response.id.toString()?.padStart(3, '0'),
            image: response.sprites.front_default,
            name: response.name,
            type: response.types.map((poke: any) => poke.type.name).join(' / '),
            height: response.height,
            weight: response.weight,
          } as PokemonDetail)
      )
    );
  }
}
