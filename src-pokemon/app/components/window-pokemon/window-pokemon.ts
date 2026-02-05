import { Component, inject } from '@angular/core';
import { PokemonsService } from '../../../services/pokemons-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'window-pokemon',
  imports: [CommonModule],
  templateUrl: './window-pokemon.html',
  styleUrl: './window-pokemon.css',
})
export class WindowPokemon {
  private readonly route = inject(ActivatedRoute);
  // @ts-ignore
  protected readonly pokemonId = parseInt(this.route.snapshot.paramMap.get("pokemonId"));

  private readonly service = inject(PokemonsService);
  protected readonly pokemon$ = this.service.retrievePokemon$(this.pokemonId);
}
