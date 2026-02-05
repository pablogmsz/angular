import { Routes } from '@angular/router';
import { WindowPokemons } from './components/window-pokemons/window-pokemons';
import { WindowPokemon } from './components/window-pokemon/window-pokemon';

export const routes: Routes = [
    { path: "", redirectTo: "pokemons", pathMatch: "full"},
    { path: "pokemons", component: WindowPokemons},
    { path: "pokemons/:pokemonId", component: WindowPokemon},
    { path: "**", component: WindowPokemons},
];
