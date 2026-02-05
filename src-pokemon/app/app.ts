import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarApp } from "./components/navbar-app/navbar-app";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pokemonsenelmenumostradosHandler(e: void) {
    alert("Mostrados");
  }

  protected readonly title = signal('repaso');
}
