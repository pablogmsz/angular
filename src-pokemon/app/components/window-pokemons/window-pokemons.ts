import { Component, inject } from '@angular/core';
import { PokemonsService } from '../../../services/pokemons-service';
import { CommonModule } from '@angular/common';
import { SpinnerWait } from "../spinner-wait/spinner-wait";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'window-pokemons',
  imports: [CommonModule, SpinnerWait, RouterLink],
  templateUrl: './window-pokemons.html',
  styleUrl: './window-pokemons.css',
})
export class WindowPokemons {
  private readonly service = inject(PokemonsService);
  
  // Me suscribo para que funcione el get().
  protected readonly pokemons$ = this.service.retrievePokemons$();

  private readonly router = inject(Router);

  pokemonClicked(e: Event) {
    // @ts-ignore
    const pokemonId = e.target.dataset.pokemonId;

    this.router.navigateByUrl("pokemons/" + pokemonId);
  }
}
