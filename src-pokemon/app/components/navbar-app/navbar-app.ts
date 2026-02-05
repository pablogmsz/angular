import { Component, inject, input, output } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { PokemonsService } from '../../../services/pokemons-service';
import { CommonModule } from '@angular/common';
import { SpinnerWait } from "../spinner-wait/spinner-wait";

@Component({
  selector: 'navbar-app',
  imports: [RouterLink, CommonModule, SpinnerWait],
  templateUrl: './navbar-app.html',
  styleUrl: './navbar-app.css',
})
export class NavbarApp {

  private readonly router = inject(Router);
  goToPoke(e: Event) {
    // @ts-ignore
    const pokemonId = e.target.value;
    this.router.navigateByUrl("/pokemons/" + pokemonId);
  }

  private readonly service = inject(PokemonsService);
  protected readonly pokemons$ = this.service.retrievePokemons$();

  mostrarListaPokemons = input<string>("no", {alias: "mostrar-lista-pokemons"});

  pokemonsMostradosEnElMenuEmitter = output<void>({alias: "pokemonsenelmenumostrados"});

  constructor() {
    if (this.mostrarListaPokemons() === "si") {
      void event;

      // @ts-ignore
      this.pokemonsMostradosEnElMenuEmitter.emit(event);
    }
  }
}
