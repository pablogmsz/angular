import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';

export type PokemonT = {
  id: number,
  name: string,
  height: number | undefined,
  weight: number |undefined,
  image: string | undefined,
}

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private readonly http = inject(HttpClient);

  public retrievePokemons$(): Observable<PokemonT[]> {
    // Estos 2 type no hace falta hacerlos en el examen.
    type Response = {
      results: PokemonDTO[],
    }

    type PokemonDTO = {
      name: string,
      url: string,
    }

    const url = "https://pokeapi.co/api/v2/pokemon";

    // @ts-ignore
    return this.http.get<Response>(url).pipe(
      // Los console.log no se dejan cuando hayamos acabado, es solo para observar los resultados.
      map(response => response.results),
      // @ts-ignore
      map(pokemons => pokemons.map(pokemon => ({id: pokemon.url.split("/")[6], name: pokemon.name}))),
      delay(2000),
    );
  }

  public retrievePokemon$(pokemonId: number): Observable<PokemonT> {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    // @ts-ignore
    return this.http.get(url).pipe(
      // Los console.log no se dejan cuando hayamos acabado, es solo para observar los resultados.
      map(pokemon => ({
        // @ts-ignore
        id: pokemon.id,
        // @ts-ignore
        name: pokemon.name,
        // @ts-ignore
        height: pokemon.height,
        // @ts-ignore
        weight: pokemon.weight,
        // @ts-ignore
        image: pokemon.sprites.front_default,
      })),
      delay(2000),
    );
  }
}
